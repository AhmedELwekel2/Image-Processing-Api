import path from "path"
import sharp from "sharp"
import fs from 'fs'

const resizeImage=async(imageName:string,imageWidth:number,imageHeight:number):Promise<string>=>{
    // check  if the image is resized before and if it resized before return the resized one
     
  const imagePath=`./images/${imageName}.jpg`
  const resizedImageExisted=fs.existsSync((path.join(__dirname,`../../images/resizedImages/${imageName}${imageWidth}x${imageHeight}.jpg`)))
  
  if (resizedImageExisted){
     const resizedImage=path.join(__dirname,`../../images/resizedImages/${imageName}${imageWidth}x${imageHeight}.jpg`)
      return resizedImage;

  }

  // if the image is not resized then resize it and return it 
 const outputImage=path.join(__dirname,`../../images/resizedImages/${imageName}${imageWidth}x${imageHeight}.jpg`)
 await sharp(imagePath).resize(imageWidth,imageHeight).
    toFile(outputImage)


return outputImage;



}

export default resizeImage;
