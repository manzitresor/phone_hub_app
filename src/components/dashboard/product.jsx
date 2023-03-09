import React from 'react'
import SideBar from './sideBar'
import NavBar from './navbar'
import { useState,useEffect } from 'react'
import axios from "axios"
import {FaEdit} from "react-icons/fa"
import {AiFillDelete} from "react-icons/ai"

export default function Product() {

    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/products')
        .then(Response=>{
          setProducts(Response.data)
        })
  
    },[])

  return (
    <>
    
    <NavBar/>
    <SideBar/>
    <div className='mt-auto'>
    <div className='py-[80px] p-10 grid grid-cols-1 ml-[160px] sm:grid-flow-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            products.map((product)=>{
                const {title,price,brand,category,images}=product
                return <article>
                <div className='rounded overflow-hidden shadow-lg lg:w-[40] lg:h-[465px] '>
                    <div className='w-[250px] h-[250px]'>
                  <img src={images} alt={title} className="w-full object-cover"></img>
                  </div>
                  <div className='py-4 px-6'>
                  <h2 className='font-bold my-2 px-3 text-1xl'>{title}</h2>
                  <h3><span className='font-semibold px-3'>Price:</span>{price} <span className='font-bold'>$</span></h3>
                  <h3><span className='font-semibold px-3'>category:</span>{category}</h3>
                  <h3><span className='font-semibold px-3'>brand:</span>{brand}</h3>
                  <div className='flex py-4 gap-5'>
                  <div className='text-cyan-600 flex cursor-pointer'>
                  <FaEdit /><span className='mt-[-4px]'>Edit</span>
                  </div>
                  <div className='text-red-500 flex cursor-pointer'>
                  <AiFillDelete /><span className='mt-[-4px]'>Delete</span>
                  </div>
                  </div>
                  </div>
                  
                  
                </div>
                </article>
            })
        }
    </div>
    </div>
      
    </>
  )
}
