import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import crud from "../conexiones/crud"

const Home = () => {


  const Swaler = withReactContent(Swal)

  const [categoria, setCategoria] = useState([]);
  const cargarCategorias = async () => {
    const response = await crud.GET(`/api/categorias`);
    setCategoria(response.categoria);

  }

  useEffect(() => {
    cargarCategorias();
  });


  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const response = await crud.GET(`/api/productos`);
    setProductos(response.productos);

  }

  useEffect(() => {
    cargarProductos();
  })


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
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center ">
            <img src="https://store-images.s-microsoft.com/image/apps.30365.9007199267045543.ca3d4293-db3f-4263-9eb8-b8bf57f6e1c7.d2082de4-8b22-4e73-bc1e-c1763cc8e8e3?mode=scale&q=90&h=300&w=300 " class="h-6 mr-3 sm:h-9"></img>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-500">Ecomerce</span>
          </a>
          <div class="flex md:order-2">

            <a >
            <Link className=' text-center text-black hover:text-blue-900' to="/login">
                <img src="https://cdn-icons-png.flaticon.com/512/9220/9220709.png" class=" items-center h-3 mr-2 sm:h-8"></img>
              
              </Link>

            </a>



            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-50 dark:border-gray-700">
              <li>
                <Link className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  to="/">Home
                </Link>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="flex-1 bg-neutral-900">
        <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-white">Shop by Category</h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categoria.map((category) => (
                    <a
                      key={category.nombre}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imagen} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{category.nombre}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-neutral-800">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-white">Products</h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {productos.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imagen}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-white">{product.nombre}</h3>
                    <p className="mt-1 text-sm text-white">{product.stock}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{product.precio}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="flex flex-nowrap mb-5 md:mb-0 ">
        <div className=" bg-neutral-600   p-10 text-slate-50 w-1/2 ">


          <h2 className="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-400">CONTACT </h2>
          <hr className=" border"></hr>

          <ul className="list-disc">
            <li className=" mt-2 mb-5 md:mb-0">
              <p className=" block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-neutral-400 dark:text-neutral-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <a
                  href="https://www.facebook.com/"
                  className=""
                >
                  Facebook
                </a></p>


            </li>
            <li className=" mt-2">
              <p className=" block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-neutral-400 dark:text-neutral-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <a
                  href="https://mail.google.com/mail/u/0/?pli=1#inbox/"
                  className=""
                >
                  Email
                </a></p>
            </li>
            <li className=" mt-2"><p className=" block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-neutral-400 dark:text-neutral-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <a
                href="https://github.com/martinpez"
                className=""
              >
                Github
              </a></p></li>
          </ul>

          <hr></hr>
          <h6 className="mb-5 md:mb-0 mt-5 text-xs "> @Martin Elias</h6>
          <h6 className="mb-5 md:mb-0 mt-2 text-xs "> Copyright © 2022 - Martin Perez.</h6>
          <br></br>
           
        </div>
        <div className="bg-neutral-600   p-10 text-slate-50 w-1/2">


          <div className=" mb-5 md:mb-0 my-5 justify-center flex flex-1">

            <button className="  mb-5 py-4 cursor-pointer w-40 uppercase font-bold rounded-2xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 text-gray-900 " onClick={Form}>
              Comment
            </button>

          </div>


        </div>

      </div>











    </main >
  );
};
export default Home;