# Temperature Converter API

A small Express.js API project for converting temperatures between Celsius and Fahrenheit.

This project is built with Express.js, a fast and minimalist web framework for Node.js. For the official documentation, see: https://expressjs.com/

## Description

This project is intended to provide a simple temperature conversion service, such as:

- Celsius to Fahrenheit
- Fahrenheit to Celsius

## Prerequisites

Before running the project, make sure you have installed:

- Node.js
- npm

## Installation

This project uses Express.js.

```bash
npm install express
```

## Run the application

```bash
npm start
```

## Run tests

```bash
npm test
```

## Project status

This repository currently contains the basic project setup and test script. The project was created with the following steps:

```bash
mkdir temperature-converter-api
cd temperature-converter-api
npm init
```

The initial application entry file is `app.js`.

You can extend it with the API server, endpoints, and validation logic as needed.

## Example conversions

- 0°C = 32°F
- 100°C = 212°F
- 32°F = 0°C
- 212°F = 100°C

## Suggested future structure

```text
.
├── app.js
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   └── utils/
├── tests/
├── package.json
├── README.md
└── .gitignore
```

## Notes

The project name is currently `temperature-converte-api`, and the package metadata describes a temperature conversion API. If you want, this README can later be expanded with the actual endpoint documentation once the server code is implemented.
