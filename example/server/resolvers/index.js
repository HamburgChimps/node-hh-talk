const query = require('./query')
const mutation = require('./mutation')

const resolvers = {
  Query: query,
  Mutation: mutation
}

module.exports = resolvers
