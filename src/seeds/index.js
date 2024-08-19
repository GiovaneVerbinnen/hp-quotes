import { seedMovie } from './movie.js';
import { seedCharacter } from './character.js';

async function seedDB() {
  try {
    const movies = await seedMovie();
    const characters = await seedCharacter();
    console.log(movies, characters);
    return movies;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default seedDB;
