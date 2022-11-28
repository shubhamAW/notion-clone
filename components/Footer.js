import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'

const Footer = () => {
  return (
    <div className='py-5 flex flex-col md:flex-row border-b-2 pb-10 pt-10'>
       {/* logo */}
       <div className='flex space-x-2 items-start mr-20 ml-10  font-semibold tracking-tight text-xl cursor-pointer '>
            <Image src={logo} alt='logo' width={30} height={50} className="cursor-pointer " />
            <p>Notion</p>

        </div>

        {/* footer grids */}
        <div className='grid grid-cols-2 md:grid-cols-5  gap-x-10 px-5 mt-10 md:mt-0  md:px-20 flex-grow '>
                <div>
                    <h1 className='text-lg font-semibold text-gray-800'>products</h1>
                    <ul className='pl-1 text-gray-500 '>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold text-gray-800'>Notion For</h1>
                    <ul className='pl-1 text-gray-500 '>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold text-gray-800'>Resources</h1>
                    <ul className='pl-1 text-gray-500 '>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold text-gray-800'>Templates</h1>
                    <ul className='pl-1 text-gray-500 '>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold text-gray-800'>Company</h1>
                    <ul className='pl-1 text-gray-500 '>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                        <p className='hover:underline hover:text-red-400 hover:cursor-pointer'>prod1</p>
                    </ul>
                </div>
        </div>

       
    </div>
  )
}

export default Footer