import React, { useContext } from 'react'
import { PopulationContext } from '../../App/App';

// constants
import parameters from '../../../constants/parameters'

// components

// styles
import styles from './LanguagePicker.module.css';

///////////////////////////// Language Picker /////////////////////////////////
////////////////////////////////////////////////////////////////// <form /> ///


interface LanguagePickerPropTypes {
  language: string,
}

const LanguagePicker = ({ language }: LanguagePickerPropTypes) => { 
  const { appDispatch } = useContext(PopulationContext);
  return (
    <form className={styles.form} >
      <label className={styles.label} >Language: 
        <select className={styles.select} value={language} onChange={(e) => appDispatch({ type: 'LANGUAGE_CHANGE', language: e.target.value })} >
          {parameters.languages.map((language: any) => {
            return (
              <option key={language} value={language}>{language}</option>
            )
          })}
        </select>
      </label>
    </form>
  )
}

export default LanguagePicker