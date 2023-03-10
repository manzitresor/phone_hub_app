import React from 'react'
import {FaUsers,FaLandmark} from "react-icons/fa"
import {BsFillDatabaseFill} from "react-icons/bs"

export default function Cards() {
  return (
    <>
     <section class="bg-white dark:bg-gray-900 ml-[200px]">
    <div class="container px-6  py-8 mx-auto">
        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            <div class=" w-full h-[180px] max-w-xs text-center rounded-md bg-cyan-600 hover:drop-shadow-2xl cursor-pointer"> 
              
              <h3 class="text-lg mt-14 flex ml-20 font-medium   text-white dark:text-gray-200"><FaUsers className="text-[#002242] text-4xl mr-3 " />USERS </h3>   
            <h1 className="text-5xl text-white font-extrabold">2</h1>
            </div>

            <div className="  w-full max-w-xs rounded-md text-center bg-red-600  hover:drop-shadow-2xl cursor-pointer ">
             
            <h3 class="text-lg flex ml-20  mt-14  font-medium text-white dark:text-gray-200"><BsFillDatabaseFill className="text-[#002242] text-3xl mr-4" />Products</h3>   
            <h1 className="text-5xl text-white font-extrabold">100</h1>
            </div>

            <div class="w-full max-w-xs rounded-md text-center bg-teal-300  hover:drop-shadow-2xl cursor-pointer">
            
            <h3 class="text-lg flex mt-14 font-medium text-white dark:text-gray-200 ml-20"><FaLandmark className="text-[#002242] text-3xl mr-4" />Healthy Exercises</h3>
            <h1 className="text-5xl text-white font-extrabold">50</h1>
            </div>
        </div>
    </div>
</section>
      
    </>
  )
}
