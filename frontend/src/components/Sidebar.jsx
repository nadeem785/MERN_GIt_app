import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout"
import { useAuthContext } from '../context/AuthContext';


function Sidebar() {
const {authUser}= useAuthContext();


  return (
    <aside className=' flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
    overflow-y-auto border-r hover:bg-gray-600/10 border-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10   text-white
    '>
<nav className='h-full flex flex-col gap-3' >
<Link to='/' className=' justify-center flex'>
<img className='h-8' src='/github.svg' alt='Github Logo' />
</Link>

<Link
					to='/'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'
				>
					<IoHomeSharp size={20} />
</Link>

{authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaHeart size={22} />
					</Link>
				)}



{authUser &&  (
					<Link
						to='/explore'
						className='p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdOutlineExplore size={25} />
					</Link>
				)} 
{!authUser && (
					<Link
						to='/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdEditDocument size={25} />
					</Link>
				)}   


{authUser && (
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout />
					</div>
				)}


</nav>
    </aside>
  )
}

export default Sidebar
