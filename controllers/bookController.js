const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Book.find({})
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    },

    save: (req, res) => {
        db.Book.create(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log("delete");
        db.Book.findOneAndDelete({ _id: req.params.id })
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    }
};
