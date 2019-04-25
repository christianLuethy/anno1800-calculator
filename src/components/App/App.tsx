import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// constants
import * as ROUTES from '../../constants/routes';
import parameters from '../../constants/parameters';

// components
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Needs from '../Needs/Needs';
import Options from '../Options/Options';
import Population from '../Population/Population';
import ProductionChains from '../ProductionChains/ProductionChains';

// context 
import { AppContext } from '../../hooks/useAppContext'

// hooks
import useAppReducer from '../../hooks/useAppReducer';
import usePopulationReducer from '../../hooks/usePopulationReducer';

// styles
import styles from './App.module.css';

console.log(parameters)



///////////////////////////// App /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///


const App = () => {
  const [{ language, showChainGlobal, showOptions }, appDispatch] = useAppReducer();
  const [{ needs, neededProducts, options, population }, populationDispatch] = usePopulationReducer()
  
  // retrieve population data from the local storage
  useEffect(() => {
    const cachedPopulationState = localStorage.getItem('populationState')
    const lang = parameters.languages.find((l) => l === navigator.language) ? navigator.language : 'en';
    if (cachedPopulationState) {
      const populationState = JSON.parse(cachedPopulationState);

      // old data structure that may still be in local store gets reset
      if (populationState.population.hasOwnProperty("w1c1b000p00")) {
        populationDispatch({ type: 'POPULATION_LOCAL_STORE', populationState: JSON.parse(cachedPopulationState) });
      } else {
        populationDispatch({ type: "POPULATION_RESET" })
      }
    } 
    appDispatch({type: 'SET_LANGUAGE', language: lang});
  }, [])


  return (
    <Router>
      <AppContext.Provider value={{ appDispatch, options, population, populationDispatch, showChainGlobal, showOptions }}>
        <div className={styles.app}>
          <Header language={language} />
          <main className={styles.main}>
            <div className={styles.content}>
              <Population neededProducts={neededProducts} language={language} />
              <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.PRODUCTION} render={() => <ProductionChains language={language}/>} />
                <Route path={ROUTES.NEEDS} render={() => <Needs neededProducts={neededProducts} needs={needs} language={language}/>} />
              </Switch>
            </div>
            <Options language={language} showOptions={showOptions}/>
          </main>
        </div>
      </AppContext.Provider>
    </Router>
  )
}
export default App;

