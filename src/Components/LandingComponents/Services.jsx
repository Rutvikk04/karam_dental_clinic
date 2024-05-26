import React from 'react'
import TeethClinicImg from "../../assets/images/female.png"
import ChildImage from "../../assets/images/child.png"
import xRay from "../../assets/images/x-ray.jpg"
import toothImplant from "../../assets/images/tooth-implant.jpg"
import rootCanal from "../../assets/images/RC.jpg"
import toothExt from "../../assets/images/toothExt.jpg"
const Services = () => {
  return (
    <section id='SERVICES' className=' py-16 bg-gradient-to-b from-blue-100 to-blue-200'>
      <h1 className='text-center text-xl text-red-600 font-semibold'>Our Services</h1>
      <h1 className='text-center text-2xl text-blue-600 font-medium'>See What Can We Do For You</h1>

      <div className='flex flex-wrap justify-around mt-10 '>
        <div className='card-design'>
          <img className='rounded-t-md' src={TeethClinicImg} />
          <div className='p-4 space-y-1 '>

            <h1 className='text-2xl text-red-600 font-bold'>Routine Checkup</h1>
            <p className='text-white'>we Provide Complete mouth analysis and guide and help you with proper guidance and treatment..</p>
          </div>

        </div>
        <div className='card-design'>
          <img className='rounded-t-md' src={ChildImage} />
          <div className='p-4 space-y-1 '>
            <h1 className='text-2xl text-red-600 font-bold'>Smile customization</h1>
            <p className='text-white'>Customize and Complete cleaning of your mouth. So that you can smile with confidence.</p>
          </div>
        </div>
        <div className='card-design'>
          <img className='rounded-t-md object-cover w-full  h-[16rem]' src={xRay} />
          <div className='p-4 space-y-1 '>
            <h1 className='text-2xl text-red-600 font-bold'>Dental X-Rays</h1>
            <p className='text-white'>we Provide high quality dental digital X-Rays to get problem from the roots...</p>
          </div>
        </div>
        <div className='card-design'>
          <img className='rounded-t-md object-cover w-full  h-[16rem]' src={toothImplant} />
          <div className='p-4 space-y-1 '>
            <h1 className='text-2xl text-red-600 font-bold'>Tooth Implant</h1>
            <p className='text-white'>single of full tooth implant with proper customization and according to your need..</p>
          </div>
        </div>
        <div className='card-design'>
          <img className='rounded-t-md object-cover w-full  h-[16rem]' src={rootCanal} />
          <div className='p-4 space-y-1 '>
            <h1 className='text-2xl text-red-600 font-bold'>Root Canal</h1>
            <p className='text-white'>we Provide high quality dental digital X-Rays to get problem from the roots...</p>
          </div>
        </div>
        <div className='card-design'>
          <img className='rounded-t-md object-cover w-full  h-[16rem]' src={toothExt} />
          <div className='p-4 space-y-1 '>
            <h1 className='text-2xl text-red-600 font-bold'>Tooth Extraction</h1>
            <p className='text-white'> A tooth extraction, or dental extraction, is the removal of a tooth from its socket in the bone. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
