import express from 'express'
const router = express.Router()
import { protect } from '../middlewares/authMiddleware.js'
import { authUser, getUserProfile, registerUser} from '../controllers/userController.js'

// @desc    - signup/register user
// @route   - POST /api/users
//@access   - PUBLIC
router.post('/',  registerUser)

// @desc    - Auth user & get token
// @route   - POST /api/users/login
//@access   - Public 
router.post('/login', authUser)

// @desc    - Get user profile
// @route   - GET /api/users/profile
//@access   - PRIVATE
router.get('/profile', protect, getUserProfile)

export default router