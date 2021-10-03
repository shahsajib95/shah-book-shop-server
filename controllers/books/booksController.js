const Book = require("../../models/books");

const getBooks = async (req, res) => {
  try {
    const bookData = await Book.find({});
    res.status(201).json(bookData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getBooks,
};
