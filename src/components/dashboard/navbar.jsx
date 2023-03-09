import { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component{
    render(){
        return(
            <>
            <nav class="bg-gray-400 p-2 mt-0 fixed w-full  z-10 top-0">
        <div class="container mx-auto flex flex-wrap items-center">
		    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<Link class="text-gray-800  no-underline hover:text-white hover:no-underline" to="">
					<span class="text-2xl pl-2 ml-[120px] flex"> CMS LAYOUT</span>
				</Link> 
            </div>
			<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				
			</div>
        </div>
    </nav>



            </>
        )
    }
}

export default NavBar;