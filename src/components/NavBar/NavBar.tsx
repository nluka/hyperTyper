// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../index.css';
import './NavBar.css';

const NavBar = () => {
  const navItemsUl = document.getElementById('navItemsUl');
  const expandNavbarButtonLines = document.querySelectorAll('.expand-navbar-button-line');

  const handleExpandNavbarButtonClick = () => {
    navItemsUl?.toggleAttribute('data-is-visible');
    expandNavbarButtonLines.forEach((buttonLine) => {
      buttonLine.classList.toggle('rotated');
    });
  };

  return (
    <nav>
      <div className='site-name'>hyperTyper</div>
      <button id='expandNavbarButton' onClick={handleExpandNavbarButtonClick}>
        <span className='expand-navbar-button-line'></span>
        <span className='expand-navbar-button-line'></span>
      </button>
      <ul id='navItemsUl'>
        <li className='nav-item'>
          <Link className='nav-link' to='/practice'>
            Practice
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/statistics'>
            Statistics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
