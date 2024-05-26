import React from 'react'
import image from "../../assets/images/child.png"
const About = () => {
    return (
        <section id='ABOUT' className=' py-16  bg-gradient-to-b  from-blue-200 to-blue-100'>
            <h1 className='text-center text-xl text-red-600 font-semibold'>About Us</h1>
            <h1 className='text-center text-2xl text-blue-600 font-medium'>Know Us Better...</h1>
            <div className='flex max-lg:flex-col-reverse justify-around w-full p-4'>
                <div className='w-full font-semibold text-blue-800'> As a dental surgeon, I'm passionate about helping patients achieve optimal oral health and a confident smile.  Through a combination of surgical expertise, advanced technology, and a gentle touch, I strive to provide a positive and comfortable experience for every patient.
                <br/>
                <br/>
                <br/>
                I completed my Education with ------ and got my B.D.S Degree from -----. I served at Civil Hospital , Amdavad for 10 years . Then i decided to serve at my hometown. So i started Karam Dental Clinic at vallabhipur.     We are also providing same service at Sihor, Gujarat, India. 
                <br/>
                <br/>
                <br/>   
                Another Paragraph heereee..............sdf
                </div>
                <div className='relative md:px-4'>
                    <img className='border-4 shadow-2xl  border-white' src={image}/>
                    <div className='absolute bottom-10 font-bold text-2xl left-6'>
                        <h1>Dr.Shailesh Parmar</h1>
                        <h1 className='text-lg'>B.D.S , Civil Hospital Ahmedabad</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
