import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BlogCards from '../components/BlogCards';
import Pdf from "react-to-pdf";
import LoadingSpinner from '../components/LoadingSpinner';


const Blog = () => {
    const ref = React.createRef();
  

    
    const data=useLoaderData();
    const navigation = useNavigation();
    if(navigation.state==='loading')
         return  <LoadingSpinner></LoadingSpinner>
    return (

        <div ref={ref} className=" ">
            
             <h1 className="font-bruno text-3xl text-center mb-20 mt-14">Blogs</h1>
              <div className="justify-end flex">
              <Pdf  targetRef={ref} filename="Master-Chef.pdf">
        {({ toPdf }) => <button className='bg-[#ff7a2d] p-2 text-white font-semibold mb-10 ' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
              </div>
             
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5'>
            {data.map((b,i)=> <BlogCards key={i} data={b}/>)}
        </div>
        </div>
    );
        
        
};

export default Blog;