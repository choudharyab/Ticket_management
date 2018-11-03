var TicketStatus = require('../models/ticketStatus');
var Priority=require('../models/priority');
var Ticket=require('../models/ticket');

var new_ticket_number="";

/**********Get All Ticket Status*************************************/
module.exports.getAllTicketStatus = function(req, res){
    TicketStatus.forge()
    .orderBy('id', 'ASC')
    .fetchAll()
    .then(function(ticketstatus){
        res.json({
            type: true,
            data: ticketstatus
        });
    }).catch(function(err){
        console.log(err.stack);
        res.status(400).json({error: err.message});
    });
};


/**********Get All Priority Status*************************************/
module.exports.getAllPriority = function(req, res){
    Priority.forge()
    .orderBy('id', 'ASC')
    .fetchAll()
    .then(function(Priority){
        res.json({
            type: true,
            data: Priority
        });
    }).catch(function(err){
        console.log(err.stack);
        res.status(400).json({error: err.message});
    });
};

/**********Get All Autogenerate Ticket Number*************************************/
module.exports.getAutogenerateNumber=function(req,res)
{
    Ticket.query(function (qb) {
                qb.orderBy('id', 'DESC');
                qb.limit(1);
            }).fetch()
            .then(function (ticket) {
                if(ticket=='' || ticket=='undefined' || ticket==null)
                {
                    console.log("tc");
                }else{
                    console.log("t",ticket.get('ticket_number'));
                    var arr = ticket.get('ticket_number').substring(6,9);
                    var new_number=parseInt(arr[2])+1;
                    var new_ticket_number="TICKET00"+new_number;
                    
                    res.json({
                    type: true,
                    data: new_ticket_number
                    });
                }
            }).catch(function(err){
                console.log(err.stack);
                res.status(400).json({error: err.message});
        });
}


/**********Get All Ticket *************************************/
module.exports.getAllTicket = function(req, res)
{
    Ticket.forge()
        .where('status','active')
        .where('user_id',req.query.user_id)
        .orderBy('id', 'ASC')
        .fetchAll({
            withRelated: ['user','ticket_status','priority']
            })
        .then(function(ticket){
            res.json({
                type: true,
                data: ticket
            });
        }).catch(function(err){
            console.log(err.stack);
            res.status(400).json({error: err.message});
        });
};

/**********Get  Ticket By Id *************************************/
module.exports.getTicketById=function(req,res)
{
       Ticket.forge({id:req.query.id})
             .where('status','active')
             .fetch({ withRelated: ['user','ticket_status','priority']})
             .then(function(ticket){
                 res.json({
                     type:true,
                     data:ticket
                 })
             })
             .catch(function(err){
                 res.status(400).json({error:err.message});
             })
};

/**********Create New Ticket*************************************/
module.exports.addTicket=function(req,res)
{
    const data=req.body.ticket;
   
    Ticket.forge({
        ticket_number:data.ticket_number,
        ticket_description:data.ticket_description,
        priority_id:data.priority_id,
        ticket_status_id:data.ticket_status_id,
        updated_person:data.updated_person,
        user_id:data.user_id,
        created_date:data.created_date
       
    })
    .save()
    .then(function(addedticket){
        res.json({
            type:true,
            data:addedticket
        })
    })
    .catch(function(err){
       res.status(400).json({error:err.message});
    })
}

/**********Update Ticket*************************************/
module.exports.updateTicket = function(req, res){
    
    const data=req.body.ticket;
    Ticket.forge({id: data.id})
    .fetch()
    .then(function(ticket){
        if(ticket){
            ticket.save({
                 ticket_number:data.ticket_number,
                 ticket_description:data.ticket_description,
                 priority_id:data.priority_id,
                 ticket_status_id:data.ticket_status_id,
                 updated_person:data.updated_person,
                 user_id:data.user_id,
                 created_date:data.created_date
                 
            })
            .then(function(updatedTicket){
                res.json({
                    type: true,
                    data: updatedTicket
                });
            });
        }else{
            res.json({
                type: false,
                error: 'Ticket having id ' + req.query.id +' does not exist'
            });
        }
    })    
    .catch(function(err){
        console.log(err.stack);
        res.status(400).json({error: err.message});
    });
};

/**********Delete Ticket*************************************/
module.exports.deleteTicket = function(req, res){
    
    Ticket.forge({id: req.query.id})
          .fetch()
          .then(function(ticket){
            if(ticket){
                ticket.save({status:"inactive"});
                res.json({
                    type: true,
                    data: ticket
                });
            }else{
                res.json({
                    type: false,
                    error: 'Ticket having id ' + req.query.id +' does not exist'
            });
        }
    })
    .catch(function(err){
        console.log(err.stack);
        res.status(400).json({error: err.message});
    });
};