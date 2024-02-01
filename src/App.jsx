// eslint-disable-next-line no-unused-vars
import React from 'react'


function App() {
  return (
    <>
    <div className='w-full h-screen bg-Dark-blue flex items-center justify-center font-Outfit'>
      <div className='w-96 text-center bg-white rounded-2xl p-5'>
        <img src="./src/assets/image-qr-code.png" alt="qr code" className='w-full h-auto rounded-lg' />
        <h1 className='text-xl font-extrabold my-5 px-1 text-Dark-blue'>Improve your front-end skills by building projects</h1>
        <p className='text-xs text-Grayish-blue px-7 mb-3'>Scan the OR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
    </>
  )
}

export default App