var Model = require('./base');

var User = Model.extend({
    
    tableName: 'users',
    hasTimestamps: true

});

module.exports = User;