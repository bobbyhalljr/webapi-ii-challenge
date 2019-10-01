const express = require('express');

const posts = require('../data/db');

const router = express.Router();

// GET POSTS
router.get('/', (req, res) => {
    posts.find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Error retreving posts'
        })
    })
})

// GET POSTS BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    posts.findById(id)
    .then(post => {
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({
                message: "Post NOT found"
            })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            errorMessage: "The post information can NOT be retreived."
        })
    })
})

// GET posts COMMENT BY ID
router.get('/:id/comments', (req, res) => {
    const id = req.params.id;
    posts.findCommentById(id)
    .then(comment => {
        if(id){
            res.status(200).json(comment)
        } else {
            res.status(404).json({
                message: "The post with the specified ID does NOT exist."
            })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            errorMessage: "The comments information could NOT be retreived"
        })
    })
})

// POST
router.post('/', (req, res) => {
    const id = req.params.id;
    posts.insert(req.body)
    .then(post => {
        if(req.body.title || req.body.contents){
            res.status(201).json(post)
        } else if(!req.body.title || !req.body.contents){
            res.status(400).json({
                message: "Please provide a title and contents for the post."
            })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            errorMessage: "There was an error saving the post to the database."
        })
    })
})

// POST COMMENTS BY ID
router.post('/:id/comments', (req, res) => {
    const id = req.params.id;
    posts.insertComment(req.body)
        .then(comment => {
            if(id){
                res.status(201).json(comment)
            } else if(!req.params.id){
                res.status(404).json({
                    message: "The post with the specified ID does NOT exist."
                })
            } else if(!req.body){
                res.status(400).json({
                    errorMessage: "Please provide text for the comment"
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                errorMessage: "There was an error while saving your comment to the database"
            })
        })
})

// PUT for posts
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    posts.update(id, changes)
    .then(post => {
        if(post){
            res.status(200).json(post)
        } else if(!id) {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        } else if(!req.body.title || !req.body.contents){
            res.status(400).json({
                errorMessage: "Please provide a title and contents"
            })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            errorMessage: "The post information can not be modified"
        })
    })
})

// DELETE for posts
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    posts.remove(id)
    .then(post => {
        if(post > 0){
            res.status(200).json({
                message: "The post has been removed"
            })
        } else {
            res.status(404).json({
                message: "The post could NOT be removed"
            })
        }
    })
})

module.exports = router;