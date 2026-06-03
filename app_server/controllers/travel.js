// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
    'Accept': 'application/json'
    },
};

/* GET travel page */
const travel = async function (req, res, next) {
    //console.log("Travel controller start")
    await fetch(tripsEndpoint, options)
        .then(response => response.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else {
                if (!json.length) { // if json is length 0
                    message = "No trips found";
                }
            }
                res.render('travel', {title: "Travlr Getaways", activePage: 'travel', trips: json, message});
        })
    .catch((err) => res.status(500).send(err.message));
};


module.exports = {
    travel
};