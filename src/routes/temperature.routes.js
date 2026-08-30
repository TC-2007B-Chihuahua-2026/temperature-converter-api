const express = require('express');
const TemperatureVO = require('../../valueobjects/temperature.vo');

const router = express.Router();

router.post('/v1/temperatures/convert/:unitToConvert', (req, res) => {
  const { value, unit } = req.body;
  const unitToConvert = req.params.unitToConvert;

  console.log('unitToConvert:', unitToConvert);

  const temperature = new TemperatureVO(value, unit);

  return res.status(200).json(temperature);
});

module.exports = router;
