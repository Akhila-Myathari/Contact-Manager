import React, { useState } from 'react'
import {Link} from 'react-router-dom' 
import { useNavigate } from 'react-router-dom';
import "tailwindcss";
import {ToastContainer,toast} from "react-toastify"

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email:"",
        password:""
      })
   
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await fetch('/api/user/forgotPassword',
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(user)
                })
                if(!res.ok){
                    throw new Error('unable to set user');
                }
                const data = await res.json();
                console.log(data);
                navigate('/login');
        }catch(err){
            console.log("error at reset password");
        }
    }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              RESET PASSWORD
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                    className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={(e)=>setUser({...user, password : e.target.value })}
                    className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type='submit'
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  reset
                </button>
              </div>
               <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                            remember password?{' '}
                            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              login
                            </Link>
                </p>
            </form>

          </div>
        </div>
      </div>
  )
}

export default ForgotPassword
