
import React, { useEffect, useState ,useContext} from 'react'
import { Edit3, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {ContactContext} from '../../contactContext';

const DashBaord = () => {

    const navigator = useNavigate()
    const {fetchContacts,contacts} = useContext(ContactContext)
    const [contact,setContact] = useState({
        name:"",
        email:"",
        phone:""
    })
    
    const [isUpdate,setIsUpdate] = useState(false);
    const [id,setId] = useState();

  
    const handleAdd = async() => {
        const token = localStorage.getItem('accessToken')
        try{
            const res = await fetch('/api/mycontacts' ,{
                method:'POST',
                headers:{
                  'Content-Type':'application/json',
                   'Authorization': `Bearer ${token}`
                },
                body:JSON.stringify(contact)
            })
        const data = await res.json()
        fetchContacts();
        console.log("data added successfully")
        setContact({ name: "", email: "", phone: "" });
        } catch(err){
            console.log("unsuccess")
        }
    }
   
  

    const handleEdit = async(e)=>{
        console.log(e)
        setIsUpdate(true)
        setContact({name:e.name,email:e.email,phone:e.phone})
        setId(e._id)
    }
    
    const handleUpdate = async()=>{
        const token = localStorage.getItem('accessToken')
        try{
            const res = await fetch(`/api/mycontacts/${id}`,{
                method:"PUT",
                headers :{
                    'Content-Type':'application/json',
                     'Authorization': `Bearer ${token}`
                },
                body :JSON.stringify(contact)
            })
            const updated = await res.json()
            console.log(updated)

            if(res.ok){
                fetchContacts();
                setIsUpdate(false)
                setContact({name:"",email:"",phone:""})
            }
        } catch(err){
            console.error("update failed",err)
        }
    }
    const handleDelete =async(id) =>{
        const token = localStorage.getItem('accessToken')
        const res = await fetch(`/api/mycontacts/${id}`,{
            method:"DELETE",
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        if(res.ok){
            fetchContacts();
        }
    }    
    const handleLogout = async()=>{
        const token = localStorage.getItem('accessToken')
        localStorage.removeItem(token)
        navigator('/login')
    }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name:</label>
      <input
        type="text"
        className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-indigo-600"
        placeholder="Enter your name"
        value={contact.name}
        onChange={(e)=>setContact({...contact,name:e.target.value})}
      />
    </div>
  
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email:</label>
      <input
        type="text"
        className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-indigo-600"
        placeholder="Enter your email"
        value={contact.email}
        onChange={(e)=>setContact({...contact,email:e.target.value})}
      />
    </div>
  
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number:</label>
      <input
        type="text"
        className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-indigo-600"
        placeholder="Enter your phone number"
        value={contact.phone}
        onChange={(e)=>setContact({...contact,phone:e.target.value})}
      />
    </div>
    {isUpdate === false ? ( <button onClick={handleAdd} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition">
      Add
    </button>) : (<button onClick={handleUpdate} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md transition">
      Update
    </button>) }
    
    
    <button
  onClick={fetchContacts()}
  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition mt-4"
>
  Get All Contacts
</button>

<div className="max-w-2xl mx-auto mt-10 space-y-4">
  <h2 className="text-xl font-semibold text-white mb-4">All Contacts</h2>
  {contacts.length === 0 ? (
    <p className="text-gray-400"> No contacts found. </p>
  ) : (
    contacts.map((c,index) => (
    <div key={index} className="bg-gray-800 text-white p-4 rounded-xl shadow-md flex justify-between items-start">
      <div 
       
        className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col space-y-1"
      >
        <p><span className="font-semibold text-gray-300">Name:</span> {c.name}</p>
        <p><span className="font-semibold text-gray-300">Email:</span> {c.email}</p>
        <p><span className="font-semibold text-gray-300">Phone:</span> {c.phone}</p>
      </div >
       <div className="flex space-x-2">
       <button
         onClick={()=>{handleEdit(c)}}
         className="text-yellow-400 hover:text-yellow-500"
         title="edit"
       >
         <Edit3 size={20} />
       </button>
       <button
         onClick={() => handleDelete(c._id)}
         className="text-red-500 hover:text-red-600"
         title="delete"
       >
         <Trash2 size={20} />
       </button>
     </div>
     </div>
    ))
  )}
</div>
<button
  onClick={handleLogout}
  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition mt-4"
>
  Logout
</button>
  </div>
  
  )
}

export default DashBaord
