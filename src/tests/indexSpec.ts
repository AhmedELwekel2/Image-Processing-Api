import app from '../index'
import supertest from 'supertest';
import resizeImage from '../utilites/resizeImage';




const request=supertest(app);
describe('Testing endpoing response',()=>{

    it('tests /images endpoint',async()=>{
      const response=await request.get(`/images`) 
      expect(response.status).toBe(400) // if there is no parameters 
     
    


    })
    
    
})

describe('image processing',()=>{
  const imageName='santamonica'
  const width=200;
  const height=600;

  it('resize image when the paramaters are proper',async()=>{
    const response=await request.get(`/images?name=${imageName}&width=${width}&height=${height}`)
    expect(response.status).toBe(201)
  })
  
  it ('return an error msg when the image doesnt exist',async()=>{
    const response=await request.get(`/images?name=sami&width=${width}&height=${height}`)
    expect(response.text).toBe('The image doesnt exist')
  })

  it('return an error msg when something go wrong with the paramaters ',async()=>{

    const response=await request.get(`/images?width=${width}&height=${height}`)
    expect(response.text).toBe('something went wrong with the paramaters ,please enter imageName as string and width ,height in numbers')
  })
  it ('tests resizeImage methoed method ',async()=>{

    await expectAsync(resizeImage(imageName,width,height)).toBeResolved()

  })

  
 
})

