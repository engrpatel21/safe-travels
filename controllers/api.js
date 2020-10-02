const axios = require('axios')

module.exports = {
    search,
    index,
    address
}

function address(req, res){
    console.log(req.body)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.streetNumber}+${req.body.streetName},+${req.body.state},+${req.body.state}&key=AIzaSyC7XewzzlIpPEnLlh_MOpUoaWoipdyBM_8`)
    .then(response =>{
        let county = response.data.results[0].address_components[3].long_name.split(' ')
        county.pop()
        county = county.join(' ')
        axios.get(`https://corona.lmao.ninja/v2/jhucsse/counties/${county}`)
        .then((response) => {
            res.render('results/results',{
                user: req.user ? req.user : null,
                results: response.data ? response.data : null,
                state: req.body.state ? req.body.state : null
            } )
        
    })
    })
}

function index(req, res){
    res.render('results/results', { user: req.user ? req.user: null, results: null})
}

function search(req, res) {
    console.log(req.body)
    axios.get(`https://corona.lmao.ninja/v2/jhucsse/counties/${req.body.county}`)
        .then((response) => {
            res.render('results/results',{
                user: req.user ? req.user : null,
                results: response.data ? response.data : null,
                state: req.body.state ? req.body.state : null
            } )
        
    })
}