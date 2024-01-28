import React, { useRef, useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
export default function Navbar() {
  const menu = useRef(null);

  const toggleMenuVisibility = () => {
    if (menu.current.className === 'show') {
      menu.current.className = 'hide';
    } else {
      menu.current.className = 'show';
    }
  }
  return (
    <header>
      <nav id='nav'>
        <h1 id='brand'>Mercado Liebre</h1>
        <ul id='nav-list'>
          <li className='list-item'><Link to='/home'>Home</Link></li>
          <li className='list-item'><Link to='/products'>Products</Link></li>
        </ul>

        <div>
          <button onClick={toggleMenuVisibility} id="open">Categorys</button>
          <div ref={menu} className='hidden'>
            <Link to="/products/camionetas"><p>Camionetas</p></Link>
            <Link to="/products/deportivos"><p>Deportivos</p></Link>
            <Link to="/products/motos"><p>Motocicletas</p></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

