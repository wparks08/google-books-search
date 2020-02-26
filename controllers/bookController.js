const db = require("../models");

const handleResult = (query, res) => {
    query
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
};

module.exports = {
    findAll: (req, res) => {
        handleResult(db.Book.find({}), res);
    },

    save: (req, res) => {
        handleResult(db.Book.create(req.body), res);
    },

    delete: (req, res) => {
        handleResult(db.Book.findOneAndDelete({ _id: req.params.id }), res);
    }
};
