const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model {
  get tableName() { return 'status' }
  get hasTimestamps() { return true }

  cards() {
    return this.hasMany('Card', 'status')
  }
}

module.exports = bookshelf.model('Status', Status);