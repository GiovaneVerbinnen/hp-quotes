import { Router } from 'express';
import { Movie } from '../model/Movie.js';

const app = Router();

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API for managing movies
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The movie ID
 *                     example: 60b6c5edfc13ae148e000021
 *                   title:
 *                     type: string
 *                     description: The movie title
 *                     example: "Harry Potter and the Philosopher's Stone"
 *                   year:
 *                     type: number
 *                     description: The release year of the movie
 *                     example: 2001
 *                   director:
 *                     type: string
 *                     description: The director of the movie
 *                     example: "Chris Columbus"
 *                   slug:
 *                     type: string
 *                     description: The movie slug for URL-friendly identification
 *                     example: "stone"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error message detailing what went wrong"
 */

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie ID
 *     responses:
 *       200:
 *         description: The deleted movie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The movie ID
 *                   example: 60b6c5edfc13ae148e000021
 *                 title:
 *                   type: string
 *                   description: The movie title
 *                   example: "Harry Potter and the Philosopher's Stone"
 *                 year:
 *                   type: number
 *                   description: The release year of the movie
 *                   example: 2001
 *                 director:
 *                   type: string
 *                   description: The director of the movie
 *                   example: "Chris Columbus"
 *                 slug:
 *                   type: string
 *                   description: The movie slug
 *                   example: "stone"
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie ID
 *       - in: body
 *         name: movie
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - year
 *             - director
 *             - slug
 *           properties:
 *             title:
 *               type: string
 *               description: The movie title
 *               example: "Harry Potter and the Goblet of Fire"
 *             year:
 *               type: number
 *               description: The release year of the movie
 *               example: 2005
 *             director:
 *               type: string
 *               description: The director of the movie
 *               example: "Mike Newell"
 *             slug:
 *               type: string
 *               description: The movie slug
 *               example: "fire"
 *     responses:
 *       200:
 *         description: The updated movie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The movie ID
 *                   example: 60b6c5edfc13ae148e000021
 *                 title:
 *                   type: string
 *                   description: The updated movie title
 *                   example: "Harry Potter and the Goblet of Fire"
 *                 year:
 *                   type: number
 *                   description: The updated release year
 *                   example: 2005
 *                 director:
 *                   type: string
 *                   description: The updated director
 *                   example: "Mike Newell"
 *                 slug:
 *                   type: string
 *                   description: The updated movie slug
 *                   example: "fire"
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     parameters:
 *       - in: body
 *         name: movie
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - year
 *             - director
 *             - slug
 *           properties:
 *             title:
 *               type: string
 *               description: The movie title
 *               example: "Harry Potter and the Order of the Phoenix"
 *             year:
 *               type: number
 *               description: The release year of the movie
 *               example: 2007
 *             director:
 *               type: string
 *               description: The director of the movie
 *               example: "David Yates"
 *             slug:
 *               type: string
 *               description: The movie slug
 *               example: "phoenix"
 *     responses:
 *       200:
 *         description: The created movie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The movie ID
 *                   example: 60b6c5edfc13ae148e000021
 *                 title:
 *                   type: string
 *                   description: The movie title
 *                   example: "Harry Potter and the Order of the Phoenix"
 *                 year:
 *                   type: number
 *                   description: The release year of the movie
 *                   example: 2007
 *                 director:
 *                   type: string
 *                   description: The director of the movie
 *                   example: "David Yates"
 *                 slug:
 *                   type: string
 *                   description: The movie slug
 *                   example: "phoenix"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error message detailing what went wrong"
 */

app.get('/', async (req, res) => {
  try {
    const quotes = await Movie.find();
    res.send(quotes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/:id', async (req, res) => {
  const quote = await Movie.findByIdAndDelete(req.params.id);
  return res.send(quote);
});

app.put('/:id', async (req, res) => {
  const quote = await Movie.findByIdAndUpdate(
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
  const quote = new Movie({
    sentence: req.body.sentence,
    author: req.body.author,
    movie: req.body.movie,
  });

  await quote.save();
  return res.send(quote);
});

export default app;
