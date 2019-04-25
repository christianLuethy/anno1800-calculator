import React, { useState, useEffect } from 'react';

// constants
import { ProductionBuildingType } from '../../constants/parameters';

// components
import Product from './Product';
import CapacityBar from './CapacityBar';

// hooks
import useAppContext from '../../hooks/useAppContext'

// styles
import styles from './Needs.module.css'


///////////////////////////// Production Building /////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface ProductionBuildingPropTypes {
  language: string,
  building: ProductionBuildingType,
  isAlternative: boolean,
  isEndProducer: boolean,
  productNeed: number,
}

const ProductionBuilding = ({ building, isAlternative, isEndProducer, language, productNeed }: ProductionBuildingPropTypes) => {
  ///// state //////////
  const [showChain, toggleShowchain ] = useState(false);

  //// context //////////
  const { options, showChainGlobal } = useAppContext();

  let neededProducts: JSX.Element[] | null = null;
    
  if (building.needs !== null) {
    neededProducts = building.needs.map((productID: string) => {
      return <Product 
        key={productID} 
        language={language} 
        productID={productID} 
        productNeed={productNeed} 
      />
    });
  }

  
  

  const plusMinus = isEndProducer ? options[building.id].increaseDecrease : 1;
  const double = isEndProducer ? options[building.id].withElectricity ? 2 : 1 : 1;
  const multiplyer = Math.sign(plusMinus) === 0 ? 1 : 1 + plusMinus / 100;
  const perMinute = 60 / building.time * double * multiplyer;
  const numberOfBuildings: number = Math.ceil(productNeed / perMinute) || 0;
  const productNeedRest: number = productNeed / perMinute - (numberOfBuildings -1) || 0;
  // workloadAll shows at which capacity all the buildings combined run
  const workloadAll = Math.round(100 / numberOfBuildings * (productNeed / (60 / building.time))) || 0;
  // workloadOne shows at which capacity the last building runs if all other buildings where at 100% capacity
  // it is used to change the color of the capacity bar
  const workloadOne: number = Math.round(100 * productNeedRest) || 0;
  const details = neededProducts 
    ? showChain 
      ? <div className={styles.subBuildingList}>{neededProducts}</div> 
      : null 
    : null;
  const numberStyle = workloadOne < 75 
    ? styles.green 
    : workloadOne < 90 
      ? styles.yellow 
      : styles.red;

  ///// effects //////////
  useEffect(() => { !isEndProducer && toggleShowchain(true) }, [])

  useEffect(() => {
    if (showChain != showChainGlobal) {
      toggleShowchain(showChainGlobal)
    }
  }, [showChainGlobal]) 
  
  return (
    <div className={`${styles.building} ${double === 2 && styles.eBuilding}`} onClick={() => isEndProducer && toggleShowchain(!showChain)}>
      <div className={styles.buildingData}>
        {isEndProducer && <p className={styles.absoluteNeed}>{productNeed.toFixed(2)}</p>}
        {isAlternative && <p className={styles.textOr}>or</p>}
        <div className={numberStyle}>{numberOfBuildings}x</div>
        <img className={styles.icon} src={process.env.PUBLIC_URL + building.icon} />
        {/* <CapacityBar barWidth={6} barHeight={48} workloadAll={workloadAll} workloadOne={workloadOne} /> */}
      </div>
      {details}
    </div>
  )
}

export default ProductionBuilding;