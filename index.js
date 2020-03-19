require('dotenv').config()
const server = require('./api/server');
const port = process.env.PORT || 5000;

const quotesRouter = require('./quotes/quotes-router.js')

server.use("/api/quotes", quotesRouter)

server.listen(port, () => {
    console.log(`server running on port ${port}!`)
})

module.exports = server;