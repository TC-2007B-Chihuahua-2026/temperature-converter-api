/**
 * Temperature route definitions.
 */
const express = require('express');
const TemperatureVO = require('../../valueobjects/temperature.vo');

const router = express.Router();

/**
 * Converts the submitted temperature request into a TemperatureVO response.
 * @route POST /v1/temperatures/convert/:unitToConvert
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {import('express').Response} The TemperatureVO response.
 */
router.post('/v1/temperatures/convert/:unitToConvert', (req, res) => {
  const { value, unit } = req.body;
  const unitToConvert = req.params.unitToConvert;

  console.log('unitToConvert:', unitToConvert);

  const temperature = new TemperatureVO(value, unit);

  return res.status(200).json(temperature);
});

module.exports = router;
