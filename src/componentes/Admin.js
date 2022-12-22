import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import crud from "../conexiones/crud";


const Admin = () => {

  const Swaler = withReactContent(Swal)
  const Sing_out = () => {
    localStorage.removeItem("token");
    navegate("/");
  }

  const navegate = useNavigate();

  useEffect(() => {
    const autenticarU = async () => {

      const token = localStorage.getItem('token')
      //console.log(token)

      if (!token) {
        navegate("/login");

      }

    }

    autenticarU()

  }, [navegate]); // [] se ejecuta solo una vez


  const [categoria, setCategoria] = useState([]);

  const cargarCategorias = async () => {
    const response = await crud.GET(`/api/categorias`);
    console.log(response);
    setCategoria(response.categoria);
  }

  useEffect(() => {
    cargarCategorias();
  }, []);
  /*
  
  */


  const eliminarC = async (e, idCategoria) => {
    Swaler.fire({
      title: 'Are you sure of delete ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("pase por aqui")
        Swaler.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

        e.preventDefault();
        const response = crud.DELETE(`/api/categorias/${idCategoria}`);
        // console.log(response.msg);
        const mensaje = response.msg;

        cargarCategorias();



      }
    })


  }


  useEffect(() => {
    cargarCategorias();
  }, []);










  function Form() {
    Swaler({
      content: "input",
      buttons: "SEND",
      title: "Message"
    })


  }

  const actualizarCategoria = async (idCategoria) => {

    navegate(`/actualizar-categoria/${idCategoria}`);

  }

  const CrearPrductos = async (idCategoria) => {

    navegate(`/Home-productos/${idCategoria}`);

  }
  return (
    <main>
      
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center ">
            <img src="https://store-images.s-microsoft.com/image/apps.30365.9007199267045543.ca3d4293-db3f-4263-9eb8-b8bf57f6e1c7.d2082de4-8b22-4e73-bc1e-c1763cc8e8e3?mode=scale&q=90&h=300&w=300 " class="h-6 mr-3 sm:h-9"></img>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-500">Ecomerce</span>
          </a>






          <Link
            onClick={Sing_out}
            className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            to="/">Sing out
          </Link>




        </div>
      </nav>
      <>    Sidebar</><></>

      <div className="flex flex-nowrap border-b border-gray-500 " >

        <div className=" border-x border-gray-800 w-80 bg-gray-50 p-20 md:min-h-screen items-center">

          <div className=" w-92 items-center ">
            <Link

              className="border-b border-purple-400 bg-slate-200 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              to="/crear-categorias"> Create Category
            </Link>



          </div>



        </div>


        <div className="bg-nuetral-900 pt-16 p-10 text-slate-50 w-1/2">
          <h1 class="mb-4 self-center font-extrabold text-xl  text-neutral-900 dark:text-white hover:text-neutral-400  "> List of Catergorys</h1>

          <div>
            <table className=" border-separate border border-slate-50" >
              <thead>
                <tr>
                  <th className="border border-stone-500 bg-slate-50 text-black" > Image </th>
                  <th className="border border-stone-500 bg-slate-50 text-black"> Name </th>
                  <th className="border border-stone-500 bg-slate-50 text-black"> ID </th>
                  <th className="border border-stone-500 bg-slate-50 text-black"> Option </th>
                </tr>

              </thead>

              <tbody className=" bg-zinc-900">
                {

                  categoria.map(

                    item =>
                      <tr key={item._id}>
                        <td className="border border-slate-600"><img width={150} src={item.imagen}></img></td>
                        <td className=" justify-center mt-2 p-2 border border-slate-600"> {item.nombre} </td>
                        <td className="border border-slate-600"> {item._id} </td>
                        <td className="border border-slate-600">
                          <div className=" flex flex-nowrap mt-2 p-2">
                            <input
                              type="submit"
                              value="Delete"
                              onClick={(e) => eliminarC(e, item._id)}
                              className="  bg-red-900 hover:bg-red-600 hover:text-white text-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">

                            </input>
                            <input
                              type="submit"
                              value="Update"
                              onClick={(e) => actualizarCategoria(item._id)}
                              className=" bg-yellow-600 hover:bg-yellow-500 hover:text-white text-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">

                            </input>
                            <input
                              type="submit"
                              value="Create"
                              onClick={(e) => CrearPrductos(item._id)}
                              className=" bg-red-900 hover:bg-red-600 hover:text-white text-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">

                            </input>


                          </div>

                        </td>
                      </tr>


                  )

                }


              </tbody>
            </table>


          </div>



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

export default Admin;