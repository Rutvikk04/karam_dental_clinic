import React from 'react'
import TeethAnimation from "../../assets/teeth animation.json"
import Lottie from "lottie-react";
const Header = () => {
    return (
        <section id='HOME' className='h-screen  bg-gradient-to-b from-blue-200 to-blue-100  flex items-center justify-center'>
            <div className='w-3/4 h-2/4 ml-14 text-left  flex flex-col justify-between'>
                <div>
                    <h1 className='text-6xl font-bold text-sky-600'>Healthy Smiles</h1>
                    <h1 className='text-3xl font-semibold text-red-600'>Starts Here..</h1>
                </div>
                <p className='text-xl text-sky-600 font-medium mt-10'>
                    We Are Imporving Your Smiles <b className='text-blue-700 font-bold'>since 2008 </b>
                    with Best affrodable and reliable service..
                </p>
                <section className='md:space-x-5 flex max-md:flex-col max-md:space-y-5 '>
                    <a href='tel:+918000097420' className='primary-btn'>Book An Appointment</a>
                    <a href="#SERVICES" className='primary-btn'>Explore Services</a>
                </section>
            </div>

            <div className='max-sm:hidden h-full w-full  bg-[#5CA0C8] border-l-8 border-red-600 shadow-xl shadow-blue-400 rounded-l-full overflow-hidden'>
                <Lottie loop={true} className='h-screen' animationData={TeethAnimation} />
            </div>
            {/* <img className='h-screen absolute max-md:object-right-bottom object-fill w-screen' src={HeroSec} /> */}
            {/* <button className='z-50  primary-btn'>Contact US</button> */}
        </section>
    )
}

export default Header