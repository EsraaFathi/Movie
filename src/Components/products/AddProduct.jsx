import React from 'react';
import { Form } from 'react-router-dom';


export default function AddProduct() {


  return (
    <>
    {/* handle form using Action features  */}
    <Form method='Post'>

    <div className="mt-4">
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  User Name
                </label>

                <div className="flex flex-col items-start">
                  <input
                    id="userName"
                    type="text"
                    name="username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                   
                  />

                  
                </div>
              </div>

    </Form>
    </>
  );
}
