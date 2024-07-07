import express from "express";

import {
	ping,
	createUser,
	getUsers,
	getUsersByMobileNumber,
} from '../Controller/UserController.js';

const route = express.Router();

route.get( "/ping", ping );

route.post( '/user', createUser );

route.get( '/users', getUsers );

route.post('/user/mobile', getUsersByMobileNumber);

export default route;