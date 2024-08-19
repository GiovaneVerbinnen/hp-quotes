import moviesList from '../constants/movies.json' with  { type: 'json' };
import { Movie } from '../model/index.js';

export async function seedMovie() {
  try {
    console.log('Start Movies Seeding');

    await Movie.deleteMany({});
    const insertedMovies = await Movie.insertMany(moviesList)
    console.log('Movies seeded successfully');
    return insertedMovies;
  } catch (err) {
    console.log(err.stack);
    throw err;
  }
}
