const blogData = require('../Data/data');

const category = (req, res) => {
    if (req.params.categoryName) {
        res.send(
            blogData.data.filter(
                value => value.Category === req.params.categoryName
            )
        );
    } else {
        res.send(`Error`);
    }
}
module.exports.category = category;