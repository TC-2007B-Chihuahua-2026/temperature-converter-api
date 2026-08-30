const TemperatureVO = require('../../src/valueobjects/temperature.vo');
const { convertTemperature } = require('../../src/services/temperature.service');

describe('Temperature service', () => {
  test('GIVEN a Celsius temperature WHEN converted to Fahrenheit THEN it returns the converted value in Fahrenheit', () => {
    // GIVEN
    const celsiudTemperature = new TemperatureVO(23, 'CELSIUS');

    // WHEN
    const fahrenheitTemperature = convertTemperature(celsiudTemperature, 'FAHRENHEIT');

    // THEN
    expect(fahrenheitTemperature).toBeInstanceOf(TemperatureVO);
    expect(fahrenheitTemperature.value).toBe(73.4);
    expect(fahrenheitTemperature.unit).toBe('FAHRENHEIT');
  });

  test('GIVEN a Fahrenheit temperature WHEN converted to Celsius THEN it returns the converted value in Celsius', () => {
    // GIVEN
    const fahrenheitTemperature = new TemperatureVO(86, 'FAHRENHEIT');

    // WHEN
    const celsiusTemperature = convertTemperature(fahrenheitTemperature, 'CELSIUS');

    // THEN
    expect(celsiusTemperature).toBeInstanceOf(TemperatureVO);
    expect(celsiusTemperature.value).toBe(30);
    expect(celsiusTemperature.unit).toBe('CELSIUS');
  });
});
