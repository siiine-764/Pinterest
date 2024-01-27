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
