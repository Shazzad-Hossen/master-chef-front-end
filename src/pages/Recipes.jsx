import React from 'react';
import { Navigate, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import like_ico from '../assets/images/icon/like.png'
import RecipieCard from '../components/RecipieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {
    
    const data= useLoaderData();
    const [data1,data2]=data;
    if(typeof data1[0] === 'undefined'  ||  typeof data2[0] === 'undefined'  ) {
       return  <Navigate to="/error" replace={true} />

    }
   
    const {id, name, picture, bio, experience, recepies, likes}= data1[0];
    const recipes=data2[0].recipes;
    
    const navigation = useNavigation();
    if(navigation.state==='loading')
         return  <LoadingSpinner></LoadingSpinner>
    
    return (
        <div>
             
            <ToastContainer />
            <div className="chefbg rounded-xl ">
                <div className="bg-black bg-opacity-60 text-white flex flex-col md:flex-row justify-between gap-10 items-center  p-8 rounded-xl">
                <img className=' w-full max-w-[300px] rounded-[50%] shadow-2xl border-white border-4' src={picture} alt="" /> 
                <div className="text-start max-w-[800px]">
                    <h1 className='text-2xl font-bruno mb-6'>{name}</h1>
                    <p className='mb-2 font-semibold'>{bio}</p>
                    <p className='mb-2'><span className='font-bold text-[#ffa26c]'>Experiences: </span> {experience} </p>
                    <p className='mb-2'><span className='font-bold text-[#ffa26c]'>Total Recipes: </span> {recepies} </p>
                    <p className='flex items-center gap-3'><img className='w-[25px]' src={like_ico} alt="" />  {likes} </p>
                </div>
                </div>
            </div>

            <section>
            <h1 className="font-bruno text-3xl text-center mb-20 mt-14">Recipes</h1>

                <div className="">
                    {
                        recipes.map((r,i)=> <RecipieCard key={i} data={r} />)
                    }
                </div>
            </section>
            
        </div>
    );
};

export default Recipes;