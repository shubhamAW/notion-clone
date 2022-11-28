import React from 'react'
import Image from 'next/image'




const Bta = ({title , desc, btn ,image }) => {
  return (
    <div  className='flex flex-col md:flex-row md:justify-between my-14 mt-20 mb-20 '>
        <Image src={image} className="md:hidden flex-grow"  alt="image"/>
        {/* left */}
       <div className='space-y-4  md:w-1/2'>
        <h1 className='text-4xl font-bold '>{title}</h1>
        <p className='font-semibold text-gray-500 text-[18px]'>{desc}</p>
        <button className="py-2 px-5  rounded-md hover:shadow-xl shadow-md bg-red-400 hover:bg-red-500  text-white font-semibold">{btn}</button>
       </div>
        {/* right on desktop */}
       <Image src={image} height={300} width={300}  className="md:flex hidden"   alt="image"/>


    </div>
  )
}

export default Bta