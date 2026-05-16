var fs = require('fs');
var contactData = JSON.parse(fs.readFileSync('./data/contact.json', 'utf8'));

/* GET contact page */
const contact = (req, res) => {
    res.render('contact', {
        title: "Travlr Getaways",
        activePage: 'contact',
        company: contactData.company,
        address: contactData.address,
        telephone: contactData.telephone,
        fax: contactData.fax
    });
};

module.exports = {
    contact
};
