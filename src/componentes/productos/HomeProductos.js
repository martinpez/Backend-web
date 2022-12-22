import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import crud from "../../conexiones/crud";
import ViewProductos from "./ViewProductos";

const HomeProductos = () => {

    const [productos, setProductos] = useState([]);
    const cargarproductos = async () => {

        const response = await crud.GET(`/api/productos/${idCategoria}`);

        setProductos(response);
    };
    console.log(productos);

    useEffect(() => {
        cargarproductos();
    }, []);


    const navegate = useNavigate();
    const Swaler = withReactContent(Swal)

    const { idCategoria } = useParams();


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
            <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <div className="flex flex-none items-center ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2203/2203239.png" class="h-6 mr-3 sm:h-9"></img>
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-500  " > Products </span>
                    </div>






                </div>
            </nav>
            <div className="flex flex-nowrap border-b border-gray-500 " >



                <main className=" w-full bg-nuetral-900 pt-24 p-20 text-slate-50">

                    <h1 class="mb-4 text-xl font-medium text-gray-900 dark:text-white hover:text-violet-400 flex justify-center "> List of Products</h1>

                    <a className="" >
                        <Link className=' text-center text-black hover:text-blue-900' to="/admin">
                            <img src="https://cdn-icons-png.flaticon.com/512/3148/3148331.png" class=" items-center h-3 mr-2 sm:h-8"></img>

                        </Link>

                    </a>

                    <div className="mt-5">
                        <Link

                            className="border-b border-purple-400 bg-slate-200 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                            to={`/crear-producto/${idCategoria}`}>Create Product
                        </Link>
                    </div>

                    <div className=" w-full p-5"></div>
                    {productos.map(producto =>
                        <ViewProductos
                            key={producto._id}
                            producto={producto}
                        />
                    )}
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
export default HomeProductos;