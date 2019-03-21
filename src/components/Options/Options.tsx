import React, { useContext } from 'react';
import { animated, useTransition } from 'react-spring';
import { PopulationContext } from '../App/App';

// constants
import * as localText from '../../constants/localText';

// components

// styles
import styles from './Options.module.css';

///////////////////////////// Options /////////////////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface OptionsPropTypes {
  language: string,
  showOptions: boolean
}

const Options = ({language, showOptions}: OptionsPropTypes): any => { 
  const { appDispatch, showChainGlobal } = useContext(PopulationContext)

  const transitions = useTransition(showOptions, null, {
    from: { width: '0px' },
    enter: { width: '270px' },
    leave: { width: '0px' },
  })

  return transitions.map(({ item, key, props }) => (item &&
    <animated.div key={key} style={props} className={styles.sideBar}>
      <h1>{localText.options[language]}</h1>
      <div className={showChainGlobal ? styles.activeButton : styles.button} onClick={() => appDispatch({type: 'TOGGLE_CHAIN'})}>{localText.productionChains[language]}</div>
    </animated.div>
  ))
}

export default Options;

