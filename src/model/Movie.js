import mongoose from 'mongoose';

export const Movie = mongoose.model('Movie', {
  title: String,
  year: Number,
  director: String,
  slug: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
});
