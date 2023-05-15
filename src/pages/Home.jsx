import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/images/carousel/img1.webp";
import img2 from "../assets/images/carousel/img2.jpg";
import img3 from "../assets/images/carousel/img3.jpg";
import img4 from "../assets/images/carousel/img4.jpg";
import img5 from "../assets/images/carousel/img5.jpg";
import img6 from "../assets/images/carousel/img6.jpg";
import img7 from "../assets/images/carousel/img7.jpg";
import img8 from "../assets/images/carousel/img8.jpg";
import img9 from "../assets/images/carousel/img9.jpg";
import catering from '../assets/images/bg/catering.png'
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefCard from "../components/ChefCard";
import LoadingSpinner from "../components/LoadingSpinner";



const Home = () => {
    const [chef,setChef]= useState(useLoaderData());
    const navigation = useNavigation();
    if(navigation.state==='loading')
         return  <LoadingSpinner></LoadingSpinner>

  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img7} />
        </div>
        <div>
          <img src={img8} />
        </div>
        <div>
          <img src={img9} />
        </div>
      </Carousel>
     
     <section>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="w-full relative">
        <img className="object-cover min-h-[300px]" src={catering} alt="" />
        <button className="absolute top-[30%] right-[20%] bg-[#ff7a2d] p-2  bg-opacity-[65%] text-white font-bruno h-[150px]  w-[150px] rounded-full shadow-2xl ">Book Now</button>
        </div>
        <div className="w-full pl-10">
          <h1 className="text-4xl font-bruno">Catering Sevices</h1>
          <ul className="font-bruno mt-5 text-xl">
          <li>Wedding</li>
          <li>Corporate Events</li>
          <li>Graduations</li>
          <li>Congresses</li>
          </ul>
        </div>
      </div>
     </section>
   
     <section>
        <h1 className="font-bruno text-3xl text-center mb-20 mt-14">Meet Our Master Chefs</h1>

     <div className="flex justify-center">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 ">
        {
            chef.map((item,i)=> <ChefCard key={i} data={item}/>)
        }
     </div>
     </div>
     </section>

     <section>

      <div className="mx-auto subsbg  my-6 rounded-lg border-2 border-[#e99d71] max-w-[800px] shadow-2xl relative -bottom-[70px]">
        <div className="flex justify-center items-center p-14 bg-[white] rounded-lg  bg-opacity-20">
        <input className=" border-2 p-2 rounded-l-md border-[#ff7a2d] border-r-0" type="text" placeholder="yourmail@mail.com" />
        <button className="rounded-r-md border-2 border-[#ff7a2d] p-2  border-l-0 bg-[#ff7a2d] text-white font-semibold">Subscribe</button>
        </div>
      </div>
     </section>
      



    </div>
  );
};

export default Home;
