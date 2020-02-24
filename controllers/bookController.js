const db = require("../models");

module.exports = {
    findAll: (req, res, next) => {
        db.Book.find({})
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    },

    save: (req, res, next) => {
        db.Book.create(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    }
};
