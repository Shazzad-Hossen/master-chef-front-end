const api='https://master-chef-shazzad-srv.vercel.app'
export const fatchChefRecipes= async(id)=>{
    
    const data1=  await fatchChef(id);
    const data2=  await fetchRecipes(id);
    return   [data1,data2]


}

export const fatchChefs= async()=>{
    const res= await fetch(`${api}/chefs`);
    const data= await res.json();
    return data;

}
export const fatchBlogs= async()=>{
    const res= await fetch(`${api}/blogs`);
    const data= await res.json();
    return data;

}


export const fatchChef= async(id)=>{
    const res= await fetch(`${api}/chefs/${id}`);
    const data= await res.json();
    return data;

}

export const fetchRecipes= async(id)=>{

    
    const res= await fetch(`${api}/recipes/${id}`);
    const data= await res.json();
    return data;
}