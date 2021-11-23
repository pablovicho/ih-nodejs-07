const express = require("express")
const router = express.Router() //estableciendo en instancia  el manejo del rutero

const indexController = require("./../controllers/indexController")


router.get("/ejemplo", indexController.ejemplo)
router.get("/", indexController.home)

module.exports = router