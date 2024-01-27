import mongoose from 'mongoose';
const { Schema } = mongoose;

const ImageSchema = new mongoose.Schema({
    // url: { type: String, required: true },
    path: String,
    name: String,
});

  export default mongoose.model("image", ImageSchema)
  
