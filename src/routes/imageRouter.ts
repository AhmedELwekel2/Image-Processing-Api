import express from 'express'
import imageController from '../controllers/imageController'
const imagesRouter=express.Router()


imagesRouter.get('/',imageController)


export default imagesRouter 