import { seedUser } from './user.js';
import { seedMovie } from './movie.js';
import { seedCharacter } from './character.js';
import { seedQuote } from './quote.js';

async function seedDB() {
  try {
    const users = await seedUser();
    const movies = await seedMovie();
    const characters = await seedCharacter();
    const quotes = await seedQuote();
    console.log(users, movies, characters,quotes);
    return {
      movies, characters, quotes, users
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default seedDB;
