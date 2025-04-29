import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className='w-full flex items-center justify-between'>
            <div>
              <a className='text-3xl text-amber-700 font-extrabold' href="">
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