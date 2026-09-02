/**
 * Temperature request controller.
 */
const TemperatureVO = require('../valueobjects/temperature.vo');
const {
  convertTemperature: convertTemperatureService,
} = require('../services/temperature.service');

/**
 * Handles temperature conversion requests.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {import('express').Response} The converted TemperatureVO response.
 */
const convertTemperature = (req, res) => {
  const { value, unit } = req.body;
  const unitToConvert = req.params.unitToConvert;

  const temperature = new TemperatureVO(value, unit);
  const convertedTemperature = convertTemperatureService(temperature, unitToConvert);

  return res.status(200).json(convertedTemperature);
};

module.exports = {
  convertTemperature,
};
