const Comment = require('../models/comment')

module.exports = {
    index,
    create,
    delete: deleteComment
}

function deleteComment(req,res){
    Comment.findByIdAndDelete(req.params.id)
    .then(comment => 
        res.redirect(`/comments/${comment.state}/${comment.county}`)
        )
}

function create(req, res) {
   Comment.create(req.body)
   .then(comment =>{
       res.redirect(`/comments/${comment.state}/${comment.county}`)
   })
}

function index(req, res) {
    Comment.find({state: req.params.state, county: req.params.county})
    .then(comments => {
      res.render('comments/index', { user: req.user ? req.user : null, comments, results: null, state: req.params.state, county: req.params.county})
    })
}