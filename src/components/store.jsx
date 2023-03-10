import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import {FaEdit} from "react-icons/fa"
import {AiFillDelete} from "react-icons/ai"
import NavBar from './nav'
import Footer from './footer'

export default function Store() {

    const [products,setProducts]=useState([])
    const [searchProduct,setSearchProduct]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/products')
        .then(Response=>{
          setProducts(Response.data)
        })
  
    },[])

    const handleChange =(e)=>{
      const searchString = e.target.value.toLocaleLowerCase()
      setSearchProduct(searchString)
  }
  var searchedProduct =products.filter(product=>{
    return product.title.toLocaleLowerCase().includes(searchProduct)
   })

  return (
    <>
    <NavBar/>
    <div className='bg-slate-200 py-[20px] '>
      
        <input type="text"
        id="voice-search" 
        class="bg-white shadow-md border border-white mx-[40px] mt-[100px] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[30%] pl-10 p-2.5  dark:bg-slate-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search  Phone..."
        onChange={handleChange}
        />    
    <div className=' cursor-pointer py-[50px] p-10 grid grid-cols-1 ml-[0px] sm:grid-flow-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          searchedProduct.length ===0 ?
          <div className='m-3 text-red-500'>Product not Found</div>
          :
            searchedProduct.map((product)=>{
                const {title,price,brand,category,images}=product
                return <article>
                <div className='rounded-lg bg-white overflow-hidden shadow-lg lg:w-[40] lg:h-[465px] '>
                    <div className='w-[250px] h-[250px] pt-4'>
                  <img src={images} alt={title} className="w-full object-cover"></img>
                  </div>
                  <div className='py-4 px-6'>
                  <h2 className='font-bold my-2 px-3 text-1xl'>{title}</h2>
                  <h3><span className='font-semibold px-3'>Price:</span>{price} <span className='font-bold'>$</span></h3>
                  <h3><span className='font-semibold px-3'>category:</span>{category}</h3>
                  <h3><span className='font-semibold px-3'>brand:</span>{brand}</h3>
                  </div>
                  <div className='mx-14'>
                  <button class="px-2 py-3 text-xs font-semibold text-[#8B8000] uppercase transition-colors duration-300 transform bg-[#002242] rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                  </div>
                  
                </div>
                </article>
            })
        }
    </div>
    </div>
    <Footer/>
    </>
  )
}