/**
 * Temperature conversion service.
 */
const TemperatureVO = require('../valueobjects/temperature.vo');

/**
 * Converts a temperature to the specified unit.
 * @param {TemperatureVO} temperature - Temperature value object.
 * @param {string} unit - Target unit.
 * @returns {TemperatureVO} - Converted temperature value object.
 */
const convertTemperature = (temperature, unit) => {
  if (temperature.unit === 'CELSIUS' && unit === 'FAHRENHEIT') {
    const convertedValue = (temperature.value * 9) / 5 + 32;
    return new TemperatureVO(convertedValue, unit);
  }

  return temperature;
};

module.exports = {
  convertTemperature,
};
