const { item } = require('../connectors')

const query = {
  item (root, { id }) {
    return item.read(id)
  },
  items (root, { firstname, lastname }) {
    return item.readAll({ firstname, lastname })
  },
  users (root, { firstname, lastname }) {
    return item.readUsers({ firstname, lastname })
  }
}

module.exports = query
