// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from 'react';
import { languageContext } from './../../context/language';

export default function AppLayout() {
  var {language} =useContext(languageContext)

  return (
    <>
    <div  dir={`${(language=='en')?'ltr':'rtl'}`}>
     <Navbar/>
      < Outlet/>
 
    </div>
   
    </>
  );
}
