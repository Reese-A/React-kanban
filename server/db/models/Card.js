const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards' }
  get hasTimestamps() { return true }

  priority() {
    return this.belongsTo('Priority', 'priority');
  }

  status() {
    return this.belongsTo('Status', 'status');
  }

  created_by() {
    return this.belongsTo('User', 'created_by');
  }

  assigned_to() {
    return this.belongsTo('User', 'assigned_to');
  }
}

module.exports = bookshelf.model('Card', Card)