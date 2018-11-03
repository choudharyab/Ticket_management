var express = require('express');
var router = express.Router();

var ticketController = require('../controllers/ticket.controller');

router.get('/ticketstatus',ticketController.getAllTicketStatus);

router.get('/priority',ticketController.getAllPriority);

router.get('/getnew_ticketNumber',ticketController.getAutogenerateNumber);

router.post('/add_ticket',ticketController.addTicket);

router.post('/updateTicket', ticketController.updateTicket);

router.get('/getAllTicket',ticketController.getAllTicket);

router.get('/getTicket',ticketController.getTicketById);

router.get('/delete',ticketController.deleteTicket);


module.exports = router;