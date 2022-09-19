export  type image={
    imageName:string,
    width:number,
    height:number
}


 export const createImage=(imageName:string,width:string,height:string):image=>{

    const newImage:image={

        imageName:imageName,
        width:parseInt(width),
        height:parseInt(height)
    }
    return newImage
}

