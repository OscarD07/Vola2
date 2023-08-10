const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var VueloSchema = Schema({
    origen: String,
    destino: String,
    fechaSalida: Date
});

module.exports = mongoose.model('vuelo', VueloSchema);