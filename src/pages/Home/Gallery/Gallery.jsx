import React from 'react'
import img1 from "../../../../public/aari-11.jpg"
import img2 from "../../../../public/aari-9.jpg"
import img3 from "../../../../public/aari-7.jpg"
import img4 from "../../../../public/aari-5.jpg"
import img5 from "../../../../public/aari-4.jpg"

const Gallery = () => {
  return (
    <div className='md:w-[80%] mx-auto my-28'>
      <div className='mb-16'>
        <h1 className='text-5xl font-bold text-center'>Our Gallery</h1>
      </div>

      {/* image container */}
      <div className='md:grid grid-cols-2 items-center justify-center border gap-4'>
        <div className='mb-4 md:mb-0'>
            <img src={img1} alt="" className='md:h-[720px] w-full mx-auto rounded-sm'/>
        </div>
        <div className='gap-4 grid grid-cols-2 items-center'>
            <div >
                <img src={img2} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
            <div>
                <img src={img3} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
            <div>
                <img src={img4} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
            <div>
                <img src={img5} alt="" className='md:h-[350px] rounded-sm'/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Gallery
