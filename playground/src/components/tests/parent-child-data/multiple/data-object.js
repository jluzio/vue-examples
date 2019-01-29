export class Item {
  /**
   * @param {String} id
   * @param {String} name
   */
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}

export class DataObject {
  title = 'Wonderful data'
  items = [
    new Item(1, 'item-1'),
    new Item(2, 'item-2'),
    new Item(3, 'item-3')
  ]
}
