import React from 'react';
import { NavLink } from 'react-router-dom'

// constants
import * as ROUTES from '../../../constants/routes';
import localText from '../../../constants/localText';

// components

// hooks
import useAppContext from '../../../hooks/useAppContext'

// styles
import styles from './Navigation.module.css'


///////////////////////////// Navigation //////////////////////////////////////
/////////////////////////////////////////////////////////////////// <nav /> ///

interface NavigationPropTypes {
    language: string,
}


const Navigation = ({ language }: NavigationPropTypes) => { 
  const { showOptions, appDispatch } = useAppContext()

  return (
    <nav className={styles.navBar}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <NavLink className={styles.link} activeClassName={styles.active} to={ROUTES.NEEDS}>{localText.needs[language]}</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.link} activeClassName={styles.active} to={ROUTES.PRODUCTION}>{localText.productionChains[language]}</NavLink>
        </li>
        <li className={styles.filler} />
        <li className={styles.navItem} onClick={() => appDispatch({type: 'TOGGLE_OPTIONS'})}>
          <p className={`${styles.link} ${showOptions && styles.active}`}>{localText.options[language]}</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation