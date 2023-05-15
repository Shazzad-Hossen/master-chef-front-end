import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    
    return (
        <div>
            
            <div className="max-w-[1280px] mx-auto px-[10px] "><Header/></div>
            <div className="max-w-[1280px] mx-auto px-[10px] my-10"><Outlet/></div>
            <Footer/>
            
        </div>
    );
};

export default Main;