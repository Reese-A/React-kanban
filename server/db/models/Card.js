const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards' }
  get hasTimestamps() { return true }

  priorities() {
    return this.belongsToMany('Priority', 'priority');
  }

  status() {
    return this.belongsToMany('Status', 'status');
  }

  creator() {
    return this.belongsToMany('User', 'created_by');
  }

  assignee() {
    return this.belongsToMany('User', 'assigned_to');
  }
}

module.exports = bookshelf.model('Card', Card)