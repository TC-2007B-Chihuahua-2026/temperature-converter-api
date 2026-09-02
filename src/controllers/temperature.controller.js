/**
 * Temperature request controller.
 */
const TemperatureVO = require('../../valueobjects/temperature.vo');

/**
 * Handles temperature conversion requests.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {import('express').Response} The TemperatureVO response.
 */
const convertTemperature = (req, res) => {
  const { value, unit } = req.body;
  const unitToConvert = req.params.unitToConvert;

  console.log('unitToConvert:', unitToConvert);

  const temperature = new TemperatureVO(value, unit);

  return res.status(200).json(temperature);
};

module.exports = {
  convertTemperature,
};
