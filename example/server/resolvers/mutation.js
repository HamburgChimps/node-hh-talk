const { item } = require('../connectors')

const mutation = {
  createItem (root, { input }) {
    return item.create(input)
  },
  updateItem (root, { input }) {
    return item.update(input)
  },
  deleteItem (root, { id }) {
    return item.delete(id)
  }
}

module.exports = mutation
