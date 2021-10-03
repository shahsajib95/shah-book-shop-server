const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  authorName: String,
  bookName: String,
  price: Number,
  quantity: Number,
  user_id: String,
  bookImage: {
    contentType: String,
    size: Number,
    image: Object,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  status: { type: String, default: "Pending" },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Order = mongoose.model("Order", postSchema);

module.exports = Order;
