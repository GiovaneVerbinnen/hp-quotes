import mongoose from 'mongoose';

export const User = mongoose.model('User', {
  name: String,
  password: String,
  email: String,
  is_admin: Boolean,
});
