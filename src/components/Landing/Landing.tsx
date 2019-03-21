import React from 'react';
import { Redirect } from 'react-router-dom';

// constants

// components

// styles
import styles from './Landing.module.css'

///////////////////////////// Landing Page ////////////////////////////////////
//////////////////////////////////////////////////////////////////// <h1 /> ///

const Landing = () => (
  <div className={styles.landing}>
    <Redirect to='/population-needs' /> 
    <h1>Home</h1>
  </div>
)

export default Landing