const Book =    require("./../models/Book")

//list
exports.getAllBooks = async (req,res) => {
    const allBooks = await Book.find({})
    console.log(allBooks)
    res.render("books/list", {
        data: allBooks
})
}

//single
exports.getBook = async (req,res) => { //req es lo que envía el navegador
const singleBookID = req.params.bookID
const getTheBook = await Book.findById(singleBookID)
console.log(getTheBook)
    res.render("books/single", {
        data: getTheBook
    })
}

//create
exports.viewCreateBook = async(req,res) => {
    res.render("books/create")
}

exports.createBook = async (req,res) => {
console.log(req.body)
const title = req.body.title
const author  = req.body.author
const description = req.body.description
const rating = req.body.rating

const  newBookCreated = await Book. create({title, author, description, rating})
    console.log("datos recibidos")
    res.redirect("/books") //esto te lleva de nuevo a books
}

//edit
exports.viewEditBook = async (req, res) => {
	console.log(req.params)
	const bookID = req.params.bookID
	const foundBook = await Book.findById(bookID)
	res.render("books/edit", {
		data: foundBook
	})
}

exports.editBook =  async(req,res) => {
const bookID = req.params.bookID

const title = req.body.title
const description = req.body.description
const author = req.body.author
const rating = req.body.rating

const updatedBook =  await Book.findByIdAndUpdate(bookID, //primer argumento: ID,
    {title, description, author, rating},                 //luego los nuevos cambios en formato de objeto, 
    {new:true})                                           //y tercero devolver a la variable la actualización

res.redirect(`/books/${updatedBook._id}`)
}

exports.deleteBook = async(req,res) => {
    //identificar el libro que quiero borrar
    const bookID = req.params.bookID

    //realizamos borrado en base de datos
    const deletedBook = await Book.findByIdAndDelete(bookID) //findOneAndDelete borra el último que se actualizó 

    //redireccionar
    res.redirect("/books")
}