const axios = require('axios')

module.exports = {
    search,
    index
}

function index(req, res){
    res.render('results/results', {results: null})
}

function search(req, res) {
    axios
        .get(`https://corona.lmao.ninja/v2/jhucsse/counties/Douglas`)
        .then((response) => {
            console.log(response.data)
            res.redirect({
                user: req.user ? req.user : null,
                results: response.data ? response.data : null,
                state: req.body.state ? res.body.state : null
            }, '/api/search')
        
    })
}