import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

const getPosts = asyncHandler(async (req,res) => {
   const posts = await Post.find()
   res.json(posts)
})

const getPostById = asyncHandler(async(req,res) => {
   const post = await Post.findById(req.params.id)
   if(post){
      res.json(post)
   }else{
      res.status(404)
      throw new Error('Post Not Found!')
      
   }
})

const deletePost= asyncHandler(async(req,res) => {
   const post = await Post.findById(req.params.id)

   if(post){
      await post.remove()
      res.json({message: 'Post Deleted'})
   }else{
      res.status(404)
      throw new Error('Post NOT Found!')
   }
})

const createPost = asyncHandler(async(req,res) => {
   const post = new Post({
      title: 'Sample title',
      user: req.user._id,
      image: '/images/sample.jpg',
      category: 'Sample Category',
      description: 'Sample description'
   })

   const createPost = await post.save()
   res.status(201).json(createPost)
})

const updatePost = asyncHandler(async (req,res) => {
   const { title, image, category, description} = req.body
   
   const post = await Post.findById(req.params.id)

   if(post){
      post.title = title
      post.image = image
      post.category = category
      post.description = description

      const updatePost = await post.save()
      res.json(updatePost)
   }else{
      res.status(404)
      throw new Error('Post Not Found')
   }
})

export {
   getPosts,
   getPostById,
   deletePost,
   createPost,
   updatePost
}