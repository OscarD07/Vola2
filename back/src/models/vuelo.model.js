import mongoose from 'mongoose';

// Enumeración para el estado de los asientos
const EstateEnum = {
  OCUPADO: 'OCUPADO',
  DISPONIBLE: 'DISPONIBLE'
};

// Esquema para los asientos del avión
const asientoSchema = new mongoose.Schema({
  estado: {
    type: String,
    enum: [EstateEnum.OCUPADO, EstateEnum.DISPONIBLE],
    required: true
  },
  numero: {
    type: String,
    required: true
  }
});

// Esquema principal para un vuelo
const vueloSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  origen: {
    type: String,
    required: true
  },
  destino: {
    type: String,
    required: true
  },
  fechaSalida: {
    $date: {
      type: String,
      required: true
    }
  },
  duracionMinutos: {
    type: Number,
    required: true
  },
  asientos: {
    type: [asientoSchema], // Utilizar el esquema de asiento aquí
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
});

// Crear el modelo a partir del esquema
export const Vuelo = mongoose.model('Vuelo', vueloSchema);