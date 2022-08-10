import React from 'react';
import classes from './Navbar.module.css';
import logo from '../assets/airbnb1.png';

const Navbar = () => {
  return (
    <nav>
      <img className={classes.navlogo} src={logo} alt="airbnb logo"></img>
    </nav>
  );
};

export default Navbar;
