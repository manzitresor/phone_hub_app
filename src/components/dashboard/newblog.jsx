import '../../App.css';
import { Link } from 'react-router-dom';
import SideBar from './sideBar';
import NavBar from './navbar';
import { useState } from 'react';
function NewProduct()  {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice]=useState('')
    const [brand,setBrand]=useState('')
    const [category,setCategory]=useState('')
    const [images,setImages]=useState('')

    const handleSubmit =(event)=>{
        event.preventDefault()
    fetch('http://localhost:4000/products',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            title:title,
            description:description,
            price:price,
            brand:brand,
            category:category,
            images:images
        })
    })
setBrand('')
setCategory('')
setDescription('')
setImages('')
setPrice('')
setTitle('')
    
    }
  return (
   <>


<SideBar></SideBar>
  <header class="max-w-lg mx-auto">
        <Link href="#">
            <h1 class="text-4xl font-bold text-white text-center">Startup</h1>
        </Link>
    </header>

    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-bold text-2xl text-[#002242]">ADD NEW PRODUCT</h3>
        </section>

        <section class="mt-10">
            <form class="flex flex-col" method="POST" onSubmit={handleSubmit}>
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Title</label>
                    <input 
                    type="text"
                     id="title" 
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-teal-300 transition duration-500 px-3 pb-3"
                     value={title}
                     onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Price</label>
                    <input 
                    type="text"
                     id="price" 
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-teal-300 transition duration-500 px-3 pb-3"
                     value={price}
                     onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </div>
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Brand</label>
                    <input 
                    type="text"
                     id="brand" 
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-teal-300 transition duration-500 px-3 pb-3"
                     value={brand}
                     onChange={(e)=>{setBrand(e.target.value)}}
                    />
                </div>
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Category</label>
                    <input 
                    type="text"
                     id="brand" 
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-teal-300 transition duration-500 px-3 pb-3"
                     value={category}
                     onChange={(e)=>{setCategory(e.target.value)}}
                    />
                </div>
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Image</label>
                    <input 
                    type="text"
                     id="images" 
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-teal-300 transition duration-500 px-3 pb-3"
                     value={images}
                     onChange={(e)=>{setImages(e.target.value)}}
                    />
                </div>
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Desciption</label>
                    <textarea 
                    className=" w-full rounded bg-gray-200 focus:outline-none focus:border-[#002242] border-2" 
                    rows="4"
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    > 
                   
                    </textarea>
                </div>
                <button 
                class="bg-[#002242] mx-7 my-10  hover:bg-white hover:text-[#002242] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                type="submit"
               
                >ADD NEW</button>
            </form>
        </section>
    </main>

    
   
   </>
  );
}


export default NewProduct;
