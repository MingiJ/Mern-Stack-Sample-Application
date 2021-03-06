const express = require('express')
const {getPosts, setPost, updatePost, deletePost} = require('../controllers/controllers')

const router = express.Router()

router.route('/').get(getPosts).post(setPost)

router.route('/:id').put(updatePost).delete(deletePost)

module.exports = router