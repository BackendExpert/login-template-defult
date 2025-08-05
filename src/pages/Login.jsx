import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa6'

const Login = () => {
    return (
        <div className='xl:px-48 md:px-12 px-4 md:py-32'>
            <div className="flex justify-between">
                <div className="">
                    <div className="text-violet-500">
                        <h1 className="text-4xl font-bold">Welcome back to</h1>
                        <p className="text-3xl font-semibold ">ERP System</p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-gray-500 font-semibold">ABC Institute</h1>
                    </div>
                    <div className="mt-16">
                        <h1 className="">For any queries, contact <a href="" className='text-violet-700 duration-500 hover:underline'>erp.support@example.com</a></h1>
                        
                        <div className="">
                            <div className="flex">
                                <div className="">
                                    <FaGoogle className='h-6 w-auto'/>
                                </div>
                                <div className="">
                                    <FaFacebook className='h-6 w-auto'/>
                                </div>
                                <div className="">
                                    <FaWhatsapp className='h-6 w-auto'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login