import React from 'react';
import { Link } from 'react-router-dom'

// constants
import * as ROUTES from '../../constants/routes'

// components
import LanguagePicker from './LanguagePicker/LanguagePicker';
import Navigation from './Navigation/Navigation';

// styles
import styles from './Header.module.css';


///////////////////////////// Header //////////////////////////////////////////
//////////////////////////////////////////////////////////////// <header /> ///

interface HeaderPropTypes {
  language: string,
};

const Header = ({ language }: HeaderPropTypes) => (
  <header className={styles.header} >
    <div className={styles.topBar}>
      <Link className={styles.text} to={ROUTES.LANDING}>Anno 1800 Rechner</Link>
      <LanguagePicker language={language} />
    </div>
    <Navigation language={language} />
  </header>
)


export default Header;