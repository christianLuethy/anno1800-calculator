import React, { useContext, useState, useEffect } from 'react';
import { PopulationContext } from '../App/App';

// constants
import parameters from '../../constants/parameters';

// components
import Product from './Product';
import CapacityBar from './CapacityBar';

// styles
import styles from './Needs.module.css'


///////////////////////////// Production Building /////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface ProductionBuildingPropTypes {
  language: string,
  buildingID: number,
  isAlternative: boolean,
  isEndProducer: boolean,
  productNeed: number,
}

const ProductionBuilding = ({ buildingID, isAlternative, isEndProducer, language, productNeed }: ProductionBuildingPropTypes) => {
  ///// state //////////
  const [showChain, toggleShowchain ] = useState(false);

  //// context //////////
  const { options, showChainGlobal } = useContext(PopulationContext);


  

  const building = parameters.buildings.production[buildingID];
  const neededProducts: JSX.Element[] | null = building 
    ? building.needs 
      ? building.needs.map((productID: number) => {
        return <Product 
          key={productID} 
          language={language} 
          productID={productID} 
          productNeed={productNeed} 
        />}) 
      : null 
    : null;

  const plusMinus = isEndProducer ? options[buildingID].increaseDecrease : 1;
  const double = isEndProducer ? options[buildingID].withElectricity ? 2 : 1 : 1;
  const multiplyer = Math.sign(plusMinus) === 0 ? 1 : 1 + plusMinus / 100;
  const perMinute = building.perMinute * double * multiplyer;
  const numberOfBuildings: number = Math.ceil(productNeed / perMinute) || 0;
  const productNeedRest: number = productNeed / perMinute - (numberOfBuildings -1) || 0;
  // workloadAll shows at which capacity all the buildings combined run
  const workloadAll = Math.round(100 / numberOfBuildings * (productNeed / building.perMinute)) || 0;
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
  
  return building
    ? <div className={`${styles.building} ${double === 2 && styles.eBuilding}`} onClick={() => isEndProducer && toggleShowchain(!showChain)}>
        <div className={styles.buildingData}>
          {isAlternative && <p className={styles.textOr}>or</p>}
          <div className={numberStyle}>{numberOfBuildings}x</div>
          <img className={styles.icon} src={process.env.PUBLIC_URL + building.icon} />
          {/* <CapacityBar barWidth={6} barHeight={48} workloadAll={workloadAll} workloadOne={workloadOne} /> */}
        </div>
        {details}
      </div>
    : <div>No Building with id: {buildingID} => needs to be checked</div>
}

export default ProductionBuilding;