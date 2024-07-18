import React, { useState } from 'react'
import { useLoaderData, useNavigate,Link } from 'react-router-dom'
import useUser from '../../hooks/useUser';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import {FaUser ,FaLanguage,FaLevelUpAlt,FaUsers}from "react-icons/fa"
import {BiTime} from "react-icons/bi"
import {MdBookOnline} from "react-icons/md"

const Classdetails1 = () => {
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
                <h2 className='font-bold text-3xl '>Course Details</h2>
            </div>
        </div>

        <div className='nav-tab-wrapper tabs section-padding mt-8'>
            <div className='container'>
                <div className='grid grid-cols-12 md:gap-[30px]'>
                    {/**left side page grid */}
                    <div className='lg:col-span-8 col-span-12'>
                        
                    <div className='bg-[#F8F8F8] dark:bg-indigo-500 space-y-6 p-8 rounded-md my-8'>
                        <h4 className='text-2xl'>This is a Intermediate Level course!!!</h4>
                    </div>

                        <div className='author-meta mt-6 sm:flex lg:space-x-16 sm:space-x-5 space-y-5 sm:space-y-0 items-center '>
                            <div className='flex space-x-4 items-center group'>
                                <div className='flex-none'>
                                    <div className='h-12 w-12 rounded'>
                                        <img 
                                          src="../../../public/aari-5.jpg"
                                          alt=""
                                          className='object-cover w-full h-full rounded'
                                        />
                                    </div>
                                </div>

                                <div className='flex-1'>
                                    <p className='text-secondary '>Trainer : 
                                        <a href="#" className='text-black'>
                                            Mayuri
                                        </a>
                                    </p>
                                </div>
                            </div>

                            
                        </div>

                        <div className='new-tab-wrapper mt-12'>
                            <h1 className='text-bold text-3xl'>Level-2 Stitches</h1>
                            <ul id="tabs-nav" className='course-tab mb-8'>
                                <li className='active'>
                                    <a href="#tab1">Stone stitch</a>
                                </li>
                                <li>
                                    <a href="#tab2">Kundhan stitch</a>
                                </li>
                                <li>
                                    <a href="#tab3">Aari Rope stitch</a>
                                </li>
                                <li>
                                    <a href="#tab4">Thin rope stitch</a>
                                </li>
                                <li>
                                    <a href="#tab5">Looping work</a>
                                </li>
                                <li>
                                    <a href="#tab6">Zari Chain stitch </a>
                                </li>
                                <li>
                                    <a href="#tab7">thread load</a>
                                </li>
                                <li>
                                    <a href="#tab8">Thread embose</a>
                                </li>
                                <li>
                                    <a href="#tab9">Thread Load leaf</a>
                                </li>
                                <li>
                                    <a href="#tab10">Bullion stitch</a>
                                </li>
                                <li>
                                    <a href="#tab11">Mirror work</a>
                                </li>
                                <li>
                                    <a href="#tab12">Mango advanced work</a>
                                </li>
                                <li>
                                    <a href="#tab13">Jardosi leaf</a>
                                </li>
                                <li>
                                    <a href="#tab14">Different leaf methods</a>
                                </li>
                                <li>
                                    <a href="#tab15">Cutwork-advance</a>
                                </li>
                                <li>
                                    <a href="#tab16">Zigzag patches</a>
                                </li>
                                <li>
                                    <a href="#tab17">Thread load patches</a>
                                </li>
                                <li>
                                    <a href="#tab18">Thread embose patches</a>
                                </li>
                                <li>
                                    <a href="#tab19">Double button hole patches</a>
                                </li>
                                <li>
                                    <a href="#tab20">Double button hole patches</a>
                                </li>
                                <li>
                                    <a href="#tab21">French knot</a>
                                </li>
                                <li>
                                    <a href="#tab22">Patch work</a>
                                </li>
                            </ul>
                            <div id="tabs-content">
                                <div id="tab1" className='tab-content'>
                                    <div>
                                        <h3 className='text-2xl mt-8'> Course Description</h3>
                                        <p className='mt-4'>
                                         We teach aari stitches in a way that is easy to understand for everyone, ensuring that all doubts are promptly cleared. The classes will be conducted daily on Zoom, with four available time slots: 8-10 AM, 11 AM-1 PM, 3-5 PM, and 7-9 PM. Materials will be provided at an additional cost, or a list of required materials will be given for you to purchase. This one-month course does not include recorded videos. At the end of the course, we will assist you in creating three fully embroidered aari blouses as your final project, and you will receive a certificate upon completion.
                                         For any further doubts, please WhatsApp the given number.
                                        </p>

                                        <div className='bg-[#F8F8F8] dark:bg-indigo-500 space-y-6 p-8 rounded-md my-8'>
                                            <h4 className='text-2xl'>What you will learn</h4>
                                            <ul className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                                                <li className='flex space-x-3'>
                                                    <div className='flex-none relative top-1'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </div>
                                                    <div className='flex-1'>
                                                        Learn different Techniques and Tools usage
                                                    </div>
                                                </li>

                                                <li className='flex space-x-3'>
                                                    <div className='flex-none relative top-1'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </div>
                                                    <div className='flex-1'>
                                                      Design Creation and Application in real life
                                                    </div>
                                                </li>

                                                <li className='flex space-x-3'>
                                                    <div className='flex-none relative top-1'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </div>
                                                    <div className='flex-1'>
                                                      Customization of designs and Troubleshooting the mistakes 
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className='text-2xl'>What you will need</h4>
                                            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                                                <div className='bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center'>
                                                    <span className='flex-none'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </span>
                                                    <span className='flex-1 text-black'>
                                                        Materials (as mentionaed above)
                                                    </span>
                                                </div>
                                                <div className='bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center'>
                                                    <span className='flex-none'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </span>
                                                    <span className='flex-1 text-black'>
                                                        Paper &amp;pencil
                                                    </span>
                                                </div>
                                                <div className='bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center'>
                                                    <span className='flex-none'>
                                                        <img src="/correct-mark.png" alt=""/>
                                                    </span>
                                                    <span className='flex-1 text-black'>
                                                        Internet Connection
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className='tab-content'>
                                    <div>
                                    
                                                                                
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
                                    
                                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                      <img src="/aari-5.jpg"/>
                                    </div>
                                </a>
                                
                                <Link to={`/joinclass`}>
                <button className='px-4 py-2 my-4 w-full mx-auto text-white disabled:bg-red-300
                bg-secondary duration-300 rounded hover:bg-red-700'>Enroll</button>
              </Link> 
                                <ul className='list'>
                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <FaUser className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Instructor
                                             </div>
                                        </div>
                                        <div className='flex-none'>Mayuri</div>
                                    </li>

                                    

                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <BiTime className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Duration
                                             </div>
                                        </div>
                                        <div className='flex-none'>2 hrs</div>
                                    </li>

                                    <li className='flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0'>
                                        <div className='flex-1 space-x-3 flex items-center'>
                                           <FaUsers className='inline-flex'/>
                                            <div className='text-black font-semibold'>
                                               Enrolled
                                             </div>
                                        </div>
                                        <div className='flex-none'>Total Enrolled :15</div>
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


export default Classdetails1
