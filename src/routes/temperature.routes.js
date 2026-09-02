/**
 * Temperature route definitions.
 */
const express = require('express');
const { convertTemperature } = require('../controllers/temperature.controller');
const { check, param } = require('express-validator');

const router = express.Router();

/**
 * Converts the submitted temperature request into a TemperatureVO response.
 * @route POST /v1/temperatures/convert/:unitToConvert
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {import('express').Response} The TemperatureVO response.
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
