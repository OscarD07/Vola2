import express from 'express';
import bodyParser from 'body-parser'; // para poder acceder a los parámetros del body
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import vola2_routes from './routes/vola2.routes.js'; // cargar el archivo de rutas
import paymentRoutes from './routes/payment.routes.js';
import swaggerDefinition from './config/config.swagger.js';

const app = express(); // cargar el objeto de express

app.use(bodyParser.urlencoded({ extended: false })); // para que bodyparser funcione
app.use(bodyParser.json());

// Configuración del entorno
const environment = process.env.NODE_ENV || 'dev.js';

(async () => {
    const configModule = await import(`./config/config.${environment}`);
    const config = configModule.default;
    console.log('Configuración cargada: ', config);
})();

// Configuración de swagger

const specs = swaggerJsdoc(swaggerDefinition);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

// Configuración de CORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // para permitir el acceso a todos los dominios
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'); // para permitir los métodos http
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // para permitir los métodos http
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); // para permitir los métodos http
    next();
})

// Configuración de rutas base

app.use('/', vola2_routes); // para cargar las rutas
app.use('/', paymentRoutes);

export default app; // para poder usar express fuera de este archivo
