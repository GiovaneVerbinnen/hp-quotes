import { Router } from 'express';
import { User } from '../model/index.js';

const app = Router();

/**
 * @swagger
 * /report:
 *   get:
 *     summary: Get user report
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: A report of all users with total count
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalUsers:
 *                   type: integer
 *                   description: Total number of users in the system
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The unique identifier for the user
 *                       name:
 *                         type: string
 *                         description: The name of the user
 *                       email:
 *                         type: string
 *                         description: The email address of the user
 *                       is_admin:
 *                         type: boolean
 *                         description: Whether the user is an admin
 */

app.get('/', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const users = await User.find().select('name email is_admin');
    const formattedUsers = users.map((user) => ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      is_admin: user.is_admin,
    }));
    res.json({
      totalUsers,
      users: formattedUsers,
    });
  } catch (error) {
    res.status(500).send({ error: 'Failed to generate report' });
  }
});

export default app;
