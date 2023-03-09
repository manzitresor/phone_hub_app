import { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './nav';
import Footer from './footer';
function Login() {
      const navigate = useNavigate();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [userNotFound,setUserNotFound]=useState('')
       const users = [{ email: "manzitre@gmail.com", password: "123" }];
    
       const handleSubmit = (e) => {
      e.preventDefault();
      const account = users.find((user) => user.email === email);
      if (account && account.password === password) {
      navigate("/dashboard");
      }
else{
    return setUserNotFound('User Not Found')
}
      };


 
  return (
   <>
   <NavBar/>
  

    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-16 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-bold text-2xl text-[#8B8000]">Welcome to Login</h3>
            <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section class="mt-10">
            <form class="flex flex-col" method="POST">
            <div class="flex justify-end">
                    <span class="text-sm text-red-500 hover:underline mb-6">{userNotFound}</span>
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                    <input type="text"
                     id="email"
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#8B8000] transition duration-500 px-3 pb-3"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <input type="password" 
                    id="password" 
                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#8B8000] transition duration-500 px-3 pb-3"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                
                <button 
                class="bg-[#002242] hover:bg-white hover:text-[#002242] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                onClick={handleSubmit} type='submit'
                >Sign In</button>
            </form>
        </section>
    </main>

    <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p class="text-white">Don't have an account? <Link to="" class="font-bold hover:underline">Sign up</Link>.</p>
    </div>
   <Footer/>
   </>
  );
}


export default Login;
