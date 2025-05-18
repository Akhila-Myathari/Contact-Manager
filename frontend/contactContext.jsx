import react ,{useEffect, useState} from 'react'
import { createContext } from 'react';

export const ContactContext = createContext();

export const ContactContextProvider = (props)=>{
        const [contacts,setContacts] = useState([]);
        const token = localStorage.getItem('accessToken')

    const fetchContacts = async()=>{
        try{
            const response = await fetch('/api/mycontacts',{
                method:'GET',
                headers:{
                'Authorization': `Bearer ${token}`
                }
            })
            const datas = await response.json();
            setContacts(datas)
        }catch(err){
            console.log("error at getting all contacts")
        }
    }
    useEffect(()=>{
        fetchContacts()
    },[])
    const value = {
        contacts,setContacts,
        fetchContacts
    }
    return(
        <ContactContext.Provider value={value}>
            {props.children}
        </ContactContext.Provider>
    )

}

    
