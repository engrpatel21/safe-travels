module.exports = {
    index
}

function index(req,res){
    res.render('tips', {user:req.user})
}