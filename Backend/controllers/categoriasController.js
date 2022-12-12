
const Categorias = require("../models/Categorias");



exports.obtenerCategoria = async (req , res) => {
    try{
        // find para un tiempo de respueta o pregunta y respuesta a la base de datos
        // creador : para ver solo la categoria que nesesita el usuario
        const categoria = await Categorias.find({creador: req.usuario.id});


        res.json({categoria});


    }catch(error){
        res.status(400).json({mgs: "Hubo un error"});
        console.log(error);
    };
}
exports.crearCategoria = async (req , res) => {
    // req lee lo que proviene de postman 
    // res escribimos a posmant 
 try{
    const categoria = new Categorias (req.body);

    categoria.creador = req.usuario.id;
    categoria.save(); // Guardar en la base de datos


    res.json(categoria); // visualizar en postman


 }catch(error){

    res.status(400).json({mgs: "Hubo un error"});
    console.log(error);
 }

};

exports.actualizarCategoria = async (req , res) => {
    const { id } = req.params;
    const categoria = await Categorias.findById(id);

    if (!categoria){ 
        return res.status(400).json({mgs: "categoria no encontrada"})
    }
    if(categoria.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({msg : "accion no valida para este usuario"})
    }

    try{
        categoria.nombre = req.body.nombre || categoria.nombre;
        categoria.save();
        res.json({categoria});


    }catch(error){
    
        res.status(400).json({mgs: "Hubo un error"});
        console.log(error);

      
    }
};

exports.borrarCategoria = async (req , res) => {
    try{
        await Categorias.deleteOne({_id: req.params.id});

        res.json({mgs:"categoria eliminado"})

    }catch(error){
    res.status(400).json({mgs: "Hubo un error"});
    console.log(error);
    }

};
