const server = require('./api/server');
const port = 5000;

const quotesRouter = require('./quotes/quotes-router.js')

server.use("/api/quotes", quotesRouter)

server.listen(port, () => {
    console.log('server running on port 5000!')
})

module.exports = server;