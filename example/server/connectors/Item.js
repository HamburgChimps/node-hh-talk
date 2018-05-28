const uuid = require('uuid/v4')

class ItemConnector {
  constructor () {
    this._items = []
  }

  create (itemData) {
    const item = { ...itemData, id: uuid() }
    this._items.push(item)
    return {
      success: true,
      message: 'Item created'
    }
  }

  read (id) {
    return this._items.find(item => id === item.id)
  }

  readAll ({ firstname, lastname }) {
    return this._items.filter((item) => firstname + lastname !== item.firstname + item.lastname)
  }

  readUsers () {
    const result = new Map()
    for (let item of this._items) {
      const { firstname, lastname } = item
      result.set(firstname + lastname, item)
    }
    return Array.from(result).map(arr => arr[1])
  }

  update (itemData) {
    if (!this._items.find(item => itemData.id === item.id)) {
      return {
        success: false,
        message: `Item with id of ${itemData.id} was not found`
      }
    } else {
      this._items = this._items.map(item => {
        if (itemData.id === item.id) {
          return {
            ...item,
            ...itemData
          }
        } else {
          return item
        }
      })
      return {
        success: true,
        message: `Item with id of ${itemData.id} was updated`
      }
    }
  }

  delete (id) {
    if (!this._items.find(item => id === item.id)) {
      return {
        success: false,
        message: `Item with id of ${id} was not found`
      }
    } else {
      this._items = this._items.filter(item => id !== item.id)
      return {
        success: true,
        message: `Item with id of ${id} was deleted`
      }
    }
  }
}

module.exports = ItemConnector
