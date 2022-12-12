const Usuarios = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });  // importar entorno para generara el token


exports.auntenticarUsuarios = async (req, res) => {
    const { password, email } = req.body;

    try {
        //revisar que sea un usuario registrado
        let usuario = await Usuarios.findOne({ email });

        if (!usuario) {
           // console.log("el usuario no existe")
            return res.status(404).json({ msg: "el usuario no existe" });
        }

        //revisar el password
        const passwordCorect = await bcryptjs.compare(password, usuario.password);
        if (!passwordCorect) {
            return res.status(404).json({ msg: "contraseña incorrecta" });
            

        }

        //   console.log("Usuario ingreso");

        //creacion del token 
        // si todo es correcto : crear y firmar un token

        const payload = {
            usuario: { id: usuario.id }, 

        };
        //res.json(payload);  //contraseña 

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: "30d", // tiempo de experiracion del token / 30 dias
            },
            (error, token) => {
                if (error) throw error;
                // mensaje de confirmacion
                res.json({ token });


            }
        );


    } catch (error) {
        console.log(error);
    }

}

exports.usuarioAutenticado = async (req, res) => {
    try{

        const usuario = await Usuarios.findById (req.usuario.id);
        res.json ({ usuario });
        
    } catch (error) {


      res.status(500).json({ mgs: "Hubo un error" });
        //console.log(error)
    }

}