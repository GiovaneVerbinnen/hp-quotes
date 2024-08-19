import { Router } from 'express';
import { Quote, Movie } from '../model/index.js';

const app = Router();

app.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.send(quotes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/', async (req, res) => {
  const { sentence, author, movie_slug } = req.body;
  const result = await Movie.find({ slug: movie_slug }).select('_id');
  const quote = new Quote({
    sentence,
    author,
    movie_slug,
    movie_id: result.map((movie) => movie._id),
  });

  await quote.save();
  return res.send(quote);
});

app.delete('/:id', async (req, res) => {
  const quote = await Quote.findByIdAndDelete(req.params.id);
  return res.send(quote);
});

app.put('/:id', async (req, res) => {
  const { sentence, author, movie_slug } = req.body;
  const quote = await Quote.findByIdAndUpdate(req.params.id, {
    sentence,
    author,
    movie_slug,
  });
  if (!quote) {
    return res.status(404).send();
  }
  const resQuote = {
    id: quote._id,
    sentence: quote.sentence,
    author: quote.author,
    movie_slug: quote.movie_slug,
  };
  return res.send(resQuote);
});

export default app;
