import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaGoogle, FaGraduationCap } from 'react-icons/fa6'

const Register = ({
    icon = FaGraduationCap,
    systemName = 'ERP System',
    Institute = 'ABC Institute',
    supportEmail = 'erp.support@example.com',
    google = '',
    facebook = '',
    whatsapp = '',
    subtext = '',
}) => {

    return (
        <div className='xl:px-48 md:px-12 px-4 md:py-32 py-20 min-h-screen bg-white'>
            <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
                <div className="w-full text-center md:text-left">
                    <div className="text-violet-500">
                        {icon && <span className="h-20 w-auto mx-auto md:mx-0 block text-violet-500">{React.createElement(icon, { className: 'h-20 w-auto mx-auto md:mx-0' })}</span>}

                        <h1 className="text-4xl font-bold mt-6">Welcome to the</h1>
                        <p className="text-3xl font-semibold mt-1">{systemName}</p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-gray-500 font-semibold">{Institute}</h1>
                    </div>
                    <div className="mt-16">
                        <h1 className="text-gray-500">
                            For any queries, contact{' '}
                            <a href="#" className='text-violet-700 hover:underline transition duration-300'>{supportEmail}</a>
                        </h1>

                        <div className="flex justify-center md:justify-start mt-4 space-x-6">
                            {!google && (
                                <a href="#">
                                    <FaGoogle className='text-violet-700 h-6 w-6 hover:scale-110 transition-transform duration-300' />
                                </a>
                            )}
                            {!facebook && (
                                <a href="#">
                                    <FaFacebook className='text-violet-700 h-6 w-6 hover:scale-110 transition-transform duration-300' />
                                </a>
                            )}
                            {!whatsapp && (
                                <a href="#">
                                    <FaWhatsapp className='text-violet-700 h-6 w-6 hover:scale-110 transition-transform duration-300' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white shadow-xl rounded-xl px-8 py-10">
                    <form action="" method="post">
                        <div className="mb-6">
                            <input
                                type="text"
                                className='
                                    w-full h-12 px-4
                                    border border-gray-300 rounded-lg
                                    focus:outline-none focus:border-violet-700
                                    placeholder-gray-400
                                    transition-all duration-300
                                    shadow-sm
                                '
                                placeholder='Enter Username'
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                className='
                                    w-full h-12 px-4
                                    border border-gray-300 rounded-lg
                                    focus:outline-none focus:border-violet-700
                                    placeholder-gray-400
                                    transition-all duration-300
                                    shadow-sm
                                '
                                placeholder='Enter Email Address'
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                className='
                                    w-full h-12 px-4
                                    border border-gray-300 rounded-lg
                                    focus:outline-none focus:border-violet-700
                                    placeholder-gray-400
                                    transition-all duration-300
                                    shadow-sm
                                '
                                placeholder='Enter Password'
                            />
                        </div>
                        <div>
                            <button className='w-full bg-violet-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-violet-800 transition duration-300 shadow-md'>
                                Create New Account
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-between mt-6 text-sm font-medium">
                        <a href="/" className='text-violet-700 hover:underline transition duration-300'>Go to Login</a>
                    </div>

                    <div className="text-gray-500 mt-6 text-center text-sm font-medium leading-relaxed">
                        {subtext || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus enim eum porro inventore officia incidunt consequatur voluptatem esse veniam aperiam commodi'}
                    </div>
                </div>
            </div>

            <div className="text-gray-500 text-center mt-16 text-sm">
                &copy; ERP System - {new Date().getFullYear()} | Developed and Engineered by{' '}
                <a className='text-violet-700 hover:underline transition duration-300' href="http://blackalphalabs.com/" target='_blank' rel="noreferrer">
                    BlackAlphaLabs
                </a>
            </div>
        </div>
    )
}

export default Register
