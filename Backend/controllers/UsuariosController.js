
const Usuarios = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");


exports.crearUsuario = async (req, res) => {
    console.log(req.body);
    const { password, email } = req.body;

    try {

        // revisar que sea un unico usuario registrado
        let usuarios = await Usuarios.findOne({ email });
        if (usuarios) {
            return res.status(502).json({ msg: "El usuario Ya existe" })
        }




        //CREAR EL NUEVO USUARIO
        usuarios = new Usuarios(req.body);
        // Hash Encrip passwords (10) round 
        usuarios.password = await bcryptjs.hash(password, 10);


        //GAURDAR en la base de datos
        const usuarioAlmacenado = await usuarios.save();

        res.json(usuarioAlmacenado);
        //console.log(usuarioAlmacenado);



    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Hubo un error" });




    }

};
