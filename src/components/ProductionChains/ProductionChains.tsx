import React from 'react';

// constants
import parameters from '../../constants/parameters';

// components

// styles
import styles from './ProductionChains.module.css';


///////////////////////////// Production Chains ///////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface ProductChainsPropTypes {
  language: string
}

const ProductionChains = ({ language }: ProductChainsPropTypes) => (
  <div className={styles.productionChains}>
    <h1>Production Chains</h1>
  </div>
)

export default ProductionChains