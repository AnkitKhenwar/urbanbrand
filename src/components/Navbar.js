import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCartCheckFill } from 'react-icons/Bs';
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap sticky bg-green-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <Link href={'/'}><img className='my-2' src='https://www.newzjunky.com/wp-content/uploads/logo.png' height={100} width={100}  /></Link>
    
  </div>
  <div className="block lg:hidden font-bold">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link href={'/'} className="block text-xl font-bold mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      <Link href={'/about'} className="block mt-4 text-xl font-bold lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </Link>
      <Link href={'/tshirts'} className="block mt-4 text-xl font-bold lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        TShirts
      </Link>
       <Link href={'/hoodies'} className="block mt-4 text-xl  font-bold lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
        Hoodies
      </Link>
       <Link href={'/sports'} className="block mt-4 font-bold text-xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
        Sports OutFit
      </Link>
       <Link href={'/casual'} className="block mt-4 text-xl font-bold lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
        Casual OutFit
      </Link>
      
    </div>
  </div>
  <Link href={'/login'}><button className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded mx-2">Login</button></Link>
  <Link href={'/signup'}><button className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded">Sign Up</button></Link>
  <button><BsFillCartCheckFill className='text-2xl mx-2'/></button>
</nav>
    </div>
  )
}

export default Navbar;
