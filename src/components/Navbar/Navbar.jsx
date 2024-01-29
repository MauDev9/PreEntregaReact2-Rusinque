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
        <h1 id='brand'>Rusinq's</h1>
        <ul id='nav-list'>
          <li className='list-item'><Link to='/home'>Home</Link></li>
        </ul>
        <div>
          <button onClick={toggleMenuVisibility} id="open">Categorys</button>
          <div ref={menu} className='hidden'>
            <Link to="/products/gorras"><p>Gorras</p></Link>
            <Link to="/products/remeras"><p>Remeras</p></Link>
            <Link to="/products/lentes"><p>Lentes</p></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

