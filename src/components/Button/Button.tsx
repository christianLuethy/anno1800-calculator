import React from 'react';

// constants

// components

// styles
import styles from './Button.module.css';


interface Button {
  onClick: () => void,
  children: string,
  condition: boolean,
}

const Button = ({onClick, children, condition, }: Button) => (
  <div 
    className={condition ? styles.activeButton : styles.button}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Button;