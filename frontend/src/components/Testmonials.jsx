import React from 'react'
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const Testmonials = () => {
    const testimonials = [
      {
        user: "John Doe",
        company: "Sales Executive",
        image: user1,
        text: "Simple, secure, and effective! I love how easy it is to manage my contacts now. The clean interface and quick access features are exactly what I needed.",
      },
      {
        user: "Jane Smith",
        company: "Freelance Designer",
        image: user2,
        text: "A must-have for professionals!The ability to add, edit, and organize contacts on the go has streamlined my workflow. I use it every day!",
      },
      {
        user: "David Johnson",
        company: "Software Engineer",
        image: user3,
        text:"Great UI and smooth performance.The dashboard is very intuitive and responsive. Authentication feels secure, and I haven't faced a single issue.",
      },
      {
        user: "Ronee Brown",
        company: "Entrepreneur",
        image: user4,
        text: "Exactly what I was looking for!I’ve tried other apps, but this one just works. Love how easy it is to update or delete contacts.",
      },
      {
        user: "Michael Wilson",
        company: "College Student",
        image: user5,
        text: "Exactly what I was looking for! I’ve tried other apps, but this one just works. Love how easy it is to update or delete contacts.”",
      },
      {
        user: "Emily Davis",
        company: "Project Coordinator",
        image: user6,
        text: "User-friendly and powerful.I appreciate the simplicity and clarity of the UI. Everything I need is just a click away.",
      },
    ];
  return (
    <div id="testmonials" className='mt-20 tracking-wide'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What people are saying</h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((testimonial,index)=>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
                            <p>{testimonial.text}</p>
                            <div className='flex mt-8 items-start'>
                                <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300 '
                                src={testimonial.image} alt={testimonial.user} />
                            
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-600'>{testimonial.company}</span>
                            </div>
                        </div>
                        </div>
                        </div>
                ))}
            </div>
        </div>
  )
}

export default Testmonials
