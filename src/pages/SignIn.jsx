import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import github from '../assets/images/icon/github.png';
import google from '../assets/images/icon/google.png';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
     const {signInUser, googleSignin, githubSignin, resetPassword}=useContext(AuthContext);
     const [errmsg,setErrmsg]=useState(' ');
     const [rpEmail,setRpemail]=useState('');
     const location=useLocation();
     const navigate = useNavigate();
     const from=location.state?.from?.pathname || '/';


     const googleHandler=()=>{
        googleSignin().
        then((result) => {
            navigate(from,{replace:true});
            
          }).catch((error) => {
            setErrmsg(error.message.slice(22,-2));
            
          });
        
     }
     const githubHandler=()=>{
        githubSignin().
        then((result) => {
            navigate(from,{replace:true});
            
        }).catch((error) => {
          setErrmsg(error.message.slice(22,-2));
          
        });

     }
     const handleResetpass=(event)=>{
        setErrmsg(' ');
       
        if(rpEmail==='') setErrmsg("Email can't be empty");

        resetPassword(rpEmail).
        then(() => {
            toast.success("Password reset email send.");
            
          })
          .catch((error) => {
            setErrmsg(error.message.slice(22,-2));
          });
        
     }

    const handleSignin=(event)=>{
        event.preventDefault();
        setErrmsg(' ');
        const form= event.target;
        const email= form.email.value;
        const pass=form.pass.value;
        if(email==='') setErrmsg("Email can't be empty");
        else if(pass==='') setErrmsg("Password can't be empty");
        else if(pass.length<6) setErrmsg("Password must be or more than 6 charecter");
        else {
            setErrmsg(' ');
            signInUser(email,pass).
        then((result) => {
            navigate(from,{replace:true});
           
           
           })
           .catch((error) => {
            setErrmsg(error.message.slice(22,-2));
            
           
           });

        }
        

    }
    return (


        <div className='rounded-lg p-6 max-w-[500px] border-2 mx-auto my-10'>
             <ToastContainer />
            <p className='font-bruno text-2xl text-center my-6'>Sign In</p>

            <form onSubmit={handleSignin}>

                <p className='font-semibold mb-2 mt-6'>Email</p>
                <input
                value={rpEmail} 
                onChange={(e)=>setRpemail(e.target.value)}
                name="email" 
                className='w-full border-2 rounded-md border-[#bdbdbd]' type="email" placeholder='Enter Your Email Here' />

                <p className='font-semibold mb-2 mt-6'>Password</p>
                <input
                name='pass' 
                className='w-full border-2 rounded-md border-[#bdbdbd]' type="text" placeholder='Enter Your Email Here' />
                 <p className="text-red-600 mb-5 h-[10px]">{errmsg}</p>
                 
                 <p className='my-4'>Forgot Password? <span onClick={handleResetpass} className='text-[#ff7a2d] cursor-pointer' >Click Here.</span></p>
                <div className="flex justify-center flex-col items-center"><button type='submit' className='bg-[#ff7a2d] py-2 px-6 rounded-md font-bruno text-white w-full  '>Sign in</button>
                
                
                </div>
                

            
            </form>
            <div className="flex justify-center flex-col items-center">
                <p className='my-4'>Didn't have an account? <Link className='text-[#ff7a2d]' to='/signup'>Sign Up Here.</Link></p>
                <p className=' mb-5'>Or sign in with</p>
                <div className="flex justify-center items-center gap-4 mb-10">
                   <button onClick={googleHandler} > <img className='w-[40px]' src={google} alt="" /></button>
                   <button onClick={githubHandler}> <img className='w-[40px]' src={github} alt="" /></button>
                </div>
                
                </div>
           
        </div>
    );
};

export default SignIn;