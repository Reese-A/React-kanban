const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards' }
  get hasTimestamps() { return true }

  priorities() {
    return this.belongsTo('Priority', 'priority');
  }

  status() {
    return this.belongsTo('Status', 'status');
  }

  creator() {
    return this.belongsTo('User', 'created_by');
  }

  assignee() {
    return this.belongsTo('User', 'assigned_to');
  }
}

module.exports = bookshelf.model('Card', Card)