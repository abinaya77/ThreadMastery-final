import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate=useNavigate();
  return (
    <div className='min-h-screen bg-cover 'style={{backgroundImage:'url(./aari-6.jpg)'}}>
        <div className='min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-20'>
            <div className='space-y-4'>
                <div>
                    <p className='md:text-4xl text-2xl'>Explore our Best</p>
                    <h1 className='md:text-7xl text-3xl font-bold'>Aari Classes & Products</h1>
                    <div className='md:w-1/2'>
                        <p>Unlock the artistry of Aari embroidery with our expert-led tutorials & products, perfect for mastering the intricacies of this exquisite craft </p>
                    </div>
                    <div className=' mt-3 flex flex-wrap gap-3 items-centergap-5'>
                        <button  onClick={()=>navigate(`/products`)}className='px-7 py-3 rounded-lg  bg-secondary font-bold uppercase'>Buy today</button>
                        <button  onClick={()=>navigate(`/classes`)}className='px-7   py-3 rounded-lg border hover: bg-secondary font-bold uppercase'>view course</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
