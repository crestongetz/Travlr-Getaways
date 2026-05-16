var fs = require('fs');
var rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms page */
const roomsList = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways", activePage: 'rooms', rooms: rooms});
};

module.exports = {
    roomsList
};
