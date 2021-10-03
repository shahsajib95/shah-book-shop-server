const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  bookName: String,
  authorName: String,
  price: Number,
  bookImage: {
    contentType: String,
    size: Number,
    image: Object,
  },
  quantity: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Books = mongoose.model("Books", postSchema);

module.exports = Books;
