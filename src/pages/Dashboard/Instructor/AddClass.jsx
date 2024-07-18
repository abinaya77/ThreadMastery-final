import React, { useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useUser from '../../../hooks/useUser';

const KEY=import.meta.env.VITE_IMG_TOKEN;

const AddClass = () => {
    const API_URL=`https://api.imgbb.com/1/upload?key=${KEY}&name=`
    const axiosSecure=useAxiosSecure();
    const {currentUser,isLoading}=useUser();
    const[image,setImage]=useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Extract form data into JSON object
        const formData = new FormData(e.target);
        const newData = Object.fromEntries(formData.entries());
    
        // Add additional fields
        newData.status = 'pending';
        newData.submitted = new Date().toISOString();
        newData.totalEnrolled = 0;
        newData.reason = null;
    
        // Remove the "file" field if necessary
        delete newData.file;
    
        // Convert newData to JSON format
        const jsonData = JSON.stringify(newData);
    
    
        // Send jsonData to the backend
        axiosSecure.post('/new-class', jsonData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            alert("Successfully added the product");
            
        })
        .catch(error => {
            console.error("Error uploading class:", error);
        });
    };
    
    

    if(isLoading){
        return <div>loading...</div>
    }
  return (
    <div>
        <div className='my=10'>
            <h1 className='text-center text-3xl font-bold'>Add Your Product</h1>
        </div>

        <form  onSubmit={handleFormSubmit}  className='mx-auto p-6 bg-white rounded shadow'>
            <div className='grid grid-cols-2 w-full gap-3 items-center'>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>Product Name</label>
                    <input type='text' required placeholder='Your product name' name='name' id='name' className='w-full
                    px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500'/>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='image'>Product Thumbnail</label>
                    <input type='text'  required placeholder='Your product thumbnail' name='image'  className='w-full
                    px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500'/>
                </div>
            </div>

            {/**second row */}
            <div>
                <h1 className='text-[12px] my-2 ml-2 text-secondary'>you can change your name and email here</h1>
                <div className='grid grid-cols-2 w-full gap-3 items-center'>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='instructorName'>Instructor Name</label>
                    <input type='text' defaultValue={currentUser?.name} placeholder='Instructor Name' name='instructorName'  className='w-full
                    px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500'/>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='instructorEmail'>Instructor Email</label>
                    <input type='email' defaultValue={currentUser?.email} placeholder='Your email' name='instructorEmail'  className='w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500'/>
                </div>
            </div>
            </div>

            {/**Third row */}
            <div>
                <div className='grid grid-cols-2 w-full gap-3 items-center'>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='availableSeats'>Available Quantity</label>
                    <input type='number' required placeholder='how much quantity availble?' name='availableSeats'  className='w-full
                    px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500'/>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='price'>Price</label>
                    <input type='number' required placeholder='how much does it cost?' name='price'  className='w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500'/>
                </div>
            </div>
            </div>

            {/**youtube link */}
            <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='videoLink'>Video Link</label>
                    <p className='text-[12px] my-2 mt-2 text-secondary'>only youtube videos or drive are supported</p>
                    <input type='text' required placeholder='your product link' name='videoLink'  className='w-full
                    px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500'/>
            </div>

            {/**description */}
            <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='description'>Description about your product :</label>
                    <textarea  placeholder='dexcription about your product' name='description'  className='resize-none border w-full p-2 rounded-lg
                    border-secondary outline-none'></textarea>
            </div>

            {/** add-button  */}
            <div className='text-center w-full'>
                <button className='bg-secondary w-full hover:bg-red-400 duration-200 text-white font-bold py-2 px-4 rounded' type='submit'>Add Product</button>
            </div>

        </form>
    </div>
  )
}

export default AddClass
