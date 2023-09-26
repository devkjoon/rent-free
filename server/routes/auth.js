import express from 'express';

const router = express.Router();

// get post put delete
router.get("/", (req, res) => {
    res.json({
      data: "hello from nodejs api from routes...",
    });
  });
  
  export default router