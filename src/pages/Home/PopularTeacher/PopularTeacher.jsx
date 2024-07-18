import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import img from "../../../../public/aari-4.jpg"
import {Link} from "react-router-dom"
import img1 from "../../../../public/aari-5.jpg"
import img2 from "../../../../public/aari-6.jpg"

const PopularTeacher = () => {
    const [instructors,setInstructors]=useState([]);
    const axiosFetch=useAxiosFetch();
    useEffect(()=>{
        axiosFetch.get('/popular-instructors').then((data)=>{
            setInstructors(data.data)
        }).catch((err)=>{console.log(err)})
    },[]);
    console.log(instructors)


  return (
    <div className='md:w-[80%]mx-auto my-36'>
      <div>
        <h1 className='text-5xl font-bold text-center dark:text-white'>Our <span className='text-secondary'>Best</span> Classes</h1>
        <div className='w-[405] text-centermx-auto my-4'>
            <p className='text-grey-500 text-center dark:text-white'>Explore our popular classes.here is some popular classes based on enrollment</p>
        </div>
      </div>

      {
        instructors?<>
        <div className='grid mb-28 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-4 mx-auto'>
            {
                instructors?.slice(0,4).map((instructor,i)=>(
                            
                  <div  key={i} className='flex dark:text-white hover:-translate-y-2 md:px-8 rounded-md duration-200 cursor-pointer flex-col shadow-md py-8 px-10'>
                    <div  className='flex-col flex gap-6 md:gap-8'>
                      <img className='rounded-full border-4 border-gray-300 h-24 w-24 mx-auto' src={`${img}` } alt=''/>
                    </div>

                    <div className='flex flex-col text-center'>
                      <p className='font-medium text-lg dark:text-white text-gray-800'>Aari Levle -1 Course</p>
                      <p className='text-gray-500 whitespace-nowrap'>Stitches:30</p>
                      <p className='text-gray-500 mb-4 whitespace-nowrap'>Available Seats : 200</p>
                      <p className='text-gray-500 mb-4 whitespace-nowrap'>Price : 4000</p>
                      <Link to={'/classdetails'} className='text-center mt-2' >
                        <button className='px-2 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2'>View</button>
                      </Link>
                    
                    </div>
                  </div>
                ))   
            }

                 <div   className='flex dark:text-white hover:-translate-y-2 md:px-8 rounded-md duration-200 cursor-pointer flex-col shadow-md py-8 px-10'>
                    <div  className='flex-col flex gap-6 md:gap-8'>
                      <img className='rounded-full border-4 border-gray-300 h-24 w-24 mx-auto' src={`${img1}` } alt=''/>
                    </div>

                    <div className='flex flex-col text-center'>
                      <p className='font-medium text-lg dark:text-white text-gray-800'>Aari Levle -2 Course</p>
                      <p className='text-gray-500 whitespace-nowrap'>Stitches:24</p>
                      <p className='text-gray-500 mb-4 whitespace-nowrap'>Available Seats : 200</p>
                      <p className='text-gray-500 mb-4 whitespace-nowrap'>Price : 4500</p>
                      <Link to={'/classdetails1'} className='text-center mt-2' >
                        <button className='px-2 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2'>View</button>
                      </Link>
                    
                    </div>
                  </div>

                  <div   className='flex dark:text-white hover:-translate-y-2 md:px-8 rounded-md duration-200 cursor-pointer flex-col shadow-md py-8 px-10'>
                    <div  className='flex-col flex gap-6 md:gap-8'>
                      <img className='rounded-full border-4 border-gray-300 h-24 w-24 mx-auto' src={`${img2}` } alt=''/>
                    </div>

                    <div className='flex flex-col text-center'>
                      <p className='font-medium text-lg dark:text-white text-gray-800'>Aari Levle -3 Course</p>
                      <p className='text-gray-500 whitespace-nowrap'>Stitches:27</p>
                      <p className='text-gray-500 mb-4 whitespace-nowrap'>Available Seats : 200</p>
                      <p className='text-gray-500 mb-4 whitespace-nowrap'>Price : 5000</p>
                      <Link to={'/classdetails2'} className='text-center mt-2' >
                        <button className='px-2 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2'>View</button>
                      </Link>
                    
                    </div>
                  </div>


        </div>
        </>:<></>
      }
    </div>
  )
}

export default PopularTeacher
