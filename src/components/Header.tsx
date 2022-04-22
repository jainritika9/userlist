import React from 'react'
function Header() {
  return (
    <div className='text-3xl content-between grid md:grid-cols-2 gap-12 
    bg-gradient-to-r from-cyan-500 to-blue-500 '>
        <div>
            <p className='text-6xl p-20 text-white  lg:text-8xl '>User Listing Application</p>
        </div>
        <div>
            <img src='./12.png' alt='' width='500' height='500'/>
        </div>
    </div>
  )
}

export default Header
