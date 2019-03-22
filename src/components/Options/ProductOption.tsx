import React, { useContext } from 'react';
import { PopulationContext } from '../App/App';

// constants
import parameters from '../../constants/parameters';

// components
import Button from '../Button/Button';

// styles
import styles from './Options.module.css';


interface ProductOptionTypes {
  buildingID: string,
};

const ProductOption = ({buildingID}: ProductOptionTypes) => {
  const { options, populationDispatch} = useContext(PopulationContext)
  const building = parameters.buildings.production[Number.parseInt(buildingID)];

  const handleChange = (value: any) => {
    populationDispatch({ type: 'INCREASE_DECREASE_CHANGE', id: buildingID, value: value})
  }

  return (
    <div className={styles.item}>
      <img className={styles.icon} src={process.env.PUBLIC_URL + building.icon} />
      <div className={styles.increaseDecrease} >
        <input 
            className={styles.input} 
            min="-100" 
            onChange={(e) => handleChange(e.target.value)} 
            onFocus={(e) => e.target.select()}
            pattern="-?[0-9]+" 
            type="text" 
            value={options[buildingID].increaseDecrease} 
          />
          <span className={styles.inputUnit}>%</span>
          <div className={styles.ticker}>
            <div onClick={() => populationDispatch({ type: 'INCREASE', id: buildingID })} className={styles.increase }>
              <svg className={styles.arrow} viewBox='0 0 12 12'>
                <path 
                  stroke="#cbbbaf" 
                  strokeWidth="1"
                  fill="none" 
                  d='M3,8 L6,4 L9,8' 
                />
              </svg>
            </div>
            <div onClick={() => populationDispatch({ type: 'DECREASE', id: buildingID })} className={styles.decrease} >
              <svg className={styles.arrow} viewBox='0 0 12 12'>
                <path 
                  stroke="#cbbbaf" 
                  strokeWidth="1"
                  fill="none" 
                  d='M3,4 L6,8 L9,4' 
                />
              </svg>
            </div>
          </div>
      </div>
      <div className={styles.electricityButton}>
        <Button condition={options[buildingID].withElectricity} onClick={() => populationDispatch({ type: 'TOGGLE_ELECTRICITY', id: buildingID })}>Electricity</Button>
      </div>
    </div>
  )
};

export default ProductOption;