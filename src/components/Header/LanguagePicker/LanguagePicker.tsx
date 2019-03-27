import React from 'react'

// constants
import parameters from '../../../constants/parameters'
import localText from '../../../constants/localText';

// components

// hooks
import useAppContext from '../../../hooks/useAppContext'

// styles
import styles from './LanguagePicker.module.css';

///////////////////////////// Language Picker /////////////////////////////////
////////////////////////////////////////////////////////////////// <form /> ///


interface LanguagePickerPropTypes {
  language: string,
}

const LanguagePicker = ({ language }: LanguagePickerPropTypes) => { 
  const { appDispatch } = useAppContext();
  return (
    <form className={styles.form} >
      <label className={styles.label} >{localText.language[language]}: 
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