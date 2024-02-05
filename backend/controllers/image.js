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

export const postImages = async (req, res) => {
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


export const getImage = async (req, res) => {
    const { query } = req.query;
    if (!query)
    {
        console.log("dddddd");
    }


  try {
    let results = await Image.find({
      title: { $regex: query, $options: 'i' },
    });

    res.json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
  };