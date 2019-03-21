import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { PopulationContext } from '../../App/App';

// constants
import * as ROUTES from '../../../constants/routes'

// components

// styles
import styles from './Navigation.module.css'


///////////////////////////// Navigation //////////////////////////////////////
/////////////////////////////////////////////////////////////////// <nav /> ///

interface NavigationPropTypes {
    language: string,
}

const Navigation = ({ language }: NavigationPropTypes) => { 
  const { showOptions, appDispatch } = useContext(PopulationContext)

  return (
    <nav className={styles.navBar}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <NavLink className={styles.link} activeClassName={styles.active} to={ROUTES.NEEDS}>Needs</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.link} activeClassName={styles.active} to={ROUTES.PRODUCTION}>Production Chains</NavLink>
        </li>
        <li className={styles.filler} />
        <li className={styles.navItem} onClick={() => appDispatch({type: 'TOGGLE_OPTIONS'})}>
          <p className={`${styles.link} ${showOptions && styles.active}`}>Options</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation