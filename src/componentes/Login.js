import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import crud from '../conexiones/crud';


const Login = () => {
  const navegate = useNavigate();


  const [usuario, setUsuario] = useState({
    email: '',
    password: '',

  });

  const { email, password } = usuario;



  const onChange = (e) => {

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  };


  const loginC = async () => {

    const data = {
      email: usuario.email,
      password: usuario.password

    }
    console.log(data);
    const response = await crud.POST(`/api/auth`, data);
    const mensaje = response.msg;
   // const  mensaje = response.token;
    console.log(mensaje);

    if (mensaje === "el usuario no existe") {
      const mensaje_login = "The user '" + email + "' already exists.";

      swal({
        icon: 'error',
        title: 'Oops...',
        text: mensaje_login,

      })

    }
    if (mensaje === "contraseña incorrecta") {

      const mensaje_login_password = "The password not is correct";
      swal({
        icon: 'error',
        title: 'Oops...',
        text: mensaje_login_password,

      });
    } else if (!mensaje) {

      navegate("/admin");
      //redirecciona a inicio de seccion

      const jwt = response.token;
      
      //guardar la info en localstorage
      localStorage.setItem("token", jwt)
      
 

    }



  };


  const onSubmit = (e) => {
    e.preventDefault();
    loginC();
  }





  function Form() {
    swal({
      content: "input",
      buttons: "SEND",
      title: "Message"
    })


  }




  return (
    <main>
      <div className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <a href="/">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home</button>
        </a>
      </div>


      <div className="container mx-auto mt-5  p-20 flex md:justify-center ">
        <div className="md:w-2/3 lg:w-2/5">
          <h1 class="mb-4 text-xl font-medium text-gray-900 dark:text-white hover:text-violet-400  "> Sign in Ecomerce </h1>
          <form
            onSubmit={onSubmit}
            className="md:items-center my-10 p-10 rounded-xl bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-400 to-gray-900">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your email</label>

              <input
                placeholder="name@company.com"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                class="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none">
              </input>
              <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email.
              </p>




              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your password</label>

              <input
                placeholder="••••••••"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                className="w-full mt-3 p-1 border bg-gray-200 text-neutral-900 rounded-md "></input>

              <div class="flex justify-between mt-5">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-50">Remember me</label>
                </div>
                <a href="/" class="text-sm text-blue-900 hover:underline dark:text-sky-200">Lost Password?</a>
              </div>


              <div
                className="block my-5">
                <input type="submit"
                  value="Login to your account"
                  className=" bg-gray-700 px-5 py-2.5 cursor-pointer w-full text-white uppercase font-bold rounded-lg hover:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-600 to-gray-900" /></div>

              <p className="text-sm font-medium text-gray-500 dark:text-gray-50">
                {" "}
                Not registered?{" "} <a
                  href="/crear-cuenta"
                  className="text-blue-900 hover:underline dark:text-sky-200 "
                >
                  Create account
                </a></p>


            </div>
          </form>
        </div>

      </div>



      <div className="flex flex-nowrap">
        <div className=" bg-slate-900 p-10 text-slate-50 w-1/2">


          <h2 className="text-lg text-white w-2">CONTACT </h2>
          <hr></hr>

          <ul className="list-disc">
            <li className=" mt-2">
              <p className=" text-lx font-light text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <a
                  href="https://www.facebook.com/"
                  className=""
                >
                  Facebook
                </a></p>


            </li>
            <li className=" mt-2">
              <p className=" text-lx font-light text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <a
                  href="https://mail.google.com/mail/u/0/?pli=1#inbox/"
                  className=""
                >
                  Email
                </a></p>
            </li>
            <li className=" mt-2"><p className=" text-lx text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <a
                href="https://twitter.com/?lang=es"
                className=""
              >
                Facebook
              </a></p></li>
              <li className=" mt-2"><p className=" text-lx  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <a
                href="https://github.com/martinpez"
                className=""
              >
                Github
              </a></p></li>
          </ul>

          <hr></hr>
          <h6 className=" mt-5 text-xs"> @Martin Elias</h6>
          <h6 className=" mt-2 text-xs"> Copyright © 2022 - Martin Perez.</h6>

        </div>
        <div className="bg-slate-900 p-10 text-slate-50 w-1/2">


          <div className=" my-5 justify-end flex">

            <button className=" bg-slate-200 mb-5 py-4 cursor-pointer w-40 text-black uppercase font-bold rounded-2xl hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100" onClick={Form}>
              Comment
            </button>

          </div>


        </div>

      </div>












    </main>
  );
};
export default Login;