import React from 'react';


export const ViewProductos = ({producto}) =>{
    const {nombre ,descripcion,stock,precio,imagen}=producto;

    return (
        
            <div className=' bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl p-5 flex justify-between items-center'>
                <div className='flex flex-col items-start'>
                <p className='mb-1 text-lg text-slate-50'>Name: {nombre}</p>
                <p className='mb-1 text-lg text-slate-50'>Description: {descripcion}</p>
                <p className='mb-1 text-lg text-slate-50'>Stock: {stock}</p>
                <p className='mb-1 text-lg text-slate-50'>Price: {precio}</p>
                <img src={imagen} width="200"></img>
           
                </div>

                <div className=' ml-3 flex flex-col lg:flex-row gap-2'>
                <input
                              type="submit"
                              value="Delete"
                              //onClick={(e) => eliminarC(e, item._id)}
                              className="  bg-red-700 hover:bg-red-900 hover:text-slate-500 text-slate-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">

                            </input>
                            <input
                              type="submit"
                              value="Update"
                            //  onClick={(e) => actualizarCategoria( item._id)}
                              className=" text-black bg-yellow-300 hover:bg-yellow-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">

                            </input>


                </div>

            </div>

    );
}



export default ViewProductos;