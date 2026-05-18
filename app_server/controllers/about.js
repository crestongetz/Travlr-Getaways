var fs = require('fs');
var aboutData = JSON.parse(fs.readFileSync('./data/about.json', 'utf8'));

/* GET about page */
const about = (req, res) => {
    res.render('about', {
        title: "Travlr Getaways",
        activePage: 'about',
        heading: aboutData.heading,
        sections: aboutData.sections,
        adsHighlights: aboutData.adsHighlights,
        extraHighlights: aboutData.extraHighlights
    });
};

module.exports = {
    about
};
