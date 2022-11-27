import React from 'react'
import Image from 'next/image'
// import heroImage from '../public/heroImage.avif'
import spotteamup from '../public/spot-team-up.png'
import heroimg from '../public/heroimg.png'

const Hero = () => {
  return (
   <div className='flex flex-col md:flex-row mt-5 justify-between  p-7 '>
        <Image src={heroimg} width={350} height={350}  alt='image'className='md:hidden'/>
        {/* left side text div */}
        <div className=' basis-2/3 space-y-2 p-5 '>
            <h1 className='text-6xl font-bold'>One workSpace .<br/> Every Team.</h1>
            <p>Were more than or table customization <br/> Notion to work the way you do.</p>
            <button className='border bg-red-500 px-4 py-2 rounded-md font-bold text-white hover:shadow-xl'>Get Notion Free</button>
            <p>Trusted by team at </p>
            <div className='flex flex-wrap'>
                <div>hello</div>
                <div>Hello</div>
                <div>hello</div>
                <div>hello</div>
            </div>
        </div>
        {/* right side image visible on md */}
        <Image src={heroimg} width={700} height={700}  alt='image' objectPosition='contain' className=' hidden md:flex flex-grow'/>
   </div>
  )
}

export default Hero