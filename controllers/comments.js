const Comment = require('../models/comment')

module.exports = {
    index,
    create,
}

function create(req, res) {
    const comment = new Comment(req.body)
    comment.save(function(err) {
        if (err) return res.render('comments')
        res.redirect('/comments');
    })      
}

function index(req, res) {
    Comment.find({})
    .then(comments => {
      res.render('comments', { user: req.user, comments })
    })
}