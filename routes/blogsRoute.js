const express = require('express')
const blogRouter = express.Router()
const Blog = require('../schemas/blogSchema')

blogRouter.post('/:username',  (req,res)=>{
    let post = req.body
    let user = req.params.username
    let username = req.body.created_by
    let private = req.body.private


    if(private === true && user === username){
       Blog.create(post, (err, newPost)=>{
        if(err){
            res.status(404).json({message: err.message})
        }
        res.status(201).json({post: newPost})
        })

        }


})

blogRouter.get('/:username',  (req,res)=>{
    let user = req.params.username
    
    Blog.find({created_by: user}, (err, retUser)=>{
        if(err ){
            res.status(404).json({message: err.message})
        }
        res.status(200).json({posts: retUser})
       
    })
})

blogRouter.get('/',   (req,res)=>{
    let post = req.body

    Blog.find({posts: post}, (err, posts)=>{
        if(err){
            res.status(404).json({message: err.message})
        }
            const show = posts.filter(private => private.private != true)
             res.status(200).json({Posts: show})
            //  console.log(posts.private)
    })

})

// blogRouter.get('/show/:id',  (req,res)=>{
//     let post = req.body
//     let id = Number(req.params.id)
//     let work = post[id]


//     Blog.find({posts: work}, (err, posts)=>{
//         if(err){
//             res.status(404).json({message: err.message})
//         }
//             const show = posts.filter(private => private.private != true)
//             if(id > show.length){
//             res.status(404).json({message: err.message})
//             }
//              res.status(200).json({Posts: show[id]})
//             //  console.log(posts.private)
//     })
// })

blogRouter.put('/show/:id',  (req,res)=>{
    let post = req.body
    let id = req.params.id

     Blog.findByIdAndUpdate(id, post, (error, result)=>{
        if(error){
            res.status(404).json({error: error.message})
        }
         res.status(200).json({post: result})
    })
})

blogRouter.delete('/show/:id',  (req,res)=>{
    let post = req.body
    let id = req.params.id

     Blog.findByIdAndDelete(id, post, (error, result)=>{
        if(error){
            res.status(404).json({error: error.message})
        }
         res.status(200).json({post: result})
    })
})

module.exports = blogRouter