const mongoose = require('mongoose');  
mongoose.connect('mongodb://127.0.0.1:27017/library')  
.then(async () => {         
console.log('Connected to MongoDB');  
const bookSchema = new mongoose.Schema({  
Book_id: Number,  
Book_name: String,  
Author: String,  
            Price: Number  
        });  
  
        const Book = mongoose.model('Book', bookSchema);  
  
        await Book.insertMany([  
            { Book_id: 1, Book_name: 'Wings of Fire', Author: 'A.P.J. Abdul Kalam', Price: 250 },  
            { Book_id: 2, Book_name: 'The Alchemist', Author: 'Paulo Coelho', Price: 300 },  
            { Book_id: 3, Book_name: '1984', Author: 'George Orwell', Price: 280 },  
            { Book_id: 4, Book_name: 'Hamlet', Author: 'William Shakespeare', Price: 200 },  
            { Book_id: 5, Book_name: 'The Hobbit', Author: 'J.R.R. Tolkien', Price: 350 }  
        ]);  
  
        console.log('Five books inserted');         await mongoose.disconnect();  
    })  
    .catch(err => console.log(err)); 