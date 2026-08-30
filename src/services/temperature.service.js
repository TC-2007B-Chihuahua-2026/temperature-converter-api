/**
 * Temperature conversion service.
 */
const TemperatureVO = require('../../valueobjects/temperature.vo');

/**
 * Converts a temperature to the specified unit.
 * Placeholder implementation that returns the same value object.
 * @param {TemperatureVO} temperature - Temperature value object.
 * @param {string} unit - Target unit.
 * @returns {TemperatureVO} - The same value object for now.
 */
const convertTemperature = (temperature, unit) => {
  return temperature;
};

module.exports = {
  convertTemperature,
};
