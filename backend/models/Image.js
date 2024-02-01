import mongoose from 'mongoose';
const { Schema } = mongoose;

const ImageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String },
    
});

  export default mongoose.model("image", ImageSchema)
  
