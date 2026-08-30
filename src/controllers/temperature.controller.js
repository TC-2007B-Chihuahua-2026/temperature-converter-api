/**
 * Temperature request controller.
 */
const TemperatureVO = require('../valueobjects/temperature.vo');
const {
    convertTemperature: convertTemperatureService,
} = require('../services/temperature.service');
const { validationResult } = require('express-validator');

/**
 * Handles temperature conversion requests.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {import('express').Response} The converted TemperatureVO response.
 */
const convertTemperature = (req, res) => {
    let result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    } else {
        const { value, unit } = req.body;
        const unitToConvert = req.params.unitToConvert;

        const temperature = new TemperatureVO(value, unit);
        const convertedTemperature = convertTemperatureService(temperature, unitToConvert);

        return res.status(200).json(convertedTemperature);
    }
};

module.exports = {
    convertTemperature,
};
