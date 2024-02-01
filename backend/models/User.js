// User.js (backend/models)
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensure uniqueness of email addresses
    },
    username: { 
      type: String, 
      required: false, 
      unique: false 
    },
    password: {
        type: String,
        required: true
    },
    profileimage: { type: String }
});

export default mongoose.model('User', userSchema);
