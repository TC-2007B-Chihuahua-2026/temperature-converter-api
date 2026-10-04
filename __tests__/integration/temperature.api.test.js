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
});
