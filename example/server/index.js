const restify = require('restify')
const { graphqlRestify, graphiqlRestify } = require('apollo-server-restify')
const corsMiddleware = require('restify-cors-middleware')
const schema = require('./schema')

// setup base server
const server = restify.createServer({ title: 'Example GraphQL server' })

// setup middleware
const cors = corsMiddleware({
  origins: ['https://*', 'http://*', `http://localhost:${this._devServerPort}`],
  allowHeaders: ['*', 'authorization'],
  credentials: true
})

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

// setup graphql and graphiql
server.post('/graphql', graphqlRestify({ schema }))
server.get('/graphql', graphqlRestify({ schema }))

server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))

// setup static content
server.get('/*', restify.plugins.serveStatic({
  directory: `${__dirname}/../build`,
  default: 'index.html'
}))

// start server
const port = process.env.PORT || 9000
server.listen(port, () => {
  console.log(`Started server on port ${port}`)
})
