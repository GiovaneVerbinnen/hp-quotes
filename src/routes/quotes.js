import { Router } from 'express';
import { Quote, Movie } from '../model/index.js';

const app = Router();

/**
 * @swagger
 * tags:
 *   name: Quotes
 *   description: API for managing movie quotes
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of quotes
 *     tags: [Quotes]
 *     responses:
 *       200:
 *         description: A list of quotes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The quote ID
 *                     example: 60b6c5edfc13ae148e000021
 *                   sentence:
 *                     type: string
 *                     description: The quote sentence
 *                     example: "I solemnly swear that I am up to no good."
 *                   author:
 *                     type: string
 *                     description: The author of the quote
 *                     example: "Harry Potter"
 *                   movie_slug:
 *                     type: array
 *                     description: The slugs of the movies where the quote appears
 *                     items:
 *                       type: string
 *                     example: ["azkaban", "phoenix"]
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new quote
 *     tags: [Quotes]
 *     parameters:
 *        - in: body
 *          name: quote
 *          schema:
 *            type: object
 *            required:
 *              - sentence
 *              - author
 *              - movie_slug
 *            properties:
 *              sentence:
 *                type: string
 *                description: The quote sentence
 *                example: "I solemnly swear that I am up to no good."
 *              author:
 *                type: string
 *                description: The author of the quote
 *                example: "Harry Potter"
 *              movie_slug:
 *                type: array
 *                description: The slugs of the movies where the quote appears
 *                items:
 *                  type: string
 *                example: ["azkaban", "phoenix"]
 *     responses:
 *       200:
 *         description: The created quote
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The quote ID
 *                   example: 60b6c5edfc13ae148e000021
 *                 sentence:
 *                   type: string
 *                   description: The quote sentence
 *                   example: "I solemnly swear that I am up to no good."
 *                 author:
 *                   type: string
 *                   description: The author of the quote
 *                   example: "Harry Potter"
 *                 movie_slug:
 *                   type: array
 *                   description: The slugs of the movies where the quote appears
 *                   items:
 *                     type: string
 *                   example: ["azkaban", "phoenix"]
 *                 movie_id:
 *                   type: array
 *                   description: The IDs of the movies where the quote appears
 *                   items:
 *                     type: string
 *                   example: ["60b6c5edfc13ae148e000022"]
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete a quote by ID
 *     tags: [Quotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote ID
 *     responses:
 *       200:
 *         description: The deleted quote
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The quote ID
 *                   example: 60b6c5edfc13ae148e000021
 *                 sentence:
 *                   type: string
 *                   description: The quote sentence
 *                   example: "I solemnly swear that I am up to no good."
 *                 author:
 *                   type: string
 *                   description: The author of the quote
 *                   example: "Harry Potter"
 *                 movie_slug:
 *                   type: array
 *                   description: The slugs of the movies where the quote appears
 *                   items:
 *                     type: string
 *                   example: ["azkaban", "phoenix"]
 *       404:
 *         description: Quote not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update a quote by ID
 *     tags: [Quotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote ID
 *       - in: body
 *         name: quote
 *         schema:
 *           type: object
 *           required:
 *             - sentence
 *             - author
 *             - movie_slug
 *           properties:
 *             sentence:
 *               type: string
 *               description: The quote sentence
 *               example: "I solemnly swear that I am up to no good."
 *             author:
 *               type: string
 *               description: The author of the quote
 *               example: "Harry Potter"
 *             movie_slug:
 *               type: array
 *               description: The slugs of the movies where the quote appears
 *               items:
 *                 type: string
 *               example: ["azkaban", "phoenix"]
 *     responses:
 *       200:
 *         description: The updated quote
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The quote ID
 *                   example: 60b6c5edfc13ae148e000021
 *                 sentence:
 *                   type: string
 *                   description: The quote sentence
 *                   example: "I solemnly swear that I am up to no good."
 *                 author:
 *                   type: string
 *                   description: The author of the quote
 *                   example: "Harry Potter"
 *                 movie_slug:
 *                   type: array
 *                   description: The slugs of the movies where the quote appears
 *                   items:
 *                     type: string
 *                   example: ["azkaban", "phoenix"]
 *       404:
 *         description: Quote not found
 *       500:
 *         description: Internal server error
 */

app.get('/', async (req, res) => {
  const page = parseInt(Math.abs(req.query.page)) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const total = await Quote.countDocuments();
    const quotes = await Quote.find().skip(skip).limit(limit);
    const response = {
      total,
      page,
      limit,
      data: quotes,
    };
    res.send(response);
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
