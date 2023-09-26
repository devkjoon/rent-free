import express from 'express';

const router = express.Router();

import * as auth from '../controllers/auth.js';

router.get("/", auth.welcome);
router.post('/pre-register', auth.preRegister); // won't immediately save their info in the database
// will send a confirmation email, which will validate if they have a valid email
  
  export default router