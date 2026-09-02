/**
 * Represents a temperature value object.
 */
class TemperatureVO {
  /**
   * Creates a new temperature value object.
   * @param {number} value - The numeric temperature value.
   * @param {string} unit - The temperature unit.
   */
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }
}

module.exports = TemperatureVO;
