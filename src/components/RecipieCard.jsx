import React, { useEffect, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { addToLocalStorage, getLocalStorageData } from "../utilities/apiCaller/localStorage";
import ReactStarsRating from 'react-awesome-stars-rating';

const RecipieCard = ({ data }) => {
  const { name, image, Ingredients, procedure, rating } = data;
  const [fev,setFev]=useState(getLocalStorageData());
  const [isdisabled,setDisabled]=useState(false);
  const [isTrue,setisTrue]=useState(false);
 
 useEffect(()=>{
  const fIndex= fev.findIndex(item=>item.id===data.id);
  if(fIndex!==-1){
    setisTrue(true);

  }

 },[])
 

  
  
  const addtoFev=(e)=>{
    addToLocalStorage(data);
    setDisabled(true);
    setisTrue(true);
    
  


  }


  return (
    <div className="py-4">
      <div className=" shadow-xl rounded-lg border-2">
        <div className=" w-full relative">
          
                <img
            className="object-cover w-full rounded-t-lg max-h-[500px]"
            src={image}
            alt=""
          /> 
          
          <div className="absolute bottom-4 left-4 text-white  p-1 sm:p-8 w-[90%]  rounded-l-lg title-bg">
            <h1 className="font-bruno font-extrabold sm:text-4xl">{name}</h1>
            <p className="flex gap-3 items-center">Ratings: {rating} <ReactStarsRating className="flex  " size={15} starGap={4} primaryColor='yellow' value={rating} /></p>
          </div>
        </div>

        <div className="p-6">
          <span className="flex justify-end">
            <button disabled={isdisabled} onClick={addtoFev} className="flex gap-2 items-center"><h1 className="text-[#ff7a2d] font-medium text-lg"></h1> <BsFillHeartFill className={` relative top-1  w-[30px] h-[30px] ${isTrue? 'text-red-500': 'text-black'} `} /></button>
          </span>
          <h1 className="font-bold text-xl mt-10  mb-6">Ingredients:</h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto pl-2">
            {Ingredients.map((item, i) => (
              <p key={i}>-{item}</p>
            ))}
          </div>
          <h1 className="font-bold text-xl mt-10  mb-6">Cooking Method:</h1>
          <div className="pl-2">{procedure}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipieCard;
