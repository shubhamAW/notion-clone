import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import sitting from '../public/sitting.png'

const TryNotion = () => {
  return (
    <div className='py-20 flex flex-col items-center relative space-y-3 border-b-2 border-t-2  pb-40'>
        {/* imag */}
        <Image src={sitting} alt="image" width={180} height={200}   className='z-[-2] absolute bottom-0 left-0  md:bottom-5 md:left-5 '/>
        {/* notion log */}
        <Image src={logo} alt='logo' width={100} height={100} className="cursor-pointer " />
        {/* header */}
        <h1 className='text-5xl font-bold text-center '>Try Notion Today</h1>
        {/* description */}
        <p className=' text-gray-600 text-center text-lg' >Get started Free <br/> Add your whole team as your needs grow.</p>
        {/* button */}
        <button className='py-2 px-5  rounded-md hover:shadow-xl shadow-md bg-red-400 hover:bg-red-500  text-white font-semibold'>Get Notion Free</button>
        {/* query */}
        <p className='text-gray-500'>On Big Team? <a href="#" className='underline '>Contact sale</a></p>
    </div>
  )
}

export default TryNotion