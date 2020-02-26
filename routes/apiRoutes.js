const axios = require("axios");
const bookController = require("../controllers/bookController");

module.exports = app => {
    app.route("/api/book")
        .get(bookController.findAll)
        .post(bookController.save);

    app.delete("/api/book/:id", bookController.delete);

    app.get("/api/search/google", (req, res) => {
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
                console.log(result.data.totalItems, req.query.max, req.query.offset);
                res.json(result.data);
            })
            .catch(err => {
                res.json(err);
            });
    });
};
