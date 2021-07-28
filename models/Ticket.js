const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  prizeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  ticketNumber: {
    type: Number,
    required: true
  },
  datePurchased: {
    type: Date,
    required: true
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);