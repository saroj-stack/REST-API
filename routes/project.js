const express = require('express')
const router = express.Router()
const project = require('../models/project')

//getting all//
router.get('/', async (req, res)=>{
  try{
    const projects = await project.find()
    res.json(projects)

  }catch(error){
    res.status(500).json({message: error.message})

  }
})
//getting one//
router.get('/:id', getCourse, (req, res)=>{
 res.json(res.course)
})
//creating one//
router.post('/', async (req, res)=>{
    
    const projects = new project({
        name:req.body.name,
        course:req.body.course
    })
    try{

      const newCourse = await projects.save()
      res.status(201).json(newCourse)

    } catch(error){
        console.log("error ",error)
       res.status(400).json({message:error.message})
    }
    
})
//updating one//
router.patch('/:id', getCourse, async (req, res)=>{
    
    if(req.body.name != null){
        res.course.name = req.body.name
    }
    if(req.body.course != null){
        res.course.course = req.body.course
    }
    try{
    const updateCourse = await res.course.save()
    res.json(updatedCourse)
    }catch(error){
    res.status(400).json({message: error.message})
    }
})
//deleting one//
router.delete('/:id', getCourse, async (req, res)=>{
    try{
  await res.course.remove()
  res.json({message:'Deleted course'})
    }catch(error){
      res.status(500).json({message: error.message})
    }
})

async function getCourse(req, res, next){
   try{
       course = await Course.findById(req.params.id)
       if(course == null){
         return res.status(404).json({message:'cannot find course'})
       }
   } catch(error){
      return res.status(500).json({message:error.messsage})
   }

   res.course = course
   next()
}

module.exports = router

