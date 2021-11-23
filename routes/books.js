const express = require("express")
const router = express.Router()

const  bookController = require("./../controllers/bookController")

//crear un libro -vista(para ver el formulario)
router.get("/create", bookController.viewCreateBook)
router.post("/create", bookController.createBook) // ruta para recibir datos de formulario

//lectura de los libros creados
router.get("/", bookController.getAllBooks) //¿qué era get all books?

//lectura de un libro e specífico
router.get("/:bookID", bookController.getBook) //este dos puntos significa, cualquier parámetro después de books va a ejecutar bookcontroller.getBook
//bookID le va a pasar al controller una variable, con el formato  bookID: {value}
//este tiene que ir siempre al  final, porque si no el código va a leer cualquier cosa como un bookID. es un parámetro dinámico

//editar un libro
router.get("/:bookID/edit", bookController.viewEditBook)
router.post("/:bookID/edit", bookController.editBook)

//borrar un libro específico
router.post("/:bookID/delete", bookController.deleteBook)

module.exports = router