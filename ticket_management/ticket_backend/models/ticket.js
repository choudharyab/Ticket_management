var Model = require('./base');
var User=require('./user');
var TicketStatus=require('./ticketStatus');
var Priority=require('./priority');

var Ticket = Model.extend({
    
    tableName: 'ticket',
    hasTimestamps: true,

      user:function()
      {
      	return this.belongsTo(User,'user_id');
      },
       ticket_status:function()
      {
      	return this.belongsTo(TicketStatus,'ticket_status_id');
      },
       priority:function()
      {
      	return this.belongsTo(Priority,'priority_id');
      },

});

module.exports = Ticket;