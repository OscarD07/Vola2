import mongoose from 'mongoose';
import app from './app.js';
import {HOST_BACKEND, MONGODB_URI, PORT_BACKEND} from './config/config.dev.js'; // Importa la configuración como un objeto

mongoose.Promise = global.Promise;

mongoose.set('strict', false);

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Conexión a la BDD establecida con éxito...');
        app.listen(PORT_BACKEND, () => {
            console.log(`Servidor corriendo correctamente en la url: ${HOST_BACKEND}`);
        });
    })
    .catch(err => console.log(err));
