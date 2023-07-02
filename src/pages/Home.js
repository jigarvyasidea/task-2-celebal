import React from 'react'
import logo from "../assets/Logo.png"

function Home() {
  return (
    <div className='flex justify-center items-center text-white text-3xl h-80 h-full'>  {/*h-full is compulsory here without this Text not comes in center*/}
       Welcome To 
 <img className='w-50 h-30' src={logo}/ >
    </div>
  )
}

export default Home
