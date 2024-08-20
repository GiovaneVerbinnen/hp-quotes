import express from 'express'
import './database.js'
import * as routes from './routes/index.js'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig.js';

const app = express()

app.use(express.json())

app.use('/quotes', routes.quotesRouter)
app.use('/report', routes.reportRouter)
app.use('/install', routes.install)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', (req, res) => res.status(200).json({ status: '🚀 API Online' }))


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
  console.log(`Swagger docs available at http://${HOST}:${PORT}/docs`);
})
