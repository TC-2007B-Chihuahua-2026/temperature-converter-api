# Temperature Converter API

A small Express.js API project for temperature conversion workflows.

This project is built with Express.js, a fast and minimalist web framework for Node.js. For the official documentation, see: https://expressjs.com/

## Description

This project is intended to provide a simple temperature conversion API. The current implementation includes the project structure, route registration, and a value object model used by the API layer.

## Prerequisites

Before running the project, make sure you have installed:

- Node.js
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Run the application

Start the app with:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## API endpoint

The current route is:

```http
POST /v1/temperatures/convert/:unitToConvert
```

Example:

```http
POST /v1/temperatures/convert/FAHRENHEIT
```

Request body example:

```json
{
  "value": 0,
  "unit": "CELSIUS"
}
```

Current response example:

```json
{
  "value": 0,
  "unit": "CELSIUS"
}
```

This route currently echoes the incoming temperature value object while exposing the target unit through the URL parameter.

## Request flow

```mermaid
sequenceDiagram
    participant Client
    participant API as Temperature API
    participant Route as Route Handler
    participant VO as TemperatureVO

    Client->>API: POST /v1/temperatures/convert/FAHRENHEIT
    API->>Route: Forward request
    Route->>VO: Create TemperatureVO(value, unit)
    VO-->>Route: Return object
    Route-->>Client: JSON response
```

## Example conversions

- 0°C = 32°F
- 100°C = 212°F
- 32°F = 0°C
- 212°F = 100°C

## Project structure

```text
.
├── app.js
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── utils/
│   └── ...
├── valueobjects/
│   └── temperature.vo.js
├── tests/
├── package.json
├── README.md
├── .gitignore
└── package-lock.json
```

## Run tests

```bash
npm test
```

## Notes

- The application currently uses Express.js.
- The route and value object structure are in place for further conversion logic.
- The project is intended to evolve into a full temperature conversion API with additional validation and service logic.
