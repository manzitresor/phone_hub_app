import React from 'react'

export default function Cards() {
  return (
    <>
     <section class="bg-white dark:bg-gray-900 ml-[200px]">
    
    <div class="container px-6  py-8 mx-auto">
        
        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            <div class=" w-full h-[180px] max-w-xs text-center rounded-md bg-cyan-600 hover:drop-shadow-2xl cursor-pointer"> 
            <h3 class="text-lg mt-14  font-medium   text-white dark:text-gray-200">Heath Meals Tips</h3>   
            </div>

            <div className="  w-full max-w-xs rounded-md text-center bg-red-600  hover:drop-shadow-2xl cursor-pointer ">
            <h3 class="text-lg mt-14  font-medium text-white dark:text-gray-200">Recips Idea</h3>   
            </div>

            <div class=" w-full max-w-xs rounded-md text-center bg-teal-300  hover:drop-shadow-2xl cursor-pointer">
            <h3 class="text-lg mt-14 font-medium text-white dark:text-gray-200">Healthy Exercises</h3>
            </div>
        </div>
    </div>
</section>
      
    </>
  )
}
