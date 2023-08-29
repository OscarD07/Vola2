//para que lea las variables de entorno
import { config } from 'dotenv';
config();

export const PORT = 3600;
export const HOST = 'http://' + 'localhost' + ':' + PORT;
export const MONGODB_URI = 'mongodb://' + '127.0.0.1:27017/vola2'

export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;

export const PAYPAL_API_URL = 'https://api-m.sandbox.paypal.com';

