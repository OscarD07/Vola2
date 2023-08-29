//para que lea las variables de entorno
import { config } from 'dotenv';
config();

export const PORT_BACKEND = 3600;
export const HOST_BACKEND = 'http://' + 'localhost' + ':' + PORT_BACKEND;
export const PORT_FRONTEND = 4200;
export const HOST_FRONTEND = 'http://' + 'localhost' + ':' + PORT_FRONTEND;


export const MONGODB_URI = 'mongodb://' + '127.0.0.1:27017/vola2'

export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;

export const PAYPAL_API_URL = 'https://api-m.sandbox.paypal.com';

