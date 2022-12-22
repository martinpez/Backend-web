import { useState } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import crud from "../../conexiones/crud";

const CrearProductos = () => {

    const navegate = useNavigate();
    const Swaler = withReactContent(Swal)
    const { idCategoria } = useParams();


    const [categoria, setCategoria] = useState({
        nombre: '',
        descripcion: '',
        stock: '',
        precio: '',
        imagen: '',
        categoriaId: "",


    });

    const { nombre, descripcion, stock, precio, imagen } = categoria;



    const onChange = (e) => {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

    };

    const ingresarProduct = async () => {

        const data = {
            nombre: categoria.nombre,
            descripcion: categoria.descripcion,
            stock: categoria.stock,
            precio: categoria.precio,
            imagen: categoria.imagen,
            categoriaId: idCategoria

        }

        console.log(data);
        const response = await crud.POST(`/api/productos`, data);
        const mensaje = response.mgs;
        console.log(mensaje)

        if (mensaje === "hubo un error") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Empty spaces',
                footer: 'Pless ,Try again'
              })
        }else{
            const Toast = Swaler.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swaler.stopTimer)
                    toast.addEventListener('mouseleave', Swaler.resumeTimer)
                }
            })
    
            Toast.fire({
                icon: 'success',
                title: 'Product successfully created'


            })

            navegate(`/home-productos/${idCategoria}`)
        }

        
   

    };







    const onSubmit = (e) => {
        e.preventDefault();
        ingresarProduct();
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
            Swal.fire(text)
        }
    }




    return (
        <main>
            <nav class="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <div className="flex flex-none items-center ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2203/2203239.png" class="h-6 mr-3 sm:h-9"></img>
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  " > Manager </span>
                    </div>






                </div>
            </nav>
            <>    Sidebar</><></>

            <div className="flex flex-nowrap border-b border-gray-500 " >

                <div className=" border-x border-gray-800 w-80 bg-gray-900 p-20 md:min-h-screen items-center">

                    <div className=" w-92 items-center ">
                        <Link

                            className="border-b border-purple-400 bg-slate-200 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                            to={`/home-productos/${idCategoria}`}> Return
                        </Link>



                    </div>



                </div>


                <div className="bg-nuetral-900 pt-16 p-10 text-slate-50 w-1/2">
                    <h1 class="mb-4 text-xl font-medium text-gray-900 dark:text-white hover:text-violet-400  "> Create Products</h1>


                    <form
                        onSubmit={onSubmit}
                        className="md:items-center my-10 p-10 rounded-xl bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r hover:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900"
                    >
                        <div>
                            <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Name</label>

                            <input
                                placeholder="  Name "
                                value={nombre}
                                onChange={onChange}
                                type="nombre"
                                id="nombre"
                                name="nombre"
                                className="w-full p-1  border bg-gray-200 text-neutral-900 rounded-md  ">

                            </input>




                            <label className=" block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white" >Description</label>

                            <input
                                placeholder="descripcion"
                                value={descripcion}
                                onChange={onChange}
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                className="w-full p-1  border bg-gray-200 text-neutral-900 rounded-md  ">

                            </input>

                            <label className=" block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white" >Stock</label>

                            <input
                                placeholder="Stock"
                                value={stock}
                                onChange={onChange}
                                type="number"
                                id="stock"
                                name="stock"
                                className="w-full p-1  border bg-gray-200 text-neutral-900 rounded-md  ">

                            </input>
                            <label className=" block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white" >Price</label>

                            <input
                                placeholder="Price"
                                value={precio}
                                onChange={onChange}
                                type="number"
                                id="precio"
                                name="precio"
                                className="w-full p-1  border bg-gray-200 text-neutral-900 rounded-md  ">

                            </input>


                            <label className=" block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white" >Image </label>

                            <input
                                placeholder=""
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
                                    value="Create Product"
                                    className=" w-full  bg-sky-200 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0" /></div>






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












        </main >
    );

};
export default CrearProductos;