import React from 'react'
import Image from 'next/image'

const Feedback = ({cmpimg , cmpname , desc , name , img , position}) => {
  return (
    <div className='border rounded-xl shadow-md hover:shadow-xl px-6 py-10'>
        {/* cmpimg cmp-name */}
        <div className='flex space-x-2 items-center'>
            <Image src={cmpimg} alt='cmpimg' width={30} height={50} className="cursor-pointer rounded-full" />
            <h1 className='text-xl font-semibold'>{cmpname}</h1>
        </div>

        {/* desc */}
        <div>
            <p className='text-md text-gray-700 px-4'>{desc}</p>
        </div>

        {/* name img position */}
        <div className='flex space-x-3 mt-3'>
            {/* img */}
            <Image src={img} alt="person img" className="rounded-full"  width={30} height={50} ></Image>
            <div>
                <h1 className='text-md font-semibold '>{name}</h1>
                <p className='text-md text-gray-600'>{position}</p>
            </div>
        </div>
    </div>
  )
}

export default Feedback