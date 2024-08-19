import { Router } from 'express';
import seedDB from '../seeds/index.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const savedMovies = await seedDB();
    res.send(savedMovies);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
