const Productos = require("../models/Productos");



exports.obtenerProducto = async (req , res) => {
    try{

        const productos = await Productos.find({creador: req.usuario.id});

        res.json({productos});




    }catch(error){
        res.status(400).json({mgs:"hubo un error"})
        console.log(error);
    }

};
exports.crearProducto = async (req , res) => {
  try{

    const productos = new Productos (req.body);

    productos.categoriaId = req.usuario.id;

    productos.save(); 

    res.json(productos);



  }catch(error){
        res.status(400).json({mgs:"hubo un error"})
        console.log(error);
  }

};



exports.actualizarProducto = async (req , res) => {
   const { id } = req.params;
   const productos = await Productos.findById(id);

   if(!productos){
    return res.status(400).json({mgs: "Producto no encontrado"})
   }
   
   if(productos.categoriaId.toString() !== req.usuario.id.toString()){
    return res.status(400).json({mgs: "accion no valida para este usuario"})
   }

   try{

    productos.nombre = req.body.nombre || productos.nombre;
    
    productos.descripcion = req.body.descripcion|| productos.descripcion;
   
    productos.stock = req.body.stock || productos.stock;
     
    productos.precio = req.body.precio || productos.precio;
    
    productos.imagen = req.body.imagen || productos.imagen;

    productos.save();

    res.json({productos});



   }catch(error){
    res.status(400).json({mgs:"hubo un error"})
    console.log(error); 
   }

};

exports.borrarProducto = async (req , res) => {
    const { id } = req.params;
    const productos = await Productos.findById(id);
    if(!productos){
        res.json({mgs: "No hay Productos para eliminar "})
    }

    try{
        await Productos.deleteOne({_id: req.params.id});
        res.json({mgs: "Producto eliminado"})

    }catch(error){

        res.status(400).json({mgs:"hubo un error"})
        console.log(error);  
    }
};
