import React from 'react'
import { Link } from 'react-router-dom'
import { BsMicrosoft,BsBodyText} from "react-icons/bs";
import {FaBold,FaLaptopCode,FaSignOutAlt } from "react-icons/fa"

export default function SideBar() {
  return (
   <>
   <header >
    <div class="flex flex-col fixed md:flex-row mt-[-48px]">
        <nav aria-label="alternative nav">
       
            <div class="bg-gray-500 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
            <div class=" mt-0 py-4 px-8 -mx-2 ">
                    <img class="object-cover mx-4 rounded-full w-24 shrink-0 h-24   ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                    <div class="mx-2 mt-4">
                        <h1 class="font-bold text-[#002242] mt-2 dark:text-white">Ema Watson </h1>
                        <div className='flex cursor-pointer'>
                        <FaLaptopCode className='text-white italic mr-2'/><span class="text-sm text-[#002242] hover:text-white dark:text-gray-400">Developer</span>
                        </div>
                    </div>
                </div>


                <div class=" md:w-48  md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                        <li class="mr-3 flex-1">
                            <Link to="/dashboard" class="flex py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-white border-b-2 border-gray-800 hover:border-white">
                               <BsMicrosoft className='text-[#002242] mr-2 mt-1 text-2xl'/><span class="pb-1 md:pb-0 text-xs mx-0 my-1 md:text-base text-white block md:inline-block hover:text-black">DashBoard</span>
                            </Link>
                        </li>
                        <li class="mr-3 flex-1">
                            <Link to="/Product" class="flex py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-white">
                                <BsBodyText className="text-[#002242] mr-2 mt-1 text-2xl"/><span class="pb-1 mx-0 my-1 md:pb-0 text-xs md:text-base text-white  block md:inline-block hover:text-black">Products</span>
                            </Link>
                        </li>
                        <li class="mr-3 flex-1">
                            <Link to="/newproduct" class="flex py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-white">
                                <FaBold className="text-[#002242] mr-2 mt-1 text-2xl"/><span class="pb-1 mx-0 my-1 md:pb-0 text-xs md:text-base text-white  block md:inline-block hover:text-black">New Product</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" class="flex py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white  hover:border-white">
                <FaSignOutAlt className='mt-14 ml-7'/><span class="pb-1 mx-1 mt-[50px] md:pb-0 text-xs md:text-base text-[#002242] font-extrabold  md:inline-block hover:text-white">LOG OUT </span>
                 </Link>
            </div>
        </nav>
</div>
</header>

   </>
  )
}
