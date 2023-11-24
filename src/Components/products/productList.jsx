// import React, { useEffect, useState } from 'react';
// import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axiosConfig/instance';
import { NavLink, useLoaderData } from 'react-router-dom';
import { productsAction } from '../../store/slices/products';
import { useEffect } from 'react';
// import { CiHeart } from "react-icons/ci";
import { addToFavorites, removeFromFavorites } from '../../store/slices/favorites';
// import { changeColor } from '../../store/slices/FavBtnColor';
// import { changeColor } from '../../store/slices/FavBtnColor';

// ===>>>BY THEN & CATCH
// import Products from './products';
// export default function Products() {
//     useEffect(function(){
//         // get>>return promise
//         axios.get('https://fakestoreapi.com/products').then((res)=>{
//             console.log(res);

//         }).catch((err)=>{
//             console.log(err);

//         })

//     },[])

    
export default function ProdList() {
// *#####***not shared product array 
// 1)Without using Loader===get API

    // var [products, setProducts] = useState([])
    // const [Page, setPage] = useState(1);


//     useEffect(function () {
// // ====>>>>BY async & Await
//         const getDetails = async (b) => {
//             try {
//                 var res = await axiosInstance.get('/movie/popular',{
//                   params:{
//                          page:b,
//                       }});
//                 console.log(res.data.results);
//                 setProducts(res.data.results);
                
//               } catch (err) {
//                 console.log(err);
//               }       };
       
//            getDetails(Page);
    
// // =====>>>by Then &catch
//         // axiosInstance.get('/movie/popular',{
//         //     // headers:{
//         //     //     "authorization":"ffdfsf",
                
//         //     // },
//         //     params:{
//         //       //  limit:5 ,
//         //        page:b,
//         //     }

//         // }).then((res) => {
//         //       console.log(res.data.results);
//         //     setProducts(res.data.results);
//         // }).catch((err) => {
//         //     console.log(err);
//         // })


//         // axios.post("url","data",{})
//     }, [Page])



//----2)get the return of LOader
// const products=useLoaderData()


// *#####*** shared product array 

// >>>>mariem>>>
const favoriteArray= useSelector((state)=>state.Favorites.Favorites)
console.log(favoriteArray);
const products=   useSelector((state)=>state.products.products)
const dispatch=     useDispatch()
var isFavorite =(movieIDD)=> favoriteArray.some( movie => movie.id === movieIDD);
var isFavorite1;
function handleToggleProduct (movie)  {
  console.log(movie);

  if(isFavorite(movie.id)){
    
      dispatch(removeFromFavorites(movie.id));
      console.log(favoriteArray);
      isFavorite1=false;
      console.log(isFavorite1);

  }else {
      dispatch(addToFavorites(movie));
      isFavorite1=true;
      console.log(favoriteArray);
      console.log(isFavorite1);


  }
};

var  buttonColor=
 isFavorite?
 'absolute top-2 rounded-full w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 p-0 border-0 inline-flex items-center justify-center text-red-700 ml-2' 
:'absolute top-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2';
var buttonColorST = isFavorite?'red':'green';


// const clickedColor= useSelector((state)=>state.FavColor.color)
//   console.log(clickedColor);


  // const clickedColor='absolute top-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2'
  // const pink='absolute top-2 rounded-full w-10 h-10    bg-gradient-to-r from-pink-400 to-purple-500 p-0 border-0 inline-flex items-center justify-center text-red-700 ml-2'
// function FavoriteIT(FAVmovie) {
  // dispatch(addToFavorites(FAVmovie))
  // dispatch(changeColor((clickedColor=='absolute top-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2'
  // )?'absolute top-2 rounded-full w-10 h-10    bg-gradient-to-r from-pink-400 to-purple-500 p-0 border-0 inline-flex items-center justify-center text-red-700 ml-2':
  // 'absolute top-2 rounded-full w-10 h-10    bg-gradient-to-r from-pink-400 to-purple-500 p-0 border-0 inline-flex items-center justify-center text-red-700 ml-2'))

  // console.log(clickedColor);

// }
// function DelFavoriteIT(FAVmovie) {
  // dispatch(removeFromFavorites(FAVmovie.id))

// }



/*/*/////

useEffect(()=>{

dispatch(productsAction());

},[])
console.log(products);

// >>>get any data from store

const loaderSpinnerState = useSelector((state)=>state.loaderSpinner.loaderSpinner)
console.log(loaderSpinnerState);

  return (
    <>
      <div className="bg-slate-950	">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className=" font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
            Movie Show
          </h2>

          {!loaderSpinnerState ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative" >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <div className="relative">
                      <NavLink to={`/singleproduct/${product.id}`}>
                        <img
                          className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                          src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
                      
                          alt="dummy-image"
                        />
                      </NavLink>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <NavLink to={`/singleproduct/${product.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                        </NavLink>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.vote_average}</p>
                    
                     
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.popularity}</p>
                     <button
                          // onClick={() => {
                          //   console.log(product);
                          //   FavoriteIT(product);
                          // }}
                          // onClick={isFavorite?FavoriteIT(product):DelFavoriteIT(product.id)}
                          // className={{isFavorite?pink:clickedColor}}
                          // className={buttonColor}
                          onClick={() => {handleToggleProduct(product)}}
                            
                            // console.log(buttonColorST);}}
                          // className={isFavorite? 'buttonColor':'origin'}
                          // className={`${buttonColor}`}
                          className={ isFavorite(product.id) ? 'absolute top-2 rounded-full w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 p-0 border-0 inline-flex items-center justify-center text-red-700 ml-2'
                          :'absolute top-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2'
                          }
                          // className='absolute top-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2'
                        >
                          {/* {isFavorite1==true?
                          <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          style={{ color:'red'  }}

                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>:
                        <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        style={{ color:'black'  }}

                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                          }  */}
                          {/* { isFavorite(product.id) ?'❤️':'🖤'} */}
                      </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}

    
          <nav aria-label="Page navigation example">
            <ul className="list-style-none flex items-center justify-center	" style={{ width: "100%", height: "200px" }}>
              <li onClick={() => setPage((hh) => hh - 1)}>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 m-2 text-sm text-neutral-400 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  Previous
                </a>
              </li>
              <li onClick={() => setPage((hh) => (hh = 1))}>
                <a
                  className="relative block rounded bg-gradient-to-r m-2  from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500... px-3 py-1.5 text-sm text-neutral-400 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  1
                </a>
              </li>

              <li onClick={() => setPage((hh) => (hh = 2))}>
                <a
                  className="relative block rounded bg-gradient-to-r m-2 from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ... px-3 py-1.5 text-sm text-neutral-400 transition-all duration-300 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  2
                </a>
              </li>

              <li onClick={() => setPage((hh) => (hh = 3))}>
                <a
                  className="relative block rounded bg-gradient-to-r m-2 from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ... px-3 py-1.5 text-sm text-neutral-400 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  3
                </a>
              </li>

              <li onClick={() => setPage((hh) => (hh = 4))}>
                <a
                  className="relative block rounded bg-gradient-to-r m-2 from-indigo-500 via-purple-500 to-pink-500  hover:from-pink-500 hover:to-yellow-500 ...     px-3 py-1.5 text-sm text-neutral-400 transition-all duration-300 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  4
                </a>
              </li>

              <li onClick={() => setPage((hh) => hh + 1)}>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 m-2 text-sm text-neutral-400 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

// 2)By using Loader==get API////must by ASYNC & AWAIT
export const loaderProdList= async (...x)=>{
console.log(x);

        try {
            var res = await axiosInstance.get('/movie/popular',{
              // params:{
              //        page:b,
              //     }
        });
            console.log(res.data.results);
            // setProducts(res.data.results);
            return res.data.results;
            
          } catch (err) {
            console.log(err);
          }          
}




  