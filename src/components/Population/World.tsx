import React from 'react';

// constants
import { WorldType, SocialClassType } from '../../constants/parameters';

// components
import SocialClass from './SocialClass';

//styles
import styles from './Population.module.css';


///////////////////////////// World ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////// <li /> ///

interface WorldPropTypes {
  language: string,
  world: WorldType
}

const World = ({ language, world }: WorldPropTypes) => {
  const socialClasses = Object.values(world.classes).map((socialClass: SocialClassType) => 
    <SocialClass key={socialClass.id} language={language} socialClass={socialClass} />
  );
  return (
    <li className={styles.world}>
      <ul className={styles.socialClasses}>
        {socialClasses}
      </ul>
    </li>
  )
};

export default World;