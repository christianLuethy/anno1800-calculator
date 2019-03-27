import React, { useContext } from 'react';

import { AppActionTypes } from './useAppReducer'
import { PopulationActionTypes } from './usePopulationReducer'



///////////////////////////// Population Context //////////////////////////////
///////////////////////////////////////////////////////////////////////////////

interface ContextTypes {
  appDispatch: React.Dispatch<AppActionTypes>,
  options: { [key: string]: { increaseDecrease: number, withElectricity: boolean}},
  population: {[key: number]: number},
  populationDispatch: React.Dispatch<PopulationActionTypes>,
  showChainGlobal: boolean,
  showOptions: boolean,
}

export const AppContext = React.createContext<ContextTypes>({
  appDispatch: () => {},
  options: {},
  population: {},
  populationDispatch: () => {},
  showChainGlobal: false,
  showOptions: false,
})


///////////////////////////// useAppContext Hook //////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const useAppContext = () => {
  const appContext = useContext(AppContext)
  return appContext
}

export default useAppContext