const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router.get('/trips', tripsController.tripsList);

//GET method for tripsFindByCode
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

module.exports = router;