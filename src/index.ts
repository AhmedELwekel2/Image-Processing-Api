import express from 'express';
import * as dotenv from 'dotenv'
import  imagesRouter   from   './routes/imageRouter'
import path from 'path'
import { Request, Response, NextFunction } from 'express';

dotenv.config({path:'.env'})

const port=process.env.PORT;

const app=express();




app.get('/',(req:Request,res:Response)=>{
    res.status(300).send('Welcome to The Image Procssing Api')
})


app.use('/images',imagesRouter)



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

export default app