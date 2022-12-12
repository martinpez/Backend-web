const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMidd = require("../middleware/authMidd");

router.post(
    "/",
    authController.auntenticarUsuarios
);

router.get("/" , authMidd , authController.usuarioAutenticado);

 
module.exports = router;