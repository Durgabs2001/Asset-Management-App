const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["Booked", "Pending"],
    default: "Pending"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userdetails",
    required: true
  },
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "assets",
    required: true
  }
}, {
  timestamps: true
});

const Booking = mongoose.model("bookings", bookingSchema);
module.exports = Booking;
