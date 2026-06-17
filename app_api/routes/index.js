const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Method to authenticate our JWT
//checks auth header
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');
    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);
    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    const headers = authHeader.split(' ');
    if (headers.length < 1) {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);
    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token));
    jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401);
        }
        req.auth = verified;
        next();
    });
}

const tripsController = require('../controllers/trips');
const authenticationController = require('../controllers/authentication');

router.get('/trips', tripsController.tripsList);

//GET method for tripsFindByCode
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

router.post('/trips', authenticateJWT, tripsController.tripsAddTrip);

router.put('/trips/:tripCode', authenticateJWT, tripsController.tripsUpdateTrip);

// route for registering a new user
router.post('/register', authenticationController.register);

// route for logging in an existing user
router.post('/login', authenticationController.login);

module.exports = router;