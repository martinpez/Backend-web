const jwt = require("jsonwebtoken");

module.exports = function (req , res , next ){
    //leer el token del header o desde postman
    const token = req.header("x-auth-token");
   // console.log(token);

    //revisar si no hay un token 
    if (!token) {
        return res.status(403).json({ mgs: "no hay token" });

  /*  }else{
        console.log("token exitoso");
      
  */ }

        // validar el token try cach por que hay que ir por la palabra secreta
    try{
        const cifrado = jwt.verify(token , process.env.SECRETA)
         req.usuario = cifrado.usuario;
         console.log(cifrado.usuario);
         next();


    }catch(error){
        res.status(400).json({ mgs: "token no valido" });
        //console.log(error);
     }
} 