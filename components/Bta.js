import React from 'react'
import Image from 'next/image'

import bookshelf from '../public/bookshelf-spot.png'


const Bta = ({title}) => {
  return (
    <div  className='flex flex-col md:flex-row md:justify-between my-14 mt-36 '>
        <Image src={bookshelf} className="md:hidden flex-grow"  alt="image"/>
        {/* left */}
       <div className='space-y-4'>
        <h1 className='text-4xl font-bold '>Built for endless uses.<br/> Across all teams.</h1>
        <p className='font-semibold text-gray-500 text-[18px]'>Notion solves problems common and unique to<br/> every team. These are just a few.</p>
        <button className='border bg-red-500 px-4 py-2 rounded-md font-bold text-white hover:shadow-xl'>{title}</button>
       </div>
        {/* right on desktop */}
       <Image src={bookshelf} height={300} width={300}  className="md:flex hidden"   alt="image"/>


    </div>
  )
}

export default Bta