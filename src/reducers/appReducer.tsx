import { useReducer } from 'react';

interface AppStateTypes {
  language: string,
  showChainGlobal: boolean,
  showOptions: boolean,
}
export interface AppActionTypes {
  type: string,
  [key: string]: any,
}

const initialAppState: AppStateTypes = {
  language: 'german',
  showChainGlobal: false,
  showOptions: false,
}
const appReducer = (state: AppStateTypes, action: AppActionTypes): AppStateTypes => {
  switch(action.type) {
    case 'LANGUAGE_CHANGE':
      return { ...state, language: action.language };
    case 'TOGGLE_OPTIONS': 
      return { ...state, showOptions: !state.showOptions}
    case 'TOGGLE_CHAIN': 
      return { ... state, showChainGlobal: !state.showChainGlobal}
    default: 
      return state;
  }
}

const useAppReducer = () => useReducer(appReducer, initialAppState)

export default useAppReducer;