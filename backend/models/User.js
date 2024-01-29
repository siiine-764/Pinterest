// User.js (backend/models)
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensure uniqueness of email addresses
    },
    password: {
        type: String,
        required: true
    },
  // Other user fields...
});

export default mongoose.model('User', userSchema);
