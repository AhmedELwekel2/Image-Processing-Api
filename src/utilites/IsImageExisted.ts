import path from "path"
import fs from 'fs'


const isImageExisted=(imageName:string):boolean=>{
    const imagePath=path.join(__dirname,`../../images/${imageName}.jpg`)
        

        const imageExisted=fs.existsSync(imagePath)
        

        return imageExisted;
}

export default isImageExisted