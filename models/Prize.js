const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrizePoolSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  ticketPool: {
    type: Number,
    default: 0
  },
  prizeTotal: {
    type: Number,
    required: true
  },
  charityPool: {
    type: [Object]
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  pictures: {
      desktop: {
        type: [String],
        required: true
      },
      mobile: {
        type: [String],
        required: true
      }
  },
  secondaryPrizes: {
    places: {
      type: Number,
      required: true
    },
    prize: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  ticketsPrizes: {
    places: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  charityAmount: {
    type: Number
  },
  active: {
    type: Boolean,
    default: true
  },
  charityPledgeAmount: {
    type: Number
  },
  details: {
      description: {
        type: String,
        required: true
      },
      notables: {
        type: [String],
        required: true  
      }
  }
});

module.exports = Prize = mongoose.model("prize", PrizePoolSchema);