import mongoose from 'mongoose';

export const Quote = mongoose.model('Quote', {
  sentence: String,
  author: String,
  movie_slug: [String],
  movie_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});
