import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import _404_ErrorPage from './pages/_404_ErrorPage';
import { fatchChefs, fatchChefRecipes, fatchBlogs } from './utilities/apiCaller/apiCaller';
import Recipes from './pages/Recipes';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import Favourite from './pages/Favourite';
import User from './pages/User';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      { path: "/", 
        element: <Home/>,
        loader: async () => {
          return fatchChefs();
        }
      },
      { path: "blog", 
      element: <Blog/>,
      loader: async()=> {
        return  await fatchBlogs();
      }
    
    
    },
      { path: "signin", element: <SignIn/>},
      { path: "signup", element: <SignUp/>},
      { path: "about", element: <About/>},
      { path: "user", element: <PrivateRoute><User/></PrivateRoute>},
      { path: "recipes/:id", 
      element: <PrivateRoute><Recipes/></PrivateRoute>,
      loader: async({params})=> {
        return  await fatchChefRecipes(params.id);
      }
    },
    { path: "favourite", 
      element: <PrivateRoute><Favourite/></PrivateRoute>,
      
    },
    
    {
      path: "*",
      element: <_404_ErrorPage/>
    }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
      
    
   
  </React.StrictMode>,
)
