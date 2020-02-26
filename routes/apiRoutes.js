const bookController = require("../controllers/bookController");
const searchController = require("../controllers/searchController");

module.exports = app => {
    app.route("/api/book")
        .get(bookController.findAll)
        .post(bookController.save);

    app.delete("/api/book/:id", bookController.delete);

    app.get("/api/search/google", searchController.google);
};
