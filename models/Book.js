// IMPORTACIONES
const mongoose = require("mongoose")


// SCHEMA
const bookSchema =  mongoose.Schema({ //requisitos para crear un libro
    title: String,
    descripton: String,
    author: String,
    rating: Number
},
{
   timestamps: true //para establecer la  fecha en la cual fue creado 
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book