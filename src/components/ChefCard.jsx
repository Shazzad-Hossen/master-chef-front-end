import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefCard = ({data}) => {
    const {id, name, picture, experience, recepies, likes}=data;
  return (
    <LazyLoad  threshold={0.95}>
    <div className="">
        <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
         <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={picture}
          alt=""
        />
        
        
        <div className=" p-4 leading-normal items-start">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400"> <span className="font-semibold">Experiences</span> : {experience}
          </p>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400"> <span className="font-semibold">Recepies</span> : {recepies}
          </p>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400"> <span className="font-semibold">Likes</span> : {likes}
          </p>
          <Link to={`/recipes/${id}`}><button className="bg-[#ff7a2d] text-white p-2 font-semibold shadow-md rounded-tl-lg rounded-br-lg">View Recipes</button></Link>
        </div>
 
    </div>
    </div>
    </LazyLoad>
  );
};

export default ChefCard;
