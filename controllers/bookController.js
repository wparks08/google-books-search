const db = require("../models");
const io = require("../services/socketIO");

const handleResult = (query, res, callback) => {
    query
        .then(result => {
            res.json(result);
            if (callback) {
                callback();
            }
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
        handleResult(db.Book.create(req.body), res, () => {
            io.emit("New book saved: " + req.body.title);
        });
    },

    delete: (req, res) => {
        handleResult(db.Book.findOneAndDelete({ _id: req.params.id }), res);
    }
};
