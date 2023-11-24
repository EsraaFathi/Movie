// import { BrowserRouter,Routes, Route} from "react-router-dom";
// import Login from'./Components/login/login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LoginPage from './Components/login/login'
import Registration from './Components/Register/register'
import Logout from './Components/logOut/logout'
import AppLayout from './Components/AppLayout/AppLayout'
import ErrorPage from './Components/NotFound/NotFound'
// import Products from "./Components/products/products";
// import Navbar from "./Components/Navbar/Navbar";
// import LoginPage from './Components/login/login';
// import Registration from "./Components/Register/register";
// import Products from './Components/products/products';
import UpdateProduct from './Components/products/UpdateProduct'
import AddProduct from './Components/products/AddProduct'
import SingleProduct from './Components/products/SingleProduct'
import Products from './Components/products/products'
import Home from './Components/Home/Home'
import Favorites from './Components/favorites/Favorites'
import ProdList, { loaderProdList } from './Components/products/productList'
import { Provider } from 'react-redux'
import store from './store/store';
import { useState } from 'react';
import { LanguageProvider } from './context/language'



const router= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {index:true,element:<Home/>},

      {path:"/login" , element:<LoginPage/>},

      {path:"/Register" , element:<Registration/>},
      {path:"/logout" , element:<Logout/>},
      {path:"/products" , element:<Products/>},
      {path:"/Favorites" , element:<Favorites/>},


      
      {path:"/products/" , 
      element:<Products/>,
      children:[
        // {index:true,element:<AddProduct/>},
        {path:"update",element:<UpdateProduct/>},
        {path:"add",element:<AddProduct/>},
        {path:"ProdList",element:<ProdList/>},
        // {path:"ProdList",element:<ProdList/>,loader:loaderProdList},

      // {path:"/singleproduct/:id/" , 
      // element:<SingleProduct/>,
      // children:[
      //   // {index:true,element:<AddProduct/>},
      //   {path:"update",element:<UpdateProduct/>},
      //   {path:"add",element:<AddProduct/>}


      ]
    
    },

      {path:"/singleproduct/:id",element:<SingleProduct/>},
      
      {path:"*",element:<ErrorPage/>}
    ]
  }
])

function App() {
const [language,setlanguage]=useState('en')
  return <Provider store={store}>
<LanguageProvider value={{language,setlanguage}}>
<RouterProvider router={router} className='bg-slate-950' />

</LanguageProvider>

  </Provider> 

//   return (
//     <>
//     <Navbar/>
// <BrowserRouter>
// <Routes>
// <Route path="/products" element={<Products/>}/>
// <Route path="/login" element={<LoginPage />}/>
// <Route path="/registration" element={<Registration />}/>

//   {/* <Route index element={<Login />}/> */}
// </Routes>

// </BrowserRouter>
// {/* <Login/> */}
//     </>
//   )
}

export default App
