import React from 'react'
import Image from 'next/image'




const Bta = ({title , desc, btn ,image }) => {
  return (
    <div  className='flex flex-col md:flex-row md:justify-between my-14 mt-36 '>
        <Image src={image} className="md:hidden flex-grow"  alt="image"/>
        {/* left */}
       <div className='space-y-4  md:w-1/2'>
        <h1 className='text-4xl font-bold '>{title}</h1>
        <p className='font-semibold text-gray-500 text-[18px]'>{desc}</p>
        <button className={`border bg-red-400  px-4 py-2 rounded-md font-bold text-white hover:shadow-xl`}>{btn}</button>
       </div>
        {/* right on desktop */}
       <Image src={image} height={300} width={300}  className="md:flex hidden"   alt="image"/>


    </div>
  )
}

export default Bta