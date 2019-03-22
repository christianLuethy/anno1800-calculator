import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

// constants
import * as ROUTES from '../../constants/routes';

// components
import NeedsOptions from './NeedsOptions';

// styles
import styles from './Options.module.css';

///////////////////////////// Options /////////////////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface OptionsPropTypes {
  language: string,
  showOptions: boolean
}

const Options = ({language, showOptions}: OptionsPropTypes): any => { 

  const transitions = useTransition(showOptions, null, {
    from: { width: '0px' },
    enter: { width: '270px' },
    leave: { width: '0px' },
  })

  return transitions.map(({ item, key, props }) => (item &&
    <animated.div key={key} style={props} className={styles.sideBar}>
      <Switch>
        <Route path={ROUTES.PRODUCTION} render={() => <div>production chain options</div>} />
        <Route path={ROUTES.NEEDS} render={() => <NeedsOptions language={language} />} />
      </Switch>
    </animated.div>
  ))
}

export default Options;
