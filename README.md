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

## Path design rationale

The endpoint is structured as `/v1/temperatures/convert/:unitToConvert` for a few clear reasons:

- `/v1` defines the API version and keeps future versions isolated from current clients.
- `/temperatures` indicates the resource being handled.
- `/convert` describes the action being performed, which keeps the route expressive and easy to read.
- `:unitToConvert` captures the destination unit as part of the URL, making the conversion target explicit and easy to inspect without mixing it into the request body.

This path keeps the route semantic and predictable while preserving a clean separation of responsibilities: the route declares the endpoint and delegates business logic to the controller.

## Request flow

```mermaid
sequenceDiagram
    participant Client
    participant API as Temperature API <<app.js>>
    participant Route as Route <<temperature.routes.js>>
    participant Controller as Controller <<temperature.controller.js>>
    participant VO as ValueObject <<temperature.vo.js>>

    Client->>API: POST /v1/temperatures/convert/FAHRENHEIT
    API->>Route: app.use('/', temperatureRoutes)
    Route->>Route: router.post('/v1/temperatures/convert/:unitToConvert', convertTemperature)
    Route->>Controller: convertTemperature(req, res)
    Controller->>Controller: Read req.params.unitToConvert and req.body
    Controller->>VO: new TemperatureVO(value, unit)
    VO-->>Controller: Return object
    Controller-->>Route: return res.status(200).json(temperature)
    Route-->>API: return response
    API-->>Client: JSON response
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
