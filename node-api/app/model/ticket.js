// Load required packages
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({

    title : String,

    description:  String,

    coords : [String], 

    createdOn : { type: Date, default: Date.now }

});

module.exports = mongoose.model('Ticket', TicketSchema);

