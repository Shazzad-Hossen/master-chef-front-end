import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';


const User = () => {
    const {user,updateUser}= useContext(AuthContext);
    const [isedit, setIsedit]=useState(true);
    const [photoURL, setPhotoURL]=useState(user.photoURL);
    const [name, setName]=useState(user.displayName);
    const navigate= useNavigate();
    const updateProfile=()=>{
        updateUser(name,photoURL)
            .then(() => {
              navigate('/user');
             
              
            })
            .catch((error) => {
              setErrmsg(error.message.slice(22,-2));
              
            });

    }

    return (
        <div>
            <h1 className="font-bruno text-3xl text-center mb-20 mt-14">Profile</h1>
            <div className="flex justify-end mb-6">
                <div onClick={()=>setIsedit(!isedit)} className="flex items-center ">
                    {isedit?<button  className='bg-[#ff7a2d] p-2 text-white font-semibold w-[100px]'>Edit Profile</button>:<button onClick={updateProfile} className='bg-[#ff7a2d] p-2 text-white font-semibold w-[100px]'>Save</button>}
                    
                </div>
            </div>

            <div className="">
                <img className='w-[200px] h-[200px] border-2 p-2 '  src={user.photoURL} alt="" />

                 <div className={`${isedit?'invisible':''} flex items-center gap-2 mb-5 mt-5`}>
                    <h1 className='text-xl font-bold'>Photo Url&nbsp;:</h1>
                    <p className="text-xl font-semibold text-[#4b4b4b]"><input onChange={(e)=>setPhotoURL(e.target.value)} className={`w-full border-2 rounded-lg ${isedit?'border-[white] ':'border-[#b4b4b4]'}`} type="text" value={photoURL} /></p>
                </div>

                <div className="flex items-center gap-2 mb-5 ">
                    <h1 className='text-xl font-bold'>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</h1>
                    <p className="text-xl font-semibold text-[#4b4b4b]"><input onChange={(e)=>setName(e.target.value)} className={`w-full border-2 rounded-lg ${isedit?'border-[white] ':'border-[#b4b4b4]'}`} disabled={isedit} type="text" value={name} /></p>
                </div>
                <div className="flex items-center gap-2 mb-5">
                    <h1 className='text-xl font-bold'>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</h1>
                    <p className='text-xl font-semibold text-[#4b4b4b] break-all'>{user.email}</p>
                </div>
            </div>
            
        </div>
    );
};

export default User;