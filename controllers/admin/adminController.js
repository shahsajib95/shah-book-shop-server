const Book = require('../../models/books')

const addBooks = async(req, res) =>{
    try{
        const {bookName, authorName, price} = await req.body
        const bookImage = await req.files.bookImage
        const image = bookImage.data;
        let imageData = {
            contentType: bookImage.mimetype,
            size: bookImage.size,
            image: Buffer.from(image, 'base64')
        }   
        const bookData = new Book({bookName, authorName, price, bookImage: imageData})
        await bookData.save()
        res.status(201).json({msg: 'Book Added Successfully'});

    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
}

const deleteBook = async(req, res) =>{
    const id = req.params.id
    try{
        await Book.deleteOne({_id: id})
        res.status(201).json({msg: 'Book Deleted Successfully'});

    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
}

module.exports = {
    addBooks,
    deleteBook
}