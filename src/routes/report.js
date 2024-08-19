import { Router } from 'express';
import { Quote, Movie } from '../model/index.js';

const app = Router();

app.get('/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.send(quotes);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;
