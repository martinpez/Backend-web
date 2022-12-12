import swal from "sweetalert";


const Home = () => {
  
  function Form() {
    swal({
      content: "input",
      buttons: "SEND",
      title: "Message"
    })


  }




  return (
    <main>
     
<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" class="flex items-center ">
        <img src="https://store-images.s-microsoft.com/image/apps.30365.9007199267045543.ca3d4293-db3f-4263-9eb8-b8bf57f6e1c7.d2082de4-8b22-4e73-bc1e-c1763cc8e8e3?mode=scale&q=90&h=300&w=300 " class="h-6 mr-3 sm:h-9"></img>
         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ecomerce</span>
  </a>
  <div class="flex md:order-2">
    <a href="/login">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
      </a>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>


      <div className="container mx-auto mt-5 p-20 flex md:justify-center"></div>
        <div className="md:w-2/3 lg:w-2/5" ></div>
          <h1 class=" mb-4 text-xl font-medium text-gray-900 dark:text-white text-center hover:text-violet-400 ">PANEL FROM Home</h1>





      <div className="flex flex-nowrap">
        <div className=" bg-slate-900 p-10 text-slate-50 w-1/2">


          <h2 className="text-lg text-white w-2">CONTACT </h2>
          <hr></hr>

          <ul className="list-disc">
            <li className=" mt-2">
              <p className=" text-lx text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
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


          <div className=" my-5 justify-end flex">

            <button className=" bg-slate-200 mb-5 py-4 cursor-pointer w-40 uppercase font-bold rounded-2xl hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100  text-gray-700 " onClick={Form}> 
              Comment
            </button>

          </div>


        </div>

      </div>












    </main>
  );
};
export default Home;