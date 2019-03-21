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

// reducers
import useAppReducer, { AppActionTypes } from '../../reducers/appReducer';
import usePopulationReducer, { PopulationActionTypes } from '../../reducers/populationReducer';

// styles
import styles from './App.module.css';

console.log(parameters)


///////////////////////////// Population Context //////////////////////////////
///////////////////////////////////////////////////////////////////////////////

interface ContextTypes {
  appDispatch: React.Dispatch<AppActionTypes>,
  population: {[key: number]: number},
  populationDispatch: React.Dispatch<PopulationActionTypes>,
  showChainGlobal: boolean,
  showOptions: boolean,
}

export const PopulationContext = React.createContext<ContextTypes>({
  appDispatch: () => {},
  population: {},
  populationDispatch: () => {},
  showChainGlobal: false,
  showOptions: false,
})


///////////////////////////// App /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///


const App = () => {
  const [{language, showChainGlobal, showOptions}, appDispatch] = useAppReducer();
  const [{ needs, neededProducts, population }, populationDispatch] = usePopulationReducer()
  
  // retrieve population data from the local storage
  useEffect(() => {
    const cachedPopulationState = localStorage.getItem('populationState')
    if (cachedPopulationState) {
      populationDispatch({ type: 'POPULATION_LOCAL_STORE', populationState: JSON.parse(cachedPopulationState) });
    }
  }, [])

  return (
    <Router>
      <PopulationContext.Provider value={{ appDispatch, population, populationDispatch, showChainGlobal, showOptions }}>
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
            <Options showOptions={showOptions}/>
          </main>
        </div>
      </PopulationContext.Provider>
    </Router>
  )
}
export default App;

