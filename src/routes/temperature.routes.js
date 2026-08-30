/**
 * Temperature route definitions.
 */
const express = require('express');
const { convertTemperature } = require('../controllers/temperature.controller');
const { check, param } = require('express-validator');

const router = express.Router();

/**
 * @openapi
 * /v1/temperatures/convert/{unitToConvert}:
 *   post:
 *     summary: Convert a temperature value to the requested unit
 *     tags: [Temperature]
 *     parameters:
 *       - in: path
 *         name: unitToConvert
 *         required: true
 *         schema:
 *           type: string
 *           enum: [CELSIUS, FAHRENHEIT]
 *         description: Unit to convert the temperature into.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *               - unit
 *             properties:
 *               value:
 *                 type: number
 *                 example: 23
 *               unit:
 *                 type: string
 *                 enum: [CELSIUS, FAHRENHEIT]
 *                 example: CELSIUS
 *     responses:
 *       200:
 *         description: Temperature converted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 value:
 *                   type: number
 *                   example: 73.4
 *                 unit:
 *                   type: string
 *                   enum: [CELSIUS, FAHRENHEIT]
 *                   example: FAHRENHEIT
 *       400:
 *         description: Invalid request payload or unit.
 */
router.post('/v1/temperatures/convert/:unitToConvert', [
        check("value").notEmpty().withMessage("value is mandatory"),
        check("value").isNumeric().withMessage("values must be a number"),
        check("unit").notEmpty().withMessage("unit is mandatory"),
        check("unit").isIn(['CELSIUS', 'FAHRENHEIT']).withMessage("unit must be CELSIUS or FAHRENHEIT"),
        param("unitToConvert").notEmpty().withMessage("unit to convert is mandatory"),
        param("unitToConvert").isIn(['CELSIUS', 'FAHRENHEIT']).withMessage("unit to convert must be CELSIUS or FAHRENHEIT")
    ], convertTemperature);

module.exports = router;
