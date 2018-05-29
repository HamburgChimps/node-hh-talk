const { item } = require('../connectors')

const mutation = {
  createItem (root, { input }) {
    return item.create(input)
  },
  updateItem (root, { input }) {
    return item.update(input)
  },
  deleteItem (root, { input }) {
    return item.delete(input)
  }
}

module.exports = mutation
