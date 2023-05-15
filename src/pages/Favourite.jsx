import React, { useState } from 'react';
import { getLocalStorageData } from '../utilities/apiCaller/localStorage';
import RecipieCard from '../components/RecipieCard';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';


const Favourite = () => {
    
    const [data,setData]=useState(getLocalStorageData())
    
    const navigation = useNavigation();
    if(navigation.state==='loading')
         return  <LoadingSpinner></LoadingSpinner>
    return (
        <div>

            <h1 className="font-bruno text-3xl text-center mb-20 mt-14">Fevourite Recipes</h1>

                <div className="">
                    {
                        data.map((r,i)=> <RecipieCard key={i} data={r} />)
                    }
                </div>
            
            
            
        </div>
    );
};

export default Favourite;