import React from 'react';
import classes from './Hero.module.css';
import Image from '../assets/Group77.png';

const Hero = () => {
  return (
    <main>
      <div className={classes.herocontainer}>
        <img className={classes.heroimg} src={Image} alt="pictures"></img>
      </div>
      <div className={classes.herotext}>
        <h1 className={classes.heroh1}>Online Experiences</h1>
        <p className={classes.heropara}>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  );
};

export default Hero;
