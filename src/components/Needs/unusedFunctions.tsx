import parameters from '../../constants/parameters'

// ProductID => [Production Building IDs] 
const getProductChain = (productID: number): number[] =>  {
  const factoryIDs: number[] = []
  const producer = Object.values(parameters.buildings.production).find((building: {produces: number}) => {
    return building.produces === productID
  })
  if (producer) {
    factoryIDs.push(producer.id)
    if (producer.needs !== null) {
      producer.needs.forEach((need: number) => {
        factoryIDs.push(...getProductChain(need))
      })
    }
  }
  return factoryIDs
}

export default getProductChain;
