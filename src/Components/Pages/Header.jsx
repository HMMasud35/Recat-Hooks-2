import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='fixed w-full dark:bg-gray-800 z-1'>
        <div className="container">
          <div className='w-full flex items-center justify-between p-2'>
            <div>
              <a className='text-6xl text-amber-700 font-extrabold' href="">
                <h2>MK</h2>
              </a>
            </div>
            <div>
              <ul className='flex'>
                <li className='item after'><a href="">Home</a></li>
                <li className='item after'><a href="">Service</a></li>
                <li className='item after'><a href="">Blog</a></li>
                <li className='item after'><a href="">About</a></li>
                <li className='item after'><a href="">Contact</a></li>
                <button className='item border-2 ml-3'>Login</button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header