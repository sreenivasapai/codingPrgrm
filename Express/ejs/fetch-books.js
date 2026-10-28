const mongoose = require('mongoose'); 
 
mongoose.connect('mongodb://127.0.0.1:27017/library') 
    .then(async () => { 
        const bookSchema = new mongoose.Schema({ 
            Book_id: Number, 
            Book_name: String, 
            Author: String, 
            Price: Number 
        }); 
 
        const Book = mongoose.model('Book', bookSchema); 
 
        const books = await Book.find( 
            {}, 
            { _id: 0, Book_name: 1, Author: 1 } 
        ); 
 
        console.log(books); 
 
        await mongoose.disconnect(); 
    }) 
    .catch(err => console.log(err)); 
