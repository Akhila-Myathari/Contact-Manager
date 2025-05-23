import React from 'react'
import { Lock, UserPlus, Pencil, Trash2, LayoutDashboard } from 'lucide-react';
const Features = () => {
    const features = [
  {
    icon: <LayoutDashboard />,
    text: "user friendly interface",
    description:
      "Clean, responsive design with simple navigation to manage your contacts effortlessly across devices.",
  },
  {
    icon: <Lock />,
    text: "User Authentication",
    description:
      "Secure sign-up and login functionality to ensure your data stays protected and accessible only to you.",
  },
  {
    icon: <UserPlus />,
    text: "Add Contacts",
    description:
      "Easily add new contacts with relevant details like name, phone number, email, and more — all in one place.",
  },
  {
    icon: <Pencil />,
    text: "Edit Contacts",
    description:
      "Update contact information anytime with our intuitive editing interface, so your contact list is always up to date.",
  },
  {
    icon: <Trash2 />,
    text: " Delete Contacts",
    description:
      "Remove unwanted or outdated contacts with a single click — giving you full control over your contact list.",
  },
];

  return (
     <div id="features" className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
            <div className='text-center'>
                <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                    Features
                </span>
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                    Quick
                    <span className='bg-gradient-to-br from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                        {" "}
                        Access
                    </span>
                </h2>
            </div>
            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map((feature,index)=>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                        <div className='flex'>
                            <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full '>
                            {feature.icon}
                         </div>
                         <div>
                            <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                            <p className='text-md p-2 mb-20 text-neitral-500'>{feature.description}</p>
                        </div>
                        </div>
                        
                    </div>
                ))}
    
            </div>
          
        </div>
  )
}

export default Features
