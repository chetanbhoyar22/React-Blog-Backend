const blogData = require('../Data/data');

const article = (req, res) => {
    const { ID, categoryName } = req.params;
    if (ID && categoryName) {
        res.send(
            blogData.data.filter(
                article => article.ID === ID && article.Category === categoryName
            )
        );

    } else {
        res.send(`Error`);
    }
}
module.exports.article = article;