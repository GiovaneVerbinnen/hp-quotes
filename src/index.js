import express from 'express'
import './database.js'
import * as routes from './routes/index.js'

const port = 3001
const app = express()

app.use(express.json())

app.use('/quotes', routes.quotesRouter)
app.use('/install', routes.install)
app.use('/', (req, res) => res.status(200).json({ status: 'API Online' }))
// app.use('/user', routes);

app.listen(port, () => {
  console.log('App running')
})
