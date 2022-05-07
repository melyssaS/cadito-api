const express = require('express');
const router = express.Router()

const {  createPost, getPosts, getRecentPosts } = require('../controllers/post.controller');
router.post('/', createPost);
router.get('/', getPosts);
router.get('/recent', getRecentPosts);

module.exports = router;