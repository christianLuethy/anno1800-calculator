import parameters, { NeedType, PopulationType } from '../constants/parameters'
import { useReducer } from 'react';
import Product from '../components/Needs/Product';

interface PopulationStateTypes {
  neededProducts: string[],
  needs: {
    basic: {[key: string]: number},
    luxury: {[key: string]: number},
    [key: string]: {[key: string]: number},
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
    w1c1b000p00: 0, // Farmers
    w1c2b000p00: 0, // Workers
    w1c3b000p00: 0, // Artisans
    w1c4b000p00: 0, // Engineers
    w1c5b000p00: 0, // Investors
    w2c1b000p00: 0, // Jornaleros
    w2c2b000p00: 0, // Obreros
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
      checkIfNeeded(newPopulation).filter((id) => id.substring(0, 2) === "w0").map((product) => parameters.products[product].producerIds).forEach((ids) => { ids.forEach((id) => { newOptions[id] = { increaseDecrease: 0, withElectricity: false}})})

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
    const world = id.substring(0, 2) === "w1" ? 'oldWorld' : 'newWorld'
    populationParameters[world].classes[id].needs.forEach((need: NeedType) => {
      // if the need is a Product
      if (need.id.substring(0, 2) === "w0") { 
        // the prevValue is needed because multiple classes can need the same product and their values need to be added
        const prevValue = calculatedNeeds[need.type.toLowerCase()][need.id] || 0; 

        calculatedNeeds[need.type.toLowerCase()][need.id] = prevValue + need.perMinute * population[id]
      }
    })
  })

  return calculatedNeeds
}

const checkIfNeeded = (newPopulation: {[key: string]: number}, populationParameters: PopulationType  = parameters.population) => {
  const neededProducts: Set<string> = new Set();
  Object.keys(newPopulation).forEach((classId) => {
    const world = classId.substring(0, 2) === "w1" ? 'oldWorld' : 'newWorld';
    populationParameters[world].classes[classId].needs.forEach((need: NeedType) => {
      need.atPopulationOf <= newPopulation[classId] && neededProducts.add(need.id)
    })
  })
  return Array.from(neededProducts)
}



const usePopulationReducer = () => useReducer(populationReducer, initialPopulationState)

export default usePopulationReducer;