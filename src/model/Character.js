import mongoose from 'mongoose'

const WandSchema = new mongoose.Schema({
  wood: String,
  core: String,
  length: Number,
})

export const Character = mongoose.model('Character', {
  name: { type: String, required: true },
  alternate_names: [String],
  species: String,
  gender: String,
  house: String,
  dateOfBirth: String,
  wizard: Boolean,
  ancestry: String,
  eyeColour: String,
  hairColour: String,
  wand: WandSchema,
  patronus: String,
  hogwartsStudent: Boolean,
  hogwartsStaff: Boolean,
  actor: String,
  alternate_actors: [String],
  alive: Boolean,
  image: String,
  movies: [String],
  movies_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})
