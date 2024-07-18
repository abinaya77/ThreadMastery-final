import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import { BiHomeAlt,BiLogInCircle,BiSelectMultiple } from 'react-icons/bi';
import { FaUsers,FaHome } from 'react-icons/fa';
import {IoSchoolSharp} from "react-icons/io5"
import {IoMdDoneAll} from "react-icons/io"
import {BsFillPostcardFill} from "react-icons/bs"
import {SiGoogleclassroom,SiInstructure} from "react-icons/si"
import {TbBrandAppleArcade} from "react-icons/tb"
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import{MenuItem} from "@mui/material"
import { MdExplore, MdOfflineBolt, MdPayments, MdPendingActions } from 'react-icons/md';
import { GiFigurehead } from 'react-icons/gi';
import Swal from "sweetalert2";
import Scroll from '../../hooks/useScroll';
import { HashLoader } from 'react-spinners';


const adminNavItems=[
    {to:"/dashboard/admin-home",icon:<BiHomeAlt className='text-2xl'/>,label:"Dashboard Home"},
    {to:"/dashboard/manage-users",icon:<FaUsers className='text-2xl'/>,label:"Manage Users"},
    {to:"/dashboard/manage-class",icon:<BsFillPostcardFill className='text-2xl'/>,label:"Manage Products"},
    {to:"/dashboard/manage-applications",icon:<TbBrandAppleArcade className='text-2xl'/>,label:"Applications"},
]

const instructorNavItem=[
    {to:"/dashboard/instructor-cp",icon:<FaHome className='text-2xl'/>,label:"Home"},
    {to:"/dashboard/add-class",icon:<MdExplore className='text-2xl'/>,label:"Add A Product"},
    {to:"/dashboard/my-classes",icon:<IoSchoolSharp className='text-2xl'/>,label:"My Products"},
    {to:"/dashboard/my-pending",icon:<MdPendingActions className='text-2xl'/>,label:"Pending Products"},
    {to:"/dashboard/my-approved",icon:<IoMdDoneAll className='text-2xl'/>,label:"Approved Products"},
    
]

const students=[
    {to:"/dashboard/student-cp",icon:<BiHomeAlt className='text-2xl'/>,label:"Dashboard"},
    {to:"/dashboard/enrolled-class",icon:<SiGoogleclassroom className='text-2xl'/>,label:"Purchased Products"},
    {to:"/dashboard/my-selected",icon:<BiSelectMultiple className='text-2xl'/>,label:"My Selected"},
    {to:"/dashboard/my-payments",icon:<MdPayments className='text-2xl'/>,label:"Payment History"},
    {to:"/dashboard/apply-instructor",icon:<SiInstructure className='text-2xl'/>,label:"Apply for Instructor"},
]

const lastMenuItems=[
    {to:"/",icon:<BiHomeAlt className='text-2xl'/>,label:"Main Home"},
    

]



const DashboardLayout = () => {
    const [open,setOpen]=useState(true);
    const {loader,logout}=useAuth();
    const {currentUser}=useUser();
    const navigate=useNavigate();
    const role=currentUser?.role;

    const handleLogOut=()=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout me!"
          }).then((result) => {
            if (result.isConfirmed) {
                logout()
                .then(Swal.fire({
                    title: "Logged Out!",
                    text: "Your have been logged out!",
                    icon: "success"
                  }))
                .catch((error)=>console.log(error))
            }
            navigate("/")
          });
    }

    

    if(loader){
        return <div className='flex items-center justify-center h-screen'><HashLoader color="#FF1949" size={50} /></div>
      }

  return (
    <div className='flex'>
      <div className={`${open?"w-72 overflow-y-auto":"w-[90px] overflow-auto"} bg-purple-200 h-screen p-5 md:block hidden pt-8 relative duration-300`}>
        <div className='flex gap-x-4 items-center'>
            <img onClick={()=>setOpen(!open)} src="/logo5.png" alt="" className={`cursor-pointer h-[40px] duration-500 ${open && "rotate-[360deg]"}`}/>
            <Link to="/"><h1 onClick={()=>setOpen(!open)} className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open &&"scale-0"}`}>Mayur Fashions</h1></Link>
        </div>

        {/**Navlinks--- */}
        {/**Admin roles */}
        {
            role==="admin" &&<ul className='pt-6'>
                <p className={`ml-3 text-gray-400 ${!open && "hidden"}`}><small>MENU</small></p>
                {
                    role==="admin" && adminNavItems.map((MenuItem,index)=>(
                        <li key={index}className='mb-2'>
                            <NavLink to={MenuItem.to}
                            className={({isActive})=>`flex ${isActive ? "bg-red-500 text-white":"text-[#413F44]"}
                            duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`}
                            >{MenuItem.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>{MenuItem.label}</span>
                            </NavLink>
                            
                        </li>
                    ))
                }
            </ul>

        }

        {/**Instructor roles */}
        {
            role==="instructor" &&<ul className='pt-6'>
                <p className={`ml-3 text-gray-400 ${!open && "hidden"}`}><small>MENU</small></p>
                {
                    role==="instructor" && instructorNavItem.map((MenuItem,index)=>(
                        <li key={index}className='mb-2'>
                            <NavLink to={MenuItem.to}
                            className={({isActive})=>`flex ${isActive ? "bg-red-500 text-white":"text-[#413F44]"}
                            duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`}
                            >{MenuItem.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>{MenuItem.label}</span>
                            </NavLink>
                            
                        </li>
                    ))
                }
            </ul>

        }

        {/**student roles */}
        {
            role==="user" &&<ul className='pt-6'>
                <p className={`ml-3 text-gray-400 ${!open && "hidden"}`}><small>MENU</small></p>
                {
                    role==="user" && students.map((MenuItem,index)=>(
                        <li key={index}className='mb-2'>
                            <NavLink to={MenuItem.to}
                            className={({isActive})=>`flex ${isActive ? "bg-red-500 text-white":"text-[#413F44]"}
                            duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`}
                            >{MenuItem.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>{MenuItem.label}</span>
                            </NavLink>
                            
                        </li>
                    ))
                }
            </ul>

        }


        {/**useful links-- */}
        <ul className='pt-6'>
        <p className={`ml-3 mb-3 text-gray-400 ${!open && "hidden"}`}><small>USEFUL LINKS</small></p>
        {
            lastMenuItems.map((MenuItem,index)=>(
                <li key={index}className='mb-2'>
                    <NavLink to={MenuItem.to}
                        className={({isActive})=>`flex ${isActive ? "bg-red-500 text-white":"text-[#413F44]"}
                        duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`}
                        >{MenuItem.icon}
                        <span className={`${!open && "hidden"} origin-left duration-200`}>{MenuItem.label}</span>
                    </NavLink>
                            
                </li>
            ))
        }

        {/**logout button */}
        <li>
            <button
                onClick={()=>handleLogOut()}
                className=" flex duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4"
                >
                <BiLogInCircle className='text-2xl'/>
                <span className={`${!open && "hidden"} origin-left duration-200`}>Logout</span>
            </button>

        </li>

        </ul>

      </div>
      <div className='h-screen overflow-y-auto flex-1 px-8'>
        <Scroll/>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout
