// 1. IMPORTACIONES
const express = require("express")
const router = express.Router() //estableciendo en instancia  el manejo del rutero


// 2. RUTAS
router.get("/", (req,res) => {
    res.send("Estás en el home de teachers")
})

router.get("/mike", (req,res) => {
    res.send("Estás en la pága de teachers de Mike")
})

// 3. EXPORTACIONES
module.exports = router