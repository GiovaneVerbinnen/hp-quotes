import { User } from '../model/index.js';
import bcrypt from 'bcrypt'

export async function seedUser() {
  try {
    console.log('Start User Seeding');

    await User.deleteMany({});
    const user = await User.create({
        name: 'admin',
        email: 'admin@hogwarts.uk',
        password: bcrypt.hash('123', 10, (_, hash) =>  hash),
        is_admin: true,
      });
    console.log('User seeded successfully');
    return user;
  } catch (err) {
    console.log(err.stack);
    throw err;
  }
}
