import quotesList from '../constants/quotes.json' with { type: 'json' };
import { Quote, Movie } from '../model/index.js';

export async function seedQuote() {
  try {
    console.log('Start Quote Seeding');
    

    await Quote.deleteMany({});

    const quotes = [];

    for (let index = 0; index < quotesList.length; index++) {
      const element = quotesList[index];
      const quoteOnMovies = await Movie.find({ slug: element.movie_slug }).select('_id').lean();
      // const movieIds = quoteOnMovies.map(movie => movie);
      const quote = await Quote.create({
        ...element,
        movie_id: quoteOnMovies,
      });
      quotes.push(quote);
    }

    console.log('Quote seeded successfully');

    return quotes;
  } catch (err) {
    console.log(err.stack);
    throw err;
  }
}
