const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get tableName() { return 'priorities' }
  get hasTimestamps() { return true }

  cards() {
    return this.hasMany('Card', 'priority');
  }

}

module.exports = bookshelf.model('Priority', Priority);