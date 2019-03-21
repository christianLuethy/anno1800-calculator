import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { PopulationContext } from '../App/App';

// constants
import localText from '../../constants/localText';
import * as ROUTES from '../../constants/routes';

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
      <Switch>
        <Route path={ROUTES.PRODUCTION} render={() => <div>production chain options</div>} />
        <Route path={ROUTES.NEEDS} render={() => (
          <div>
            <h1>{localText.options[language]}</h1>
            <div className={showChainGlobal ? styles.activeButton : styles.button} onClick={() => appDispatch({type: 'TOGGLE_CHAIN'})}>{localText.productionChains[language]}</div>
          </div>
        )} />
      </Switch>
    </animated.div>
  ))
}

export default Options;

