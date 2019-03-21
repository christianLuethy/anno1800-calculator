import React, { useContext } from 'react';
import { PopulationContext } from '../App/App';

// constants
import { SocialClassType } from '../../constants/parameters';

// components

//styles
import styles from './Population.module.css';


///////////////////////////// Social Class ////////////////////////////////////
//////////////////////////////////////////////////////////////////// <li /> ///

interface SocialClassPropTypes {
  language: string,
  socialClass: SocialClassType,
}

const SocialClass = ({ socialClass }: SocialClassPropTypes) => {
  const { population, populationDispatch } = useContext(PopulationContext);
  let inputField: HTMLInputElement | null;
  
  const handleChange = (value: any) => {
    if (!isNaN(value)) {
      value = value === '' ? 0 : value
      populationDispatch({ type: 'POPULATION_CHANGE', id: socialClass.id, number: Number.parseInt(value)})
    }
  }

  return (
    <li className={styles.socialClass}>
      <img 
        className={styles.icon} 
        src={process.env.PUBLIC_URL + socialClass.icon} 
        onClick={() => {inputField && inputField.focus()}}
      />
      <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
        <input 
          className={styles.input} 
          min="0" 
          onChange={(event) => handleChange(event.target.value)} 
          onFocus={(event) => event.target.select()} 
          ref={(r) => inputField = r}
          type="text" 
          value={population[socialClass.id]} 
        />
      </form>   
    </li>
  )
}

export default SocialClass;