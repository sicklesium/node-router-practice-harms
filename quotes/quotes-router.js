const Quotes = require('../quotes/quotes-model');
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    Quotes.getAll()
        .then(quotes => {
            res.status(200).json(quotes)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error retrieving the quotes" })
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params

    if (id) {
        Quotes.findById(id)
            .then(quote => {
                res.status(200).json(quote)
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "There was an error retrieving the quote specified" })
            })
    } else {
        res.status(404).json({ errorMessage: "The specified ID does not exist" })
    }

})

router.post("/", (req, res) => {
    const info = req.body;

    Quotes.insert(info)
        .then(quote => {
            res.status(201).json({ quote, info })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error creating your quote in the database" })
        })
})

module.exports = router;