import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'




const Header = () => {
    const {signOutUser,user}=useContext(AuthContext);
    const pImg= user?.photoURL || ''
    const [menu,setMenu]=useState(true);
    
    const navigate = useNavigate();
    const signOut= ()=>{
        signOutUser();
        navigate("/signin");


    }
 
    return (
        <div className="">
            <Tooltip id="my-tooltip" className='z-[300]' />
          

<div className='flex justify-between py-8'>
            
            <Link to='/'><h1 className='font-extrabold font-bruno text-xl '>MASTER <span className='text-[#ff7a2d]'>CHEF</span></h1></Link>
            <div className="flex gap-8 items-center">
                
                
                <ul className={`flex gap-4 sm:flex-row absolute sm:static z-[100] w-full sm:w-auto p-10 sm:p-0 ${menu? ' top-0 -left-[600px]': 'top-0 flex-col left-0 bg-white  shadow-xl h-[100vh] sm:h-auto sm:shadow-none'}`}>
                    <li><NavLink className={({isActive})=>isActive?"text-[#ff7a2d] font-semibold pb-2 border-b-2 border-b-[#ff7a2d]": ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive?"text-[#ff7a2d] font-semibold pb-2 border-b-2 border-b-[#ff7a2d]": ""} to='favourite'>Favourite</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive?"text-[#ff7a2d] font-semibold pb-2 border-b-2 border-b-[#ff7a2d]": ""}to='blog'>Blog</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive?"text-[#ff7a2d] font-semibold pb-2 border-b-2 border-b-[#ff7a2d]": ""}to='about'>About</NavLink></li>
                    { !user &&  <li><NavLink className={({isActive})=>isActive?"text-[#ff7a2d] font-semibold pb-2 border-b-2 border-b-[#ff7a2d]": ""} to='signin'>Sign In</NavLink></li> }
                    { !user &&    <li><NavLink className={({isActive})=>isActive?"text-[#ff7a2d] font-semibold pb-2 border-b-2 border-b-[#ff7a2d]": ""} to='signup'>Sign Up</NavLink></li> }
                    { user &&    <li onClick={signOut}><button>Sign Out</button></li> }
                </ul>
                
                
                {menu?<RxHamburgerMenu className='sm:hidden w-[30px] h-[30px] text-[#ff7a2d] z-[200]' onClick={()=>setMenu(!menu)}/>:
                <RxCross1 className='sm:hidden w-[30px] h-[30px] text-[#ff7a2d] z-[200]' onClick={()=>setMenu(!menu)}/>}
                
               
            
           {user &&   <Link to='/user'><img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className='w-[30px] h-[30px] rounded-full z-[200]' src={pImg} alt="" /></Link>}
            </div>
            
        </div>

        
        </div>
    );
};

export default Header;