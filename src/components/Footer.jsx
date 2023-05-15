import React from 'react';
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import fbico from "../assets/images/icon/Facebook.png";
import twico from "../assets/images/icon/Twitter.png";
import inico from "../assets/images/icon/Linked in.png";
import ytico from "../assets/images/icon/YouTube.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#333333] ">
            <div className="max-w-[1280px] mx-auto px-[10px] pt-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                <div className=" w-full">
                <h1 className='font-extrabold font-bruno text-xl  text-white'>MASTER <span className='text-[#ff7a2d]'>CHEF</span></h1>
                <p className='text-justify text-[#b8b8b8] mt-4'>MasterChef is your go-to destination for everything food-related. Our website features a wide array of recipes from top chefs around the world.</p>
                </div>


                <div className="">
                    <h1 className='text-white text-xl font-bold mt-10 mb-5'>Contact Us</h1>
                    <span className='flex items-center gap-2 py-1'>
                        <HiLocationMarker className='h-[20px] w-[20px] text-[#ff7a2d]'/>
                        <p className='text-[#b8b8b8]'>Chalkpathak,Sherpur Sadar,Sherpur</p>
                        
                        </span>
                        <span className='flex  gap-2 py-1 '>
                        <HiPhone className='h-[20px] w-[20px] text-[#ff7a2d] mt-2'/>
                        <p className='text-[#b8b8b8]'>+880 1645-288850 <br />+880 1400-032663</p>
                        
                        </span>
                        <span className='flex items-center gap-2 py-1'>
                        <HiMail className='h-[20px] w-[20px] text-[#ff7a2d]'/>
                        <p className='text-[#b8b8b8]'>shazzad.srv@gmail.com</p>
                        
                        </span>
                        
                </div>


                <div className="">
                    <h1 className='text-white text-xl font-bold mt-10 mb-5'>Quick Links</h1>
                    
                    <div className="flex flex-col gap-1">
                    <Link to='/' className='text-[#b8b8b8]'>Home</Link>
                    <Link to='/about' className='text-[#b8b8b8]'>About Us</Link>
                    <Link to='/blogs' className='text-[#b8b8b8]'>Blogs</Link>
                    <Link to='/favourites' className='text-[#b8b8b8]'>Favourites</Link>
                    </div>
                </div>

                <div className="">
                    <h1 className='text-white text-xl font-bold mt-10 mb-5'>Follow Us On</h1>
                    
                    <div className="flex  gap-2">
                        
                        <img className='h-[30px] w-[30px]' src={fbico} alt="" />
                        <img className='h-[30px] w-[30px]' src={twico} alt="" />
                        <img className='h-[30px] w-[30px]' src={inico} alt="" />
                        <img className='h-[30px] w-[30px]' src={ytico} alt="" />
                    
                    </div>
                </div>






            </div>
            
            </div>
            <p className=' text-center bg-[#202020] p-4 text-white font-medium mt-4 border-t-2 border-[#131313]'>  © 2023 MasterChef. All rights reserved. Made by: Shazzad Hossen.</p>

        </div>
        
    );
};

export default Footer;