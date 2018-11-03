var Model = require('./base');

var TicketStatus = Model.extend({
    
    tableName: 'ticket_status',
    hasTimestamps: true

});

module.exports = TicketStatus;