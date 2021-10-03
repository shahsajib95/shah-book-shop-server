const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  email: String,
});

const Admin = mongoose.model("Admin", postSchema);

module.exports = Admin;
