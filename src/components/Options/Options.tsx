import React, { useContext } from 'react';
import { animated, useTransition } from 'react-spring';
import { PopulationContext } from '../App/App';

// constants

// components

// styles
import styles from './Options.module.css';

///////////////////////////// Options /////////////////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface OptionsPropTypes {
  showOptions: boolean
}

const Options = ({showOptions}: OptionsPropTypes): any => { 
  const { appDispatch, showChainGlobal } = useContext(PopulationContext)

  const transitions = useTransition(showOptions, null, {
    from: { width: '0px' },
    enter: { width: '270px' },
    leave: { width: '0px' },
  })

  return transitions.map(({ item, key, props }) => (item &&
    <animated.div key={key} style={props} className={styles.sideBar}>
      <h1>Options</h1>
      <div className={showChainGlobal ? styles.activeButton : styles.button} onClick={() => appDispatch({type: 'TOGGLE_CHAIN'})}>Production Chains</div>
    </animated.div>
  ))
}

export default Options;

