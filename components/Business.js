import React from 'react'
import Image from 'next/image'

const Business = ({image1 , image2 ,title , desc}) => {
  return (
    <div className='flex flex-col md:flex-row  md:justify-between mt-20'>
        {/* larger image */}
        <Image src={image1} width={500} height={500} className="basis-2/3 rounded-xl shadow-md hover:shadow-xl" alt='image' />
        {/* smaller image & description */}
       <div className='basis-1/3 md:ml-16 md:pt-20 mt-8'>
            <Image src={image2} width={130} height={130}  alt='image' />
            <h1 className='text-3xl font-bold mt-5'>{title}</h1>
            <p className="text-gray-600">{desc}</p>
       </div>
       

    </div>
  )
}

export default Business