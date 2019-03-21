import React from 'react';

// constants
import parameters from '../../constants/parameters';

// components
import ProductionBuilding from './ProductionBuilding';

// styles
import styles from './Needs.module.css'

///////////////////////////// Product /////////////////////////////////////////
/////////////////////////////////////////////////////////////////// <div /> ///

interface ProductPropTypes {
  language: string,
  productID: number,
  productNeed: number,
}

const Product = ({ language, productID, productNeed }: ProductPropTypes): any => {
  const product = parameters.products[productID];
  const tpm = productNeed.toFixed(2);

  const buildingList = product.producerIds.map((producerId: number, index: number) => {
    return <ProductionBuilding 
      buildingID={producerId}  
      isAlternative={index === 0 ? false : true} 
      isEndProducer={product.isEndProduct ? true : false}
      key={producerId} 
      language={language} 
      productNeed={productNeed} 
    />
  })

  return product 
    ? buildingList.length > 1 
      ? <div className={styles.hasAlternative}>{buildingList}</div>
      : buildingList
    : <div>No Product with id: {productID} => needs to be checked</div>
}

export default Product;