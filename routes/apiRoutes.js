const axios = require("axios");
const bookController = require("../controllers/bookController");

module.exports = app => {
    app.route("/api/book")
        .get(bookController.findAll)
        .post();

    app.route("/api/book/:id")
        .get()
        .delete();

    app.get("/api/search/google", (req, res) => {
        axios
            .get(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    req.query.q +
                    "&key=" +
                    process.env.GOOGLE_BOOKS_API_KEY
            )
            .then(result => {
                res.json(result.data.items);
            })
            .catch(err => {
                res.json(err);
            });
    });
};
