import { Router } from 'express';
import { User } from '../model';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const quotes = await User.find();
    res.send(quotes);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  const quote = await User.findByIdAndDelete(req.params.id);
  return res.send(quote);
});

router.put('/:id', async (req, res) => {
  const quote = await User.findByIdAndUpdate(
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

router.post('/', async (req, res) => {
  const quote = new User({
    sentence: req.body.sentence,
    author: req.body.author,
    movie: req.body.movie,
  });

  await quote.save();
  return res.send(quote);
});

export default router;
