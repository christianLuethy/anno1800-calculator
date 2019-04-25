import React from 'react';

// constants
import localText from '../../constants/localText';

// components
import Product from './Product';

// styles
import styles from './Needs.module.css';


///////////////////////////// Demands /////////////////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface NeedsPropTypes {
  language: string,
  needs: {
    basic: {[key: string]: number},
    luxury: {[key: string]: number},
    [key: string]: {[key: string]: number},
  },
  neededProducts: string[],
}


const Needs = ({ language, needs, neededProducts }: NeedsPropTypes): any => {
  
  const needDivs = Object.keys(needs).map((type: string) => {
    const needsOfType = Object.keys(needs[type]).map((productID: string) => {

      return neededProducts.find((number) => number === productID) 
        ? <Product 
            key={productID} 
            language={language} 
            productID={productID} 
            productNeed={needs[type][productID]}
          /> 
        : null
    })

    return (
      <div key={type}>
        <h2 className={styles.typeTitle} >{type === 'basic' ? localText.basicNeed[language] : localText.luxuryNeeds[language]} </h2>
        <div className={styles.buildingList} >
          {needsOfType}
        </div> 
      </div>
    )
  });

  return <div className={styles.needs}>{needDivs}</div>
}

export default Needs

