import mongoose from 'mongoose';

const { Schema } = mongoose;

const VueloSchema = new Schema({
    origen: String,
    destino: String,
    fechaSalida: Date,
    asientosDisponibles: Number
});

export const Vuelo = mongoose.model('vuelo', VueloSchema);
