var fs = require('fs');
var homeData = JSON.parse(fs.readFileSync('./data/home.json', 'utf8'));

/* GET Homepage */
const index = (req, res) => {
    res.render('index', {
        title: "Travlr Getaways",
        activePage: 'home',
        hero: homeData.hero,
        blogPosts: homeData.blogPosts,
        testimonials: homeData.testimonials
    });
};

module.exports = {
    index
}