import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import swal from "sweetalert";
import crud from "../conexiones/crud";

const CrearCategoria = () => {

    const navegate = useNavigate();


    const [categoria, setCategoria] = useState({
        nombre: '',
        imagen: ""


    });

    const { nombre , imagen } = categoria;



    const onChange = (e) => {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

    };

    const ingresarCate = async () => {

        const data = {
            nombre: categoria.nombre,
            imagen:categoria.imagen

        }

        // console.log(data);
        const response = await crud.POST(`/api/categorias`, data);
        const mensaje = response.mgs;
        // console.log(mensaje)

        if (mensaje === "Campo vacio") {
            swal({
                position: 'top-end',
                title: 'Oops...',
                icon: 'error',
                text: 'You have to put a category',

                timer: 1500

            })
        } else {
            swal({
                position: 'top-end',
                icon: 'success',
                title: 'The Category Create correctly',

                timer: 1500

            })

            navegate("/admin");

        }

    };







    const onSubmit = (e) => {
        e.preventDefault();
        ingresarCate();
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
            <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <div className="flex flex-none items-center ">
                        <img src="https://cdn-icons-png.flaticon.com/512/3532/3532324.png" class="h-6 mr-3 sm:h-9"></img>
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-500 " > Catergory </span>
                    </div>





                </div>
            </nav>
            <>    Sidebar</><></>

            <div className="flex flex-nowrap border-b border-gray-500 " >

                <div className=" border-x border-gray-900 w-80 bg-gray-50 p-20 md:min-h-screen items-center">

                    <div className=" w-92 items-center ">
                        <Link

                            className="border-b border-purple-400 bg-slate-200 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                            to="/admin"> Return
                        </Link>
                    </div>

                </div>

                <main className=" flex-1 justify-center">


                    <div className="container mx-auto mt-5  p-20 flex md:justify-center">
                        <div className="md:w-2/3 lg:w-2/5" >
                            <h1 class=" self-center text-xl font-semibold whitespace-nowrap dark:text-slate-500">Catergory Create</h1>

                            <form
                                onSubmit={onSubmit}
                                className="md:items-center my-10 p-10 rounded-xl bg-gray-800 hover:bg-gray-700"
                            >
                                <div>
                                    <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Name</label>

                                    <input
                                        placeholder=" Tecnology, Home, Deport , Food .... "
                                        value={nombre}
                                        onChange={onChange}
                                        type="nombre"
                                        id="nombre"
                                        name="nombre"
                                        className="w-full p-1  border bg-gray-200 text-neutral-900 rounded-md  ">

                                    </input>
                                    <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Imagen</label>

                                    <input
                                        placeholder= ""
                                        value={imagen}
                                        onChange={onChange}
                                        type="text"
                                        id="imagen"
                                        name="imagen"
                                        className="w-full p-1  border bg-gray-200 text-neutral-900 rounded-md  ">

                                    </input>
                                    <div
                                        className="block my-5">
                                        <input type="submit"
                                            value="Create"
                                            className=" w-full  bg-sky-200 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0" /></div>






                                </div>
                            </form>
                        </div>
                    </div>




                </main>
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










        </main >
    );
};
export default CrearCategoria;