
import { Fragment, useContext, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { CiHeart } from "react-icons/ci";
import { languageContext } from '../../context/language'
// import { updateSearchResults, updateSearchTerm } from '../../store/slices/search'

import React from 'react';
import {
  setSearchQuery,
  filterProducts,
  productsAction,
} from './../../store/store';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  var {language, setlanguage} =useContext(languageContext)
/////
const favoriteArray= useSelector((state)=>state.Favorites.Favorites)
 const length= favoriteArray.length;
console.log(favoriteArray);
const navigation = [
  { name:    `${(language=='en')?'Home':'الرئيسيه'}`, to: '/', current: true },
  { name: `${(language=='en')?'Movies':'الافلام'}` , to: '/products', current: false },
  // { name: 'Favorites', to: '/favorites', current: false },
    { name:`${(language=='en')?`Favorites${length} `:`المفضلة${length} `}` , to: '/favorites', current: false },

  { name:`${(language=='en')?'login':'تسجيل الدخول'}`, to: '/login', current: false },
  { name: `${(language=='en')?'register':'التسجيل'}`, to: '/Register', current: false },
  { name: `${(language=='en')?'logout':'تسجيل الخروج'}`, to: '/logout', current: false },

]

// search
  // const dispatch = useDispatch();
  // // const searchTerm = useSelector((state) => state.search.searchTerm);
  // var searchTerm = useSelector((state) => state.search.searchTerm);
  var products=   useSelector((state)=>state.products.products)
  console.log(products);
  // // searchTerm=products;
  // const handleSearch = (event) => {
  //   const searchTerm = event.target.value;
  //   dispatch(updateSearchTerm(searchTerm));

  //   // Perform filtering logic and update search results
  //   const filteredResults = // Your filtering logic here
  //   dispatch(updateSearchResults(filteredResults));}
///***////search */


// const SearchProduct = () => {
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();

  console.log(searchQuery);
  console.log(filteredProducts);


  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterProducts());
  }, [searchQuery, dispatch]);

  const handleSearchQueryChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  // }
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                 <div>
            </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >

                              {item.name}
                  
                   
                      </NavLink>
               ))}
                  </div>

                </div>
              </div>

{/* SEARCH */}
              <div className="relative...	">
  <div className=" relative pointer-events-auto ...">
    <svg className=" absolute inset-y-0 right-0  text-slate-400 h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  </div>
  <div>
      {/* <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} className="bg-slate-700  text-slate-100	" /> */}
   
   
      <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search for a product"
      />

      {/* Render the filtered search results */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
   
    </div>
  {/* <input type="text" placeholder="Search" className="bg-slate-700  text-slate-100	"/> */}
</div>


              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button

                onClick={()=>{
                  setlanguage((language=='en')?'ar':'en')
                }}
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {language}
                  {/* <span className="absolute -inset-1.5" /> */}
                  {/* <span className="sr-only">View notifications</span> */}
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>
</div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKu0q8RYeYnmnizuZFU_c3w7Bv39PABV5fg&usqp=CAU"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>






          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  )
        }

   