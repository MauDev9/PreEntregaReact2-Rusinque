import React, {useRef,useEffect, useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default function Navbar() {

    return (
    <header>
    <nav  id='nav'>
      <h1 id='brand'>Mercado Liebre</h1>
        <ul id='nav-list'>
            <li className='list-item'><Link to='/home'>Home</Link></li>
            <li className='list-item'><Link to='/products'>Products</Link></li>
            <li className='list-item'><Link to='/about'>About</Link></li>
        </ul>
        <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Categorias
        </Dropdown.Toggle>

        <Dropdown.Menu id="categorys">
          <Link to="/products/camionetas"><Dropdown.Item href="#/action-1" active>
            Camionetas
          </Dropdown.Item></Link>
          <Link to="/products/deportivos"><Dropdown.Item className='pepepe'>Deportivos</Dropdown.Item></Link>
          <Link><Dropdown.Item >Motos</Dropdown.Item></Link>
          <Link><Dropdown.Item >Otro tipo</Dropdown.Item></Link>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
    </header>
    )
}

