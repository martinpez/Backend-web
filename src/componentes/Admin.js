import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";


const Admin = () => {

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

  },[]); // [] se ejecuta solo una vez


  const Sing_out = () => {
    localStorage.removeItem("token");
    navegate("/");
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
       <div className=" flex flex-row-reverse bg-white px-2 sm:px-4 py-2.5  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <a href="/">
          <button
          onClick={Sing_out} 
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sing out</button>
        </a>
      </div>

      <div className="container mx-auto mt-5 p-20 flex md:justify-center"></div>
        <div className="md:w-2/3 lg:w-2/5" ></div>
          <h1 class=" mb-4 text-xl font-medium text-gray-900 dark:text-white text-center hover:text-violet-400 ">PANEL FROM ADMIN</h1>





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
export default Admin;