import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'

const Header = () => {
  return (
    <div className='p-2 sticky top-0 w-auto h-16 shadow-sm flex  items-center justify-between'>
        {/* logo */}
        <div className='flex space-x-2 items-center font-semibold tracking-tight text-xl cursor-pointer'>
        <Image src={logo} alt='logo' width={30} height={50} className="cursor-pointer " />
        <p>Notion</p>

        </div>

       
        {/* hamberger menu only sm & mobi view */}
       <div className='md:hidden '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.25} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>

       </div>

    </div>
  )
}

export default Header