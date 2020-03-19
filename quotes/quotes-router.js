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

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const info = req.body;

    Quotes.update(changes, id)
        .then(newQuote => {
            res.status(200).json({ newQuote, info })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error saving your quote to the database" })
        })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Quotes.remove(id)
        .then(quote => {
            res.status(200).json({ message: "The quote has been removed" })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error deleting your quote from the database" })
        })
})

module.exports = router;