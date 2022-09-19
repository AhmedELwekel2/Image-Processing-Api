
import { Request, Response, NextFunction } from 'express';

import resizeImage from '../utilites/resizeImage';
import IsImageExisted from '../utilites/IsImageExisted'
import {createImage , image} from '../utilites/image';
const imageController= async (req:Request,res:Response):Promise<void>=>{
    
   

     const newImage=createImage(req.query.name as string,req.query.width as string,req.query.height as string)

     const {imageName,width,height}:image=newImage;

    
    try{

      
        
        // validate the inputs 

       if (!imageName ||!parseInt(req.query.width as string) || !parseInt(req.query.height as string) ){
        

          throw  'something went wrong with the paramaters ,please enter imageName as string and width ,height in numbers' 
          return
       }

       if (width <0 || height <0 ){
        throw 'Please provide the width and height in positive terms'
        return
       }







        // check if the image you want to resize existed

        if (! IsImageExisted(imageName)){
            throw 'The image doesnt exist'
            return


        }



        

    const resizedImage=await resizeImage(imageName,width,height)
     

    return res.status(201).sendFile(resizedImage);

        
        
        



 

    }
    
    
    
    catch(err){
        res.status(400).send(err)


    }



    





}

export default imageController