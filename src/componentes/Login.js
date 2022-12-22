import React, { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate, Link } from 'react-router-dom';
import crud from '../conexiones/crud';


const Login = () => {
  const navegate = useNavigate();
  const Swaler = withReactContent(Swal)


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

    if (usuario.password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Empty spaces',
        footer: 'Pless ,Try again'
      })
    } else if (mensaje === "el usuario no existe") {

      const mensaje_login = "The user '" + email + "' already exists.";

      Swaler.fire({
        icon: 'error',
        title: 'Oops...',
        text: mensaje_login,

      })
    } else if (mensaje === "contraseña incorrecta") {
      const mensaje_login_password = "The password not is correct";
      Swaler.fire({
        icon: 'error',
        title: 'Oops...',
        text: mensaje_login_password,

      });
    } else {

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

    const { value: text } = Swaler.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      Swaler.fire(text)

    }
  }





  return (
    <main>



      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center ">
            <img src="https://store-images.s-microsoft.com/image/apps.30365.9007199267045543.ca3d4293-db3f-4263-9eb8-b8bf57f6e1c7.d2082de4-8b22-4e73-bc1e-c1763cc8e8e3?mode=scale&q=90&h=300&w=300 " class="h-6 mr-3 sm:h-9"></img>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-500">Ecomerce</span>
          </a>




        </div>

      </nav>
      <div className="container mx-auto mt-5  p-20 flex md:justify-center  ">
        <div className="md:w-2/3 lg:w-2/5 ">
          <h1 class="mb-4 self-center font-black  text-xl  text-neutral-900 dark:text-white hover:text-neutral-400  "> Sign in Ecomerce </h1>


          <form
            onSubmit={onSubmit}
            className=" md:items-center my-10 p-10 rounded-xl bg-gray-800 hover:bg-gray-700">

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
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-50">Remember me</label>
                </div>

                <Link className="text-sm text-blue-900 hover:underline dark:text-sky-200"
                  to="/login">Lost Password?
                </Link>
              </div>


              <div
                className="block my-5">
                <input type="submit"
                  value="Login to your account"
                  className=" bg-gray-900 px-5 py-2.5 cursor-pointer w-full text-white uppercase font-bold rounded-lg hover:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-400 via-rose-400 to-lime-400" /></div>

              <p className="text-sm font-medium text-gray-500 dark:text-gray-50">
                Not registered?

                <Link className="text-blue-900 hover:underline dark:text-sky-200"
                  to="/crear-cuenta" > Create account
                </Link>

              </p>


            </div>
          </form>
        </div>

      </div>




      <div className="flex flex-nowrap mb-5 md:mb-0 ">
        <div className=" bg-slate-200  p-10 text-slate-50 w-full ">


          <h2 className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-900">CONTACT </h2>
          <hr className=" border-slate-700 "></hr>

          <ul className="list-disc">
            <li className=" mt-2 mb-5 md:mb-0">
              <p className=" block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <a
                  href="https://www.facebook.com/"
                  className=""
                >
                  Facebook
                </a></p>


            </li>
            <li className=" mt-2">
              <p className=" block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <a
                  href="https://mail.google.com/mail/u/0/?pli=1#inbox/"
                  className=""
                >
                  Email
                </a></p>
            </li>
            <li className=" mt-2"><p className=" block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <a
                href="https://github.com/martinpez"
                className=""
              >
                Github
              </a></p></li>
          </ul>

          <hr className=" border-slate-700 mt-6"></hr>
          <h6 className="mb-5 md:mb-0 mt-5 text-xs text-cyan-900 "> @Martin Elias</h6>
          <h6 className="mb-5 md:mb-0 mt-2 text-xs text-cyan-900"> Copyright © 2022 - Martin Perez.</h6>
          <br></br>

        </div>




      </div>












    </main>
  );
};
export default Login;