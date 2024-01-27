// User.js (backend/models)
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Other user fields...
});

export default mongoose.model('User', userSchema);
