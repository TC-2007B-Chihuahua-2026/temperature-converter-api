const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const temperatureRoutes = require('./src/routes/temperature.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', temperatureRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Temperature Converter app listening on http://0.0.0.0:${port}`);
});