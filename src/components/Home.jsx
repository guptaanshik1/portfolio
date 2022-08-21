import React from 'react'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-blend-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
            <p className="text-[#fff]">Hi, I am</p>
            <h1 className="font-bold text-4xl sm:text-5xl text-center">Anshik Gupta</h1>
            <h2 className='font-bold sm:text-3xl text-center'>Backend Engineer</h2>
        </div>
    </div>
  )
}

export default Home