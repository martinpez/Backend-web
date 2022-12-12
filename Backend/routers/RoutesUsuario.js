
const { Router } = require("express");
const express = require("express");
const router = express.Router();
const UsuariosController = require("../controllers/UsuariosController");

router.post(
    "/",
    UsuariosController.crearUsuario
);
  
// DEFINIR EL MODELO
module.exports = router;
    

/*
router.get("/", (req , res) =>{

    res.json({mgs:"desde router el get"});

});

router.post("/", (req , res) =>{

        res.json({mgs:"desde router el pots hacia posmant"});
    
    });

router.put("/", (req , res) =>{

    res.json({mgs:"put desde el postman"});

});

router.delete("/", (req , res) =>{

    res.json({mgs:"delete pa desde el visual xd"});

});

*/


