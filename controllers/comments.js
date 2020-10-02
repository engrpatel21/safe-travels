const Comment = require('../models/comment')

module.exports = {
    index,
    create,
    delete: deleteComment
}

function deleteComment(req,res){
    Comment.findByIdAndRemove(req.params.id, function() {
        res.redirect('/comments')
    })
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
      res.render('results/results', { user: req.user ? req.user : null, comments, results: null})
    })
}