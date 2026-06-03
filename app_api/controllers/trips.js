const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET list of all trips
const tripsList = async (req, res) => {
    const q = await Model
        .find()
        .exec();

        if(!q) { // if no data found
            return res
                .status(404)
                .json(err);
        } else {
            return res
                .status(200)
                .json(q);
        }
    };

// GET trip by code
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ code: req.params.tripCode }) //return one trip by using code
        .exec();

        if(!q) { // if no data found
            return res
                .status(404)
                .json(err);
        } else {
            return res
                .status(200)
                .json(q);
        }
    };


module.exports = {
    tripsList,
    tripsFindByCode
}