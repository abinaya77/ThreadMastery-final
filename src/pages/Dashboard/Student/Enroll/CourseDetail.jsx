import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useUser from '../../../../hooks/useUser';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  const[data,setData]=useState([]);
  const axiosSecure=useAxiosSecure();
  const {currentUser}=useUser()

  useEffect(()=>{
    axiosSecure.get(`/enrolled-classes/${currentUser?.email}`)
    .then(res =>{
      setData(res.data);
    }).catch(err=>console.log(err));
  },[])


  return (
    <div>
      <h1 className='text-3xl my-6 text-center font-bold'>Thank You for Choosing Us!</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-1 gap-6'>
        {
          data.map((item,index)=>(
            <div key={index} className='bg-white shadow-md h-96 mx-3 rounded-3xl flex md:flex-row justify-around
            items-center overflow-hidden sm:flex-row sm:h-52 sm:w-full'>
              
              
              
              <div className='flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-full'>
                 <div>
                  <h1 className='text-2xl text-bold'>{item.classes.name}</h1>
                  <p className='text-gray-500 mt-2'>Receipt and courier-tracking number will be sent to your email </p>
                  <p className='text-gray-500 mt-2'>return accepted only on damaged products <span className='text-secondary'>(unpacking video mandatory )</span> </p>
                  <p className='text-gray-500 mt-2'>For queries kindly whatsapp @ 9972718491</p>
                  <p className='text-primary mt-3 text-2xl text-center'>Keep Shopping!!!</p>
                 </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default CourseDetail
