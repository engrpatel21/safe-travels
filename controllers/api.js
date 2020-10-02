const axios = require('axios')
const Comment = require('../models/comment')

module.exports = {
    search,
    index,
    address
}

function address(req, res){
    console.log(req.body)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address},+${req.body.state},+${req.body.state}&key=AIzaSyC7XewzzlIpPEnLlh_MOpUoaWoipdyBM_8`)
    .then( geolocation =>{
        console.log(geoloaction.data.results[0].address_components)
        let county = geolocation.data.results[0].address_components[3].long_name.split(' ')
        county.pop()
        county = county.join(' ')
        axios.get(`https://corona.lmao.ninja/v2/jhucsse/counties/${county}`)
        .then((response) => {
            Comment.find({})
            .then(comments =>{
                res.render('results/results',{
                    user: req.user ? req.user : null,
                    results: response.data ? response.data : null,
                    state: req.body.state ? req.body.state : null,
                    geoLat: geolocation.data.results[0].geometry.location.lat ? geolocation.data.results[0].geometry.location.lat : null,
                    geoLng: geolocation.data.results[0].geometry.location.lng ? geolocation.data.results[0].geometry.location.lng : null,
                    comments: comments ? comments : null
                })
            })        
        })
    })
}

function index(req, res){
    Comment.find({})
    .then(comments =>{
        res.render('results/results', { user: req.user ? req.user: null, results: null, comments: comments ? comments : null})
    })

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