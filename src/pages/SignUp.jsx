import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import github from "../assets/images/icon/github.png";
import google from "../assets/images/icon/google.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const SignUp = () => {
    const [errmsg,setErrmsg]=useState("")
  const { createUser, updateUser, googleSignin, githubSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleHandler=()=>{
    googleSignin().
    then((result) => {
      navigate('/');
        
      }).catch((error) => {
        setErrmsg(error.message.slice(22,-2));
        
      });
    
 }
 const githubHandler=()=>{
    githubSignin().
    then((result) => {
      navigate('/');
        
    }).catch((error) => {
      setErrmsg(error.message.slice(22,-2));
      
    });

 }
  const handleSignup = (event) => {
    event.preventDefault();
    console.log("clicked")
    setErrmsg("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const confpass = form.confpass.value;
    let photoUrl = form.photoUrl.value;
    
     
    if(name==='') setErrmsg("Name can not be empty")
    else if(email==='') setErrmsg("Email can not be empty")
    else if(pass==='') setErrmsg("You must enter a password")
    else if(confpass==='') setErrmsg("Please confirm you password")
    else if(confpass!==pass) setErrmsg("Password doesn't matched")
    else {
        
        
        setErrmsg("");
        createUser(email, pass)
        .then((result) => {
          if(photoUrl==='') photoUrl='https://www.pngitem.com/pimgs/m/557-5578368_empty-profile-picture-icon-hd-png-download.png'
          
          updateUser(name,photoUrl)
            .then(() => {
              navigate('/');
             
              
            })
            .catch((error) => {
              setErrmsg(error.message.slice(22,-2));
              
            });
  
          
        })
        .catch((error) => {
          setErrmsg(error.message.slice(22,-2));
        });


    }
    

   
  };
  return (
    <div className="rounded-lg p-6 max-w-[500px] border-2 mx-auto my-10">
      <p className="font-bruno text-2xl text-center my-6">Sign Up</p>

      <form onSubmit={handleSignup}>
        <p className="font-semibold mb-2 mt-6">Name</p>
        <input
          name="name"
          className="w-full border-2 rounded-md border-[#bdbdbd]"
          type="text"
          placeholder="Enter Your Name Here"
        />

        <p className="font-semibold mb-2 mt-6">Email</p>
        <input
          name="email"
          className="w-full border-2 rounded-md border-[#bdbdbd]"
          type="email"
          placeholder="Enter Your Email Here"
        />

        <div className=" flex flex-col sm:flex-row gap-2">
          <div className="w-full">
            <p className="font-semibold mb-2 mt-6">Password</p>
            <input
              name="pass"
              className="w-full border-2 rounded-md border-[#bdbdbd]"
              type="text"
              placeholder="Enter Your Email Here"
            />
          </div>

          <div className="w-full">
            <p className="font-semibold mb-2 mt-6">Confirm Password</p>
            <input
              name="confpass"
              className="w-full border-2 rounded-md border-[#bdbdbd]"
              type="text"
              placeholder="Enter Your Email Again"
            />
          </div>
        </div>

        <p className="font-semibold mb-2 mt-6">Photo url</p>
        <input
          name="photoUrl"
          className="w-full border-2 rounded-md border-[#bdbdbd] mb-2"
          type="text"
          placeholder="Enter Your Photo Url Here"
        />
        <p className="text-red-600 mb-5 h-[10px]">{errmsg}</p>

        <div className="flex justify-center flex-col items-center">
          <button
            type="submit"
            className="bg-[#ff7a2d] py-2 px-6 rounded-md font-bruno text-white w-full  "
          >
            Sign Up
          </button>
          <p className="my-4">
            Already have an account?{" "}
            <Link className="text-[#ff7a2d]" to="/signin">
              Sign In Here.
            </Link>
          </p>
          
        </div>
      </form>
      <p className=" mb-5 text-center">Or sign in with</p>
          <div className="flex justify-center items-center gap-4 mb-10">
          <button onClick={googleHandler} > <img className='w-[40px]' src={google} alt="" /></button>
          <button onClick={githubHandler}> <img className='w-[40px]' src={github} alt="" /></button>
          </div>
    </div>
  );
};

export default SignUp;
