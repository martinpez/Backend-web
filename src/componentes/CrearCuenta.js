import React, { useState } from "react";
import swal from "sweetalert";
import crud from '../conexiones/crud';
import { useNavigate } from 'react-router-dom';

const CrearCuenta = () => {
  const navegate = useNavigate();


  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  const { nombre, email, password, confirmar } = usuario;



  const onChange = (e) => {

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  };

  const CrearCuenta = async () => {
    // los dos password deben ser iguales

    if (password !== confirmar) {
      // console.log ("diferentes")
      const mensaje = "Passwords do not match";
      swal({
        icon: 'error',
        title: 'Oooh...',
        text: mensaje,
      })
    } else {

      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password

      }

      //console.log(data);
      const response = await crud.POST(`/api/usuarios`, data);
      const mensaje = response.msg;
      // console.log(mensaje);

      if (mensaje) {
        // const mensaje_creacionCuenta = "The user '" + email + "' already exists, please check with one that does not exist";
        swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',

        })

      } else {
        swal({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',

          timer: 1500
        })




        navegate("/");
        // redirecciona a inicio de seccion






      }
      setUsuario({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''

      })








    }

  };


  const onSubmit = (e) => {
    e.preventDefault();
    CrearCuenta();
  }

  return (
    <main>
      <div className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">

        <a href="/login">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home</button>
        </a>
      </div>

      <div className="container mx-auto mt-5 p-20 flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5" >
          <h1 class=" mb-4 text-xl font-medium text-gray-900 dark:text-white hover:text-violet-400 ">Create Account</h1>

          <form
            onSubmit={onSubmit}
            className="z-20 top-0 left-0 md:items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r md:items-center my-10 p-10 rounded-xl hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r"
          >
            <div>
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your Name</label>

              <input
                placeholder="Enter your full name"
                value={nombre}
                onChange={onChange}
                type="nombre"
                id="nombre"
                name="nombre"
                className="w-full p-1  border bg-gray-200 text-neutral-900 rounded-md  ">
              </input>

              <label className="block mb-2 text-sm  mt-2 font-medium text-gray-900 dark:text-white" >Email</label>

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

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Password</label>

              <input
                placeholder="•••••••••"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                className="w-full  p-1 border bg-gray-200 text-neutral-900 rounded-md  ">

              </input>


              <label className=" block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white" >Comfirm Password</label>

              <input
                placeholder="Comfirm Password"
                type="password"
                id="confirmar"
                name="confirmar"
                value={confirmar}
                onChange={onChange}
                className="w-full p-1 border bg-gray-200 text-neutral-900 rounded-md  ">
              </input>

              <div className="block my-5">
                <input
                  type="submit"
                  value="  Create Account"
                  className=" bg-gray-900 mb-5 py-4 cursor-pointer w-full  text-white uppercase font-bold rounded-2xl hover:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-600 to-gray-900" />
              </div>
              <a
                href="/"
                className=" flex mt-2 text-lg text-red-900 hover:underline hover:text-slate-900  "
              >
                Go Back
              </a>
            </div>
          </form>
        </div>
      </div>


      <div className="flex flex-nowrap">
        <div className=" bg-slate-900 p-10 text-slate-50 w-1/2 ">


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
              <p className=" text-lx text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
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





        </div>

      </div>



    </main>
  );

};


export default CrearCuenta;