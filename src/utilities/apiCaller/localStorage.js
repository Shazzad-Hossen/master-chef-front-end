import {toast} from 'react-toastify';
export const addToLocalStorage=(data)=>{
    
    
    let recipes=[];
    const savedRecipes=JSON.parse(localStorage.getItem('fevrecipes'))
    
    if(savedRecipes){
        const rIndex= savedRecipes.findIndex(item=>item.id===data.id)
        if(rIndex!==-1)
        toast.warn("Already added to favorite");
        else {
            recipes=[...savedRecipes,data];
            localStorage.setItem('fevrecipes',JSON.stringify(recipes));
            toast.success("The recipe is your favorite");


        }

    }
    else {
        recipes=[data];
        localStorage.setItem('fevrecipes',JSON.stringify(recipes));
        toast.success("The recipe is your favorite");
    }
    
   
}

export const getLocalStorageData=()=>{

   const data= JSON.parse(localStorage.getItem('fevrecipes'))
   if(data) return data;
   else return [];
}