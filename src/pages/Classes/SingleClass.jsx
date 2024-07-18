import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import useAxiosSecure from '../../hooks/useAxiosSecure';

import {FaUser ,FaLanguage,FaLevelUpAlt,FaUsers}from "react-icons/fa"
import {DialogActions} from "@mui/material"
import {BiTime} from "react-icons/bi"
import {GiClassicalKnowledge} from "react-icons/gi"
import {MdBookOnline} from "react-icons/md"
import bannerImg1 from "../../assets/home/banner-1.jpg"

const SingleClass = () => {
    const course=useLoaderData();
    //console.log(course)
    const {currentUser}=useUser();
    //console.log(currentUser.role);
    const [enrolledClasses,setEnrolledClasses]=useState([]);
    const axiosFetch=useAxiosFetch();
    const axiosSecure=useAxiosSecure();
    const navigate = useNavigate();

    const handleSelect = (id) => {
        console.log(id);
        if (!currentUser) {
          alert("Please login first");
          return navigate("/login");
        }
    
        axiosSecure.get(`/enrolled-classes/${currentUser?.email}`)
          .then((res) => setEnrolledClasses(res.data))
          .catch((err) => console.log(err));
    
        axiosSecure.get(`/cart-item/${id}?email=${currentUser.email}`)
          .then(res => {
            if (res.data.clasId === id) {
              return alert("Already selected");
            } else if (enrolledClasses.find(item => item.classes._id === id)) {
              return alert("Already enrolled");
            } else {
              const data = {
                clasId: id,
                userMail: currentUser.email,
                date: new Date()
              };
              axiosSecure.post('/add-to-cart', data)
                .then(res => {
                  alert("Successfully added to cart");
                  console.log(res.data);
                });
            }
          });
      };
  return (
    <>
    <div className='font-gilroy font-medium text-gray dark:text-white text-lg leading-[27px] w-[90%]
    mx-auto' data-new-gr-c-s-check-loaded="14.1157.0"
    data-gr-ext-installed=""
    >
        {/**breadcrum or header banner */}
        <div className='breadcrumbs bg-blue-500 py-20 mt-20 section-padding bg-cover bg-center bg-no-repeat'>
            <div className='container text-center'>
                <h2 className='font-bold text-3xl '>Product Details</h2>
            </div>
        </div>

        <div className='nav-tab-wrapper tabs section-padding mt-8'>
            <div className='container'>
                <div className='grid grid-cols-12 md:gap-[30px]'>
                    {/**left side page grid */}
                    <div className='lg:col-span-8 col-span-12'>
                        <div>
                            <img src={course?.image} alt=""
                            className='rounded-md object-fut w-full h-full block'
                            />
                        </div>
                        <h2 className='text-2xl mb-2'> {course?.name} </h2>

                        <div className='author-meta mt-6 sm:flex lg:space-x-16 sm:space-x-5 space-y-5 sm:space-y-0 items-center '>
                            <div className='flex space-x-4 items-center group'>
                                <div className='flex-none'>
                                    <div className='h-12 w-12 rounded'>
                                        <img 
                                          src={course?.image}
                                          alt=""
                                          className='object-cover w-full h-full rounded'
                                        />
                                    </div>
                                </div>

                                <div className='flex-1'>
                                    <p className='text-secondary '>Work by
                                        <a href="#" className='text-black'>
                                            :Mayur Fashions
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div>
                               <span className='text-secondary'> Last Update:
                                <a href="#" className='text-black ml-1'>
                                    {new Date(course.submitted).toLocaleDateString()}
                                </a>
                               </span>
                            </div>
                        </div>

                        <div className='new-tab-wrapper mt-12'>
                            
                            <div id="tabs-content">
                                <div id="tab1" className='tab-content'>
                                <div className='bg-[#F8F8F8] dark:bg-indigo-500 space-y-6 p-8 rounded-md my-8'>
                                            <h4 className='text-2xl'>Great Designs at affordable Prices!!!</h4>
                                        </div>
                                    <div>
                                        <h3 className='text-2xl font-bold mt-8'> Product Description</h3>
                                        <p className='mt-4'>
                                        Our unstitched aari work blouses at Mayur Fashions are crafted with the finest attention to detail, using high-quality branded materials, including premium beads, threads, and zardosi. Each design is meticulously created to ensure it exudes richness and sophistication, making our blouses perfect for any occasion, from festive celebrations to elegant gatherings. 
                                        The fabric we use is of the highest quality, offering both comfort and durability.
                                        </p>
                                        <p className='mt-4'>We understand that each customer has unique preferences, so we offer customization options. Visit us offline or call our dedicated number for bulk orders or personalized designs to suit your specific needs. At Mayur Fashions, we are committed to providing you with exceptional quality and unparalleled craftsmanship, making every blouse a timeless piece in your wardrobe.</p>

                                        <div className='bg-[#F8F8F8] dark:bg-indigo-500 space-y-6 p-8 rounded-md my-8'>
                                            <h4 className='text-2xl'>Customer Reviews</h4>
                                            <ul className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                                                <li className='flex space-x-3'>
                                                    <div className='flex-none relative top-1'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </div>
                                                    <div className='flex-1'>
                                                    <h1 className='font-bold mb-2'>Priya R</h1>
                                                    I am absolutely in love with my aari work blouse from Mayur Fashions!the designs are so good and worthy of the price.Thank you, Mayur Fashions, for such a beautiful addition to my wardrobe!
                                                    </div>
                                                </li>

                                                <li className='flex space-x-3'>
                                                    <div className='flex-none relative top-1'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </div>
                                                    <div className='flex-1'>
                                                    <h1 className='font-bold mb-2'>Ananya S</h1>
                                                      I just love your work the details in cloth is amazing.The customer service was excellent as well, with timely updates on my order and quick delivery. I am thrilled with my purchase and will definitely be shopping here again.
                                                    </div>
                                                </li>

                                                <li className='flex space-x-3'>
                                                    <div className='flex-none relative top-1'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </div>
                                                    <div className='flex-1'>
                                                        <h1 className='font-bold mb-2'>Keerthana A</h1>
                                                        I recently purchased an aari work cloth from Mayur Fashions, and It really saved my big day!.The quality of the fabric & material is top-notch.I highly recommend Mayur Fashions to anyone looking for beautiful, high-quality aari work blouses!
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        

                                        <div>
                                            <h4 className='text-2xl font-bold'>Instructions to use</h4>
                                            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                                                <div className='bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center'>
                                                    <span className='flex-none'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </span>
                                                    <span className='flex-1 text-black'>
                                                        store inside a cotton cloth bag
                                                    </span>
                                                </div>
                                                <div className='bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center'>
                                                    <span className='flex-none'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </span>
                                                    <span className='flex-1 text-black'>
                                                        wash with care
                                                    </span>
                                                </div>
                                                <div className='bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center'>
                                                    <span className='flex-none'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </span>
                                                    <span className='flex-1 text-black'>
                                                        handle gently
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>

                    {/**right side */}
                    <div className='lg:col-span-4 col-span-12 mt-8 md:mt-0'>
                        <div className='sidebarWrapper space-y-[30px]'>
                            <div className='wdiget custom-text space-y-5'>
                                <a className='h-[220px] rounded relative block' href="#">
                                    <img src={course.image } alt=""
                                    className='block w-full h-full object-cover rounded'/>
                                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                      <img src="/play.png"/>
                                    </div>
                                </a>
                                <h3 className='text-center text-green-500'>${course.price}</h3>
                                <button onClick={()=>handleSelect(course._id)} 
                                   title={course.role==='admin' ||course.role==='instructor'?'Instructor/Admin can not select'?course.availableSeats<1:'no seat available':'you can select this class'}
                                   disabled={course.role==='admin'||course.role==='instructor'||course.availableSeats<1} className='btn btn-primary w-full text-center bg-secondary py-2 text-white px-6'
                                   >Add to cart
                                </button> 
                                <ul className='list'>
                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <FaUser className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Work by
                                             </div>
                                        </div>
                                        <div className='flex-none'>Mayur Fashion</div>
                                    </li>

                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <MdBookOnline className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               beads
                                             </div>
                                        </div>
                                        <div className='flex-none'>branded a1</div>
                                    </li>

                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <BiTime className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Duration to reach
                                             </div>
                                        </div>
                                        <div className='flex-none'>2 days max</div>
                                    </li>

                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <FaUsers className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Total purchased
                                             </div>
                                        </div>
                                        <div className='flex-none'>{course?.totalEnrolled}</div>
                                    </li>

                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <FaLevelUpAlt className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Work Level
                                             </div>
                                        </div>
                                        <div className='flex-none'>Intermediate</div>
                                    </li>

                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <FaLanguage className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Language
                                             </div>
                                        </div>
                                        <div className='flex-none'>Tamil</div>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                   </div>


                </div>

                
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default SingleClass
