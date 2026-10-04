const request = require('supertest');
const app = require('../../app');

describe('Temperature API integration', () => {
  test('POST /v1/temperatures/convert/FAHRENHEIT converts Celsius to Fahrenheit', async () => {
    const response = await request(app)
      .post('/v1/temperatures/convert/FAHRENHEIT')
      .send({ value: 23, unit: 'CELSIUS' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ value: 73.4, unit: 'FAHRENHEIT' });
  });

  test('POST /v1/temperatures/convert/CELSIUS converts Fahrenheit to Celsius', async () => {
    const response = await request(app)
      .post('/v1/temperatures/convert/CELSIUS')
      .send({ value: 86, unit: 'FAHRENHEIT' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ value: 30, unit: 'CELSIUS' });
  });

  test('POST /v1/temperatures/convert/FAHRENHEIT returns 400 when value is missing', async () => {
    const response = await request(app)
      .post('/v1/temperatures/convert/FAHRENHEIT')
      .send({ unit: 'CELSIUS' });

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ msg: 'value is mandatory' }),
      ])
    );
  });

  test('POST /v1/temperatures/convert/FAHRENHEIT returns 400 when value is not numeric', async () => {
    const response = await request(app)
      .post('/v1/temperatures/convert/FAHRENHEIT')
      .send({ value: 'abc', unit: 'CELSIUS' });

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ msg: 'values must be a number' }),
      ])
    );
  });

  test('POST /v1/temperatures/convert/FAHRENHEIT returns 400 when unit is invalid', async () => {
    const response = await request(app)
      .post('/v1/temperatures/convert/FAHRENHEIT')
      .send({ value: 23, unit: 'KELVIN' });

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ msg: 'unit must be CELSIUS or FAHRENHEIT' }),
      ])
    );
  });

  test('POST /v1/temperatures/convert/KELVIN returns 400 when target unit is invalid', async () => {
    const response = await request(app)
      .post('/v1/temperatures/convert/KELVIN')
      .send({ value: 23, unit: 'CELSIUS' });

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ msg: 'unit to convert must be CELSIUS or FAHRENHEIT' }),
      ])
    );
  });
});
