var fs = require('fs');
var meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals page */
const mealsList = (req, res) => {
    res.render('meals', {title: "Travlr Getaways", activePage: 'meals', meals: meals});
};

module.exports = {
    mealsList
};
