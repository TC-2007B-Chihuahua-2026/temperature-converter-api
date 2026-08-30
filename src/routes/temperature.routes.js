/**
 * Temperature route definitions.
 */
const express = require('express');
const { convertTemperature } = require('../controllers/temperature.controller');

const router = express.Router();

/**
 * Converts the submitted temperature request into a TemperatureVO response.
 * @route POST /v1/temperatures/convert/:unitToConvert
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {import('express').Response} The TemperatureVO response.
 */
router.post('/v1/temperatures/convert/:unitToConvert', convertTemperature);

module.exports = router;
