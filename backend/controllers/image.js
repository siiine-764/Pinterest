import Image from "../models/Image.js";

export const getImages = async (req, res, next) => {

      try{
          const getImage = await Image.find({});
          //Success Responses
          res.status(200).json(getImage);
      }catch(err){
          //Server Error Responses
          next(err);
      }
    };

export const postImage = async (req, res) => {
    // res.send('Image uploaded successfully!');
    const { title, image } = req.body;
    try {

        // const userId = req.user.id; // Assuming you have middleware to extract user from JWT
    
        // Create a new post
        let post = new Image({
            title,
            image
        });
    
        // Save the post to the database
        await post.save();
    
        res.status(201).json({ message: 'Post created successfully' });
        } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        }
};
