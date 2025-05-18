import React,{useState} from 'react'
import logo from '../assets/c-logo.jpg'
import {Menu,X} from "lucide-react"
import { useNavigate } from 'react-router-dom'
  
const Navbar = () => {
      const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);
    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    const Navigate = useNavigate();

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-0'>
                    <img className="h-10 w-10 mr-2 cursor-pointer" src={logo} alt="logo" />
                    <span className='text-xl cursor-pointer tracking-tight'>Contacts-Manager</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                        <li className='cursor-pointer'><a href='#about'>about</a></li>
                        <li className='cursor-pointer'><a href='#features'>Features</a></li>
                        <li className='cursor-pointer'><a href='#testmonials'>Testmonials</a></li>
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <a href='#' onClick={()=>Navigate('/login')} className='py-2 px-3 border rounded-md'> Sign In</a>
                    <a href="#" onClick={()=>Navigate('/register')} className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>create an account </a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu />}
                    </button>
                </div>
            </div>
            {/* {mobileDrawerOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul>
                        {navItems.map((item,index)=>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex space-x-6'>
                        <a href='#' className='py-2 px-3 border rounded-md' >Sign In</a> 
                        <a href='#' className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
                    </div>
                </div>
            )} */}
        </div>
    </nav>
  )
}

export default Navbar
