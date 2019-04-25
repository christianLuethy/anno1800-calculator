import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

// constants
import parameters from '../../constants/parameters';

// components
import World from './World';

// hooks
import useAppContext from '../../hooks/useAppContext'

//styles
import styles from './Population.module.css';


///////////////////////////// Population Form /////////////////////////////////
//////////////////////////////////////////////////////////////////// <ul /> ///

interface PopulationFormPropTypes {
  language: string,
  neededProducts: string[],
}

const PopulationForm = ({ language, neededProducts   }: PopulationFormPropTypes) => {
  const { populationDispatch } = useAppContext();
  
  const worlds = Object.keys(parameters.population).map((key: string) => 
      <World key={key} language={language} world={parameters.population[key]} />
  );

  return (
    <div className={styles.populationBar}>
      <ul className={styles.population}>
        <li className={styles.resetButton} onClick={() => populationDispatch({ type: 'POPULATION_RESET'})} >
          <AnimatedX />
        </li>
        {worlds}
        <li className={styles.filler} >
          {neededProducts.length === 0 && <p className={styles.instructions}>Start by filling in your population numbers.</p>}
        </li>
      </ul>
    </div>
  )
}; 

export default PopulationForm;


const AnimatedX = () => {
  const [enter, toggle] = useState(false);
  const { d } = useSpring({d: enter ? `M -10 -10 L 10 10 M -10 10 L 10 -10` : `M -6 -6 L 6 6 M -6 6 L 6 -6`})
  return (
    <svg className={styles.x}  viewBox={`-18 -18 36 36`} onMouseEnter={() => toggle(!enter)} onMouseLeave={() => toggle(!enter)}>
      <animated.path 
        stroke="#524765" 
        strokeWidth="1"
        fill="none" 
        d={d}
      />
    </svg>
  )
}