import React, { useContext } from 'react';
import { PopulationContext } from '../App/App';

// constants
import localText from '../../constants/localText';

// components 
import Button from '../Button/Button';
import ProductOption from './ProductOption';

// styles
import styles from './Options.module.css';


interface NeedsOptionsTypes {
  language: string,
}

const NeedsOptions= ({language}: NeedsOptionsTypes ) => {
  const { appDispatch, options, showChainGlobal } = useContext(PopulationContext);

  return (
    <div className={styles.options}>
      <h1 className={styles.title}>{localText.options[language]}</h1>
      <div  className={styles.group}>
        <p className={styles.groupTitle}>group title</p>
        <div className={styles.item3Span}>
          <Button condition={showChainGlobal} onClick={() => appDispatch({type: 'TOGGLE_CHAIN'})}>{localText.productionChains[language]}</Button>
        </div>
      </div>
      <div className={styles.group}>
        <p className={styles.groupTitle}>group title</p>
        { Object.keys(options).map(key => <ProductOption key={key} buildingID={key} />)}
      </div>
    </div>
  )
}

export default NeedsOptions;

