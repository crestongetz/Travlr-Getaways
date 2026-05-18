var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news page */
const newsList = (req, res) => {
    res.render('news', {
        title: "Travlr Getaways",
        activePage: 'news',
        featuredArticle: newsData.featuredArticle,
        latestNews: newsData.latestNews,
        vacationTips: newsData.vacationTips
    });
};

module.exports = {
    newsList
};
