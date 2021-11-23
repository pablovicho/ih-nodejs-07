// 1. IMPORTACIONES
const express = require("express")
const app = express()

const  hbs = require("hbs")
const connectDB		= require("./config/db")
require("dotenv").config()


// 2. MIDDLEWARES
app.set("views", __dirname + "/views")
app.set("view engine",  "hbs")

hbs.registerPartials(__dirname + "/views/partials")

app.use(express.urlencoded({ extended: true })) //esto activa los datos recibidos del formulario

connectDB()

// 3. RUTEO

app.use("/", require("./routes/index"))
app.use("/teachers", require("./routes/teachers"))

app.use("/books", require("./routes/books"))

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
    console.log((`corriendo en el puerto http://localhost:${process.env.PORT}`))
})