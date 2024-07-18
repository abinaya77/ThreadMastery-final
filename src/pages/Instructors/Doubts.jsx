import React from 'react'

const Doubts = () => {
  return (
    <div>
       <h1 className='text-center text-3xl mt-10 text-bold'>Join Whatsapp Group</h1>
       <p className='text-center text-semibold'>Ask your Doubts or Enroll for classes here! </p>
       <div className='grid grid-cols-1 gap-3 px-4 mt-8 sm:grid-cols-2 sm:px-8'>
          <div className='flex items-center bg-blue-100 border rounded-sm overflow-hidden shadow'>
             
             <div className='px-4 text-gray-700'>
                
                <p className='text-sm tracking-wider mt-3 mb-3'>Join this group for further clarifications regarding the classes. Details on how to choose your slot and join the classes will also be shared in this group.</p>
                <div className=' text-center '>
                <a className='px-4 py-2 my-4 w-full mx-auto text-white disabled:bg-red-300
                bg-secondary duration-300 rounded hover:bg-red-700'   href="www.google.com">Join WhatsApp group</a>
                </div>
                
             </div>
          </div>
          </div>

       
    </div>
  )
}

export default Doubts
