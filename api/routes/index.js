var Amadeus = require('amadeus');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/city', function(req, res, next) {
    var json = []
    var amadeus = new Amadeus({
        clientId: 'RKanP3BxwhfrltLaPcZGhVBiXKA5sh8f',
        clientSecret: '3LxUZLj1AAdb9bsj'
    });


    amadeus.shopping.flightDestinations.get({
        origin: req.body.origin
    }).then(function(response) {
        var data = response.data
        for (var i = 0; i < 12; i++) {
            json.push(data[i])
        }
        return res.json(json);

    }).catch(function(responseError) {
        console.log(responseError.code);
    });
})

module.exports = router;