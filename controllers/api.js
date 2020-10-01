const axios = require('axios')

module.exports = {
    search
}

function search(req, res) {
    axios
        .get(`https://api.rawg.io/api/games?page_size=10&search=${req.body.query}`)
        .then((response) => {
            res.render('items/games', {
                title: 'Game Search',
                user: req.user ? req.user : null,
                results: response.data.results ? response.data.results : null
            })
        
    })
}