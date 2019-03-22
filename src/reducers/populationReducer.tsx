import parameters, { NeedType, PopulationType } from '../constants/parameters'
import { useReducer } from 'react';
import Product from '../components/Needs/Product';

interface PopulationStateTypes {
  neededProducts: number[],
  needs: {
    basic: {[key: number]: number},
    luxury: {[key: number]: number},
    [key: string]: {[key: number]: number},
  },
  options: {
    [key: string]: {
      increaseDecrease: number,
      withElectricity: boolean
    }
  },
  population: {[key: string]: number},
}
export interface PopulationActionTypes {
  type: string,
  value?: number,
  [key: string]: any,
}


const initialPopulationState: PopulationStateTypes = {
  neededProducts: [],
  needs: {
    basic: {},
    luxury: {},
  },
  options: {
    
  },
  population: {
    '20100000': 0, // Farmers
    '20200000': 0, // Workers
    '20300000': 0, // Artisans
    '20400000': 0, // Engineers
    '20500000': 0, // Investors
    '30100000': 0, // Jornaleros
    '30200000': 0, // Obreros
  },
}

const populationReducer = (state: PopulationStateTypes, action: PopulationActionTypes): PopulationStateTypes => {
  let newIncreaseDecrease: number;
  let newState: PopulationStateTypes;
  switch(action.type) {
    case 'DECREASE': 
    case 'INCREASE':
      newIncreaseDecrease = action.type === 'DECREASE' 
        ? state.options[action.id].increaseDecrease - 1
        : state.options[action.id].increaseDecrease + 1;

      return Object.assign({}, state, { options: { ...state.options, [action.id]: { ...state.options[action.id], increaseDecrease: newIncreaseDecrease}}})
    case 'INCREASE_DECREASE_CHANGE':
      return Object.assign({}, state, { options: { ...state.options, [action.id]: { ...state.options[action.id], increaseDecrease: action.value}}})
    case 'POPULATION_LOCAL_STORE':
      return Object.assign({}, action.populationState)
    case 'POPULATION_CHANGE':
      const newPopulation = { ...state.population, [action.id]: action.number };
      
      const newOptions: PopulationStateTypes["options"] = {}
      checkIfNeeded(newPopulation).filter((id) => id % 10 !== 0).map((product) => parameters.products[product].producerIds).forEach((ids) => { ids.forEach((id) => { newOptions[id] = { increaseDecrease: 0, withElectricity: false}})})

      newState = Object.assign({}, state, { population: newPopulation, neededProducts: checkIfNeeded(newPopulation), needs: calculateNeeds(newPopulation), options: newOptions});
      localStorage.setItem('populationState', JSON.stringify(newState));
      return newState
    case 'POPULATION_RESET':
      localStorage.setItem('populationState', JSON.stringify(initialPopulationState));
      return Object.assign({}, initialPopulationState)
    case 'TOGGLE_ELECTRICITY':
      return  Object.assign({}, state, {options: { ...state.options, [action.id]: { ...state.options[action.id], withElectricity: !state.options[action.id].withElectricity}}})
    default:
      return state;
  }
}

const calculateNeeds = (population: PopulationStateTypes["population"], populationParameters: PopulationType = parameters.population) => {
  const calculatedNeeds: PopulationStateTypes["needs"] = {basic: {}, luxury: {}}
  
  Object.keys(population).forEach((id) => {
    const world = Number.parseInt(id) < 30000000 ? 'oldWorld' : 'newWorld'
    populationParameters[world].classes[id].needs.forEach((need: NeedType) => {
      // if the need is a Product (Public Service Buildings are divideable by 10)
      if (need.id % 10 !== 0) { 
        // the prevValue is needed because multiple classes can need the same product and their values need to be added
        const prevValue = calculatedNeeds[need.type][need.id] || 0; 

        calculatedNeeds[need.type][need.id] = prevValue + need.perMinute * population[id]
      }
    })
  })

  return calculatedNeeds
}

const checkIfNeeded = (newPopulation: {[key: number]: number}, populationParameters: PopulationType  = parameters.population) => {
  const neededProducts: Set<number> = new Set();
  Object.keys(newPopulation).forEach((classIdString) => {
    const classId = Number.parseInt(classIdString);
    const world = classId < 30000000 ? 'oldWorld' : 'newWorld';
    populationParameters[world].classes[classId].needs.forEach((need: NeedType) => {
      need.atPopulationOf <= newPopulation[classId] && neededProducts.add(need.id)
    })
  })
  return Array.from(neededProducts)
}



const usePopulationReducer = () => useReducer(populationReducer, initialPopulationState)

export default usePopulationReducer;