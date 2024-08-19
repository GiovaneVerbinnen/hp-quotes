import { Router } from 'express';
import { Movie } from '../model/Movie.js';

const app = Router();

app.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.send(quotes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/:id', async (req, res) => {
  const quote = await Quote.findByIdAndDelete(req.params.id);
  return res.send(quote);
});

app.put('/:id', async (req, res) => {
  const quote = await Quote.findByIdAndUpdate(
    req.params.id,
    {
      sentence: req.body.sentence,
      author: req.body.author,
      movie: req.body.movie,
    },
    {
      new: true,
    }
  );
  return res.send(quote);
});

app.post('/', async (req, res) => {
  const quote = new Quote({
    sentence: req.body.sentence,
    author: req.body.author,
    movie: req.body.movie,
  });

  await quote.save();
  return res.send(quote);
});

export default app;
