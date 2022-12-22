const express = require("express");
const router = express.Router();
const authMidd = require("../middleware/authMidd");
const categoriasController = require("../controllers/categoriasController");

router.get("/"  ,categoriasController.obtenercategoriaHome);
router.get("/" , authMidd , categoriasController.obtenerCategoria);
router.get("/:id" , authMidd , categoriasController.obtenerCategoriaId);
router.post("/" , authMidd ,categoriasController.crearCategoria );
router.put("/:id" , authMidd ,categoriasController.actualizarCategoria );
router.delete("/:id" , authMidd ,categoriasController.borrarCategoria );



//definir las rutas
module.exports = router;