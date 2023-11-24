import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
// import { productsAction } from '../../store/slices/products';

export default function Products() {
      return(

     <>
    <div className='bg-slate-950'>
        <NavLink to="add">
                <button className="flex  m-3 ml-autofocus:outline-none rounded bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ... px-3 py-1.5 text-sm text-neutral-100 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:ext-neutral-100">
                  ADD New Movie{" "}
                </button>
              </NavLink>
              <NavLink to="update">
                <button className="flex m-3 ml-autofocus:outline-none rounded bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ... px-3 py-1.5 text-sm text-neutral-100 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:ext-neutral-100">
                  Update Movie{" "}
                </button>
              </NavLink>

              <NavLink to="ProdList">
                <button className="flex m-3 ml-autofocus:outline-none rounded bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ... px-3 py-1.5 text-sm text-neutral-100 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:ext-neutral-100">
                Movie List{" "}
                </button>
              </NavLink>
              <Outlet />
              </div>
              </>
  );
}
