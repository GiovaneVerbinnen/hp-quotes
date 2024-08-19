import charactersList from '../constants/characters.json' with { type: 'json' };
import { Character, Movie } from '../model/index.js';

export async function seedCharacter() {
  try {
    console.log('Start Character Seeding');
    const movies = await Movie.find();

    await Character.deleteMany({});

    const characters = [];

    for (let index = 0; index < charactersList.length; index++) {
      const element = charactersList[index];

      const character = await Character.create({
        ...element,
        movies: movies.map((m) => m._id),
      });
      characters.push(character);
    }

    console.log('Character seeded successfully');

    return characters;
  } catch (err) {
    console.log(err.stack);
    throw err;
  }
}
