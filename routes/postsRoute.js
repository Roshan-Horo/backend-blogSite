import express from 'express'
const router = express.Router()
import {protect} from '../middlewares/authMiddleware.js'
import { getPosts, getPostById, deletePost, createPost, updatePost } from '../controllers/postsController.js'

// @desc    - Fetch all posts
// @route   - GET /api/posts
//@access   - Public 
router.get('/', getPosts)

// @desc    - Create post
// @route   - POST /api/posts
//@access   - PRIVATE/USER
router.post('/', protect, createPost)

// @desc    - Fetch post by ID
// @route   - GET /api/posts/:id
//@access   - Public 
router.get('/:id', getPostById)

// @desc    - Update post
// @route   - PUT /api/posts/:id
//@access   - PRIVATE/USER
router.put('/:id', protect, updatePost)

// @desc    - delete post
// @route   - DELETE /api/posts/:id
//@access   - PRIVATE/USER
router.delete('/:id', protect, deletePost)

export default router