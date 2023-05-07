import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const {register,handleSubmit}=useForm();
    const navigate=useNavigate();
  
  
    const createEmployee = ()=>{
  
        navigate("/")
    }
    return (
      <div>
        <form className='mt-8' onSubmit={handleSubmit(createEmployee)}>
          <div className="space-y-5">
            <div>
              <label htmlFor="name"
              className='text-base font-medium text-gray-900 dark:text-gray-200'>{" "}
               Name {" "}</label>
              <div className="mt-2 5">
                <input type="text"
                className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
                placeholder='Enter Your Full Name'
                {...register("name")} />
              </div>
            </div> 
            <div>
              <label htmlFor="email"
              className='text-base font-medium text-gray-900 dark:text-gray-200'>{" "}
              Email Id{" "}</label>
              <div className='mt-2.5'>
                <input type="email"
                 className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
                placeholder='Enter your Email'
                {...register("email")} />
              </div>
  
              </div> 
              <div>
                <label htmlFor="title"
                className='text-base font-medium text-gray-900 dark:text-gray-200'>{" "}
                Mobile Number{" "}</label>
                <div className='mt-2.5'>
                  <input type="text"
                   className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
                   placeholder='Enter your Mobile Number'
                   {...register("title")}/>
  
                </div>
              </div>
  
              <div>
                <label htmlFor="department"
                className='text-base font-medium text-gray-900 dark:text-gray-200'>{" "}
                City Name{" "}</label>
                <div className='mt-2.5'>
                  <input type="text"
                   className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
                   placeholder='Enter your City Name'
                   {...register("department")}/>
  
                </div>
              </div>
  
              <div>
                <label htmlFor="role"
                className='text-base font-medium text-gray-900 dark:text-gray-200'>{" "}
                State{" "}</label>
                <div className='mt-2.5'>
                  <input type="text"
                   className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
                   placeholder='Enter your State'
                   {...register("role")}/>
  
                </div>
              </div>
              <div>
                <button
                className='inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500'
                type='submit'
                >Create User
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
                </button>
              </div>
          </div>
        </form>
      </div>
    )
}

export default Form