import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from "./Router/UserRouter.js";


const application = express();

application.use(bodyParser.json());
dotenv.config();

const APPLICATION_PORT = Number(process.env.PORT);
const MONGO_DB_URL = String(process.env.MONGO_URL);

mongoose
	.connect(MONGO_DB_URL)
	.then(() => {
		console.log('MongoDB connection was successful!');
		application.listen(APPLICATION_PORT, 'localhost', () => {
			console.log('Server is Running at ::', APPLICATION_PORT);
		});
	})
	.catch((err) => {
		console.log(
			'Error while connecting to MongoDB Instance::' + MONGO_DB_URL,
		);
	});

application.use( "/api/v1", route );