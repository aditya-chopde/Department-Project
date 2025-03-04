import React from 'react'

const Hero = () => {
  return (
    <div className='my-28 flex flex-row justify-center items-center'>
      <div className='w-[650px]'>
        <h1 className='text-[50px] font-bold'>Department of Computer Engineering</h1>
        <p>Government Polytechnic Nagpur</p>
      </div>
      <div className=''>
        <img src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww" alt="random_image" className='w-80'/>
      </div>
    </div>
  )
}

export default Hero
