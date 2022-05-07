const blogData = require('../Data/data');

const home = (req, res) => {
    res.send(blogData.data);
}
module.exports.home = home;