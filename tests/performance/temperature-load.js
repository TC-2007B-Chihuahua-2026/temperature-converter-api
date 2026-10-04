import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '15s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export default function () {
  // GIVEN a valid payload
  const validPayload = JSON.stringify({ value: 23, unit: 'CELSIUS' });

  // WHEN the API receives a valid conversion request
  const validResponse = http.post(
    `${BASE_URL}/v1/temperatures/convert/FAHRENHEIT`,
    validPayload,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  // THEN it should return a successful conversion response
  check(validResponse, {
    'valid request status is 200': (r) => r.status === 200,
    'valid request converts to FAHRENHEIT': (r) => JSON.parse(r.body).unit === 'FAHRENHEIT',
  });

  // GIVEN an invalid payload
  const invalidPayload = JSON.stringify({ value: 'abc', unit: 'CELSIUS' });

  // WHEN the API receives invalid input
  const invalidResponse = http.post(
    `${BASE_URL}/v1/temperatures/convert/FAHRENHEIT`,
    invalidPayload,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  // THEN it should reject the request with a 400 status
  check(invalidResponse, {
    'invalid request status is 400': (r) => r.status === 400,
  });

  sleep(1);
}
