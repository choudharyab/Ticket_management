var Model = require('./base');

var Priority = Model.extend({
    
    tableName: 'priority',
    hasTimestamps: true

});

module.exports = Priority;