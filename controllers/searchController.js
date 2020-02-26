const axios = require("axios");

module.exports = {
    google: (req, res) => {
        axios
            .get(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    req.query.q +
                    "&maxResults=" +
                    req.query.max +
                    "&startIndex=" +
                    req.query.offset +
                    "&key=" +
                    process.env.GOOGLE_BOOKS_API_KEY
            )
            .then(result => {
                res.json(result.data);
            })
            .catch(err => {
                res.json(err);
            });
    }
};
