import User from "../model/UserModel.js";

export const ping = async ( request, response ) =>
{
    try
    {
        console.log("Requested : ",request.originalUrl);
		return response.json('Good Day:: ' + new Date());
	} catch (error) {
		response.status(500).json({ errorCode: 500 });
	}
};

export const getUsers = async (request, response) => {
	try {
        console.log( 'Requested : ', request.originalUrl );
        
        const users =await User.find();
        if ( users.length === 0 )
        {
            return response.status( 404 ).json( "No User Found!" );
        } else
        { 
            response.status( 200 ).json( users );
        }
	} catch (error) {
		response.status(500).json({ errorCode: 500 });
	}
};


export const getUsersByMobileNumber = async (request, response) => {
	try {
		console.log('Requested : ', request.originalUrl);
        const userData = new User( request.body );
        const { mobile } = userData;
        const doesUserExits = await User.find( { mobile } );
        console.log('doesUserExits', doesUserExits);
        if ( doesUserExits.length ===0 )
        {
            response.status( 404 ).json( 'User Does Not Exists' );
            return;
        } else
        { 
            return response.status(200).json(doesUserExits[0]);
        }
	} catch (error) {
		response.status(500).json({ errorCode: 500 });
	}
};

export const createUser = async (request, response) => {
	try {
		console.log('Requested : ', request.originalUrl);
        const userData = new User( request.body )
        const { email } = userData;

        const doesUserExits = await User.findOne( { email } );
        
        if ( doesUserExits )
        { 
            response.status(400).json("User Already Exists" );
            return;
        }

        const savedUser = await userData.save();
        //response.body( JSON.stringify(savedUser) );
        response.status(201).json(savedUser);
    } catch ( error )
    {
        console.log("Error:",error);
        response.status(500).json( { errorCode: 500 } );
        return;
	}
};
