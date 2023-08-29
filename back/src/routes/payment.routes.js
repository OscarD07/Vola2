import express from 'express';
import paymentController from '../controllers/payment.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Endpoints relacionados con pagos
 */

/**
 * @swagger
 * /payment/create-order:
 *   get:
 *     summary: Crea una nueva orden de pago
 *     tags: [Payment]
 *     responses:
 *       '200':
 *         description: Orden de pago creada correctamente
 *       '500':
 *         description: Error del servidor
 */
router.get('/create-order/:orderAmount', paymentController.createOrder);

/**
 * @swagger
 * /payment/capture-order:
 *   get:
 *     summary: Captura una orden de pago
 *     tags: [Payment]
 *     responses:
 *       '200':
 *         description: Orden de pago capturada correctamente
 *       '500':
 *         description: Error del servidor
 */
router.get('/capture-order', paymentController.captureOrder);

/**
 * @swagger
 * /payment/cancel-order:
 *   get:
 *     summary: Cancela una orden de pago
 *     tags: [Payment]
 *     responses:
 *       '200':
 *         description: Orden de pago cancelada correctamente
 *       '500':
 *         description: Error del servidor
 */
router.get('/cancel-order', paymentController.cancelOrder);

export default router;
