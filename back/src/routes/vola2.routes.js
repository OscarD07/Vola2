import express from 'express';
import Vola2Controller from '../controllers/vola2.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Vola2
 *   description: Endpoints relacionados con Vola2
 */

/**
 * @swagger
 * /vola2/get-vuelos:
 *   get:
 *     summary: Obtiene la lista de vuelos
 *     tags: [Vola2]
 *     responses:
 *       '200':
 *         description: Lista de vuelos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 */
router.get('/vola2/get-vuelos', Vola2Controller.getVuelos);

/**
 * @swagger
 * /vola2/guardar-vuelo:
 *   post:
 *     summary: Guarda un nuevo vuelo
 *     tags: [Vola2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Vuelo guardado exitosamente
 */
router.post('/vola2/guardar-vuelo', Vola2Controller.saveVuelo);

/**
 * @swagger
 * /vola2/get-vuelos-buscar/{origen}/{destino}/{fechaSalida}/{num_pasajeros}:
 *   get:
 *     summary: Busca vuelos según criterios
 *     tags: [Vola2]
 *     parameters:
 *       - in: path
 *         name: origen
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: destino
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: fechaSalida
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *       - in: path
 *         name: num_pasajeros
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lista de vuelos que coinciden con la búsqueda
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 */
router.get('/vola2/get-vuelos-buscar/:origen/:destino/:fechaSalida/:num_pasajeros', Vola2Controller.getVuelosBuscar);

export default router;
