import { Router } from 'express';
import seedDB from '../seeds/index.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Install
 *   description: API for Start DB
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Seed the database
 *     tags: [Install]
 *     description: Runs the database seeding script to populate the database with initial data.
 *     responses:
 *       200:
 *         description: Database seeded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Database seeded successfully"
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

router.get('/', async (req, res) => {
  try {
    const result = await seedDB();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
