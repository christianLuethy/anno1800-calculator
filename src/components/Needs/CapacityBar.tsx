import React from 'react';

// constants

// components

// styles
import styles from './Needs.module.css'


///////////////////////////// Capacity Bar ////////////////////////////////////
/////////////////////////////////////////////////////////////////// <svg /> ///

interface CapacityBarPropTypes {
  barWidth: number,
  barHeight: number,
  workloadAll: number,
  workloadOne: number,
}

const CapacityBar = ({ barWidth, barHeight, workloadAll, workloadOne }: CapacityBarPropTypes) => {
  
  const y = -1 // to change the y values (coordinate system has 0,0 at bottom,left indstead of top,left)
  
  const svgHeight = barHeight + 2 * 6;
  const svgWidth = barWidth + 30;
  
  const workloadHeight = barHeight * workloadAll / 100
  const fill = workloadOne < 75 ? "green" : workloadOne < 85 ? "yellow" : "red" // percentage where the bar changes from green to yellow to red

  return (
    <svg className={styles.line} width={svgWidth} height={barHeight} viewBox={`0 ${svgHeight * y} ${svgWidth} ${svgHeight}`}>
      <rect 
        width={barWidth - 2 * 1} 
        height={workloadHeight} 
        x={1} 
        y={(1 + 6 + workloadHeight) * y} 
        fill={fill} 
      />
      <path 
        d={`M 0 ${(1 + 6 + workloadHeight) * y} l ${barWidth} 0 l 5.2 -3 M ${barWidth} ${(1 + 6 + workloadHeight) * y} l 5.2 3`} 
        stroke="#cbbbaf" 
        strokeWidth="1"
        fill="none"
      />
      <text 
        className={styles.svgText} 
        x="13.2" 
        y={(1 + 6 + workloadHeight) * y} 
        dy="4"
      >
        {workloadAll}
      </text> 
      <rect 
        width={barWidth - 1} 
        height={barHeight - 1} 
        x={0.5} 
        y={(5.5 + barHeight) * y} 
        stroke="#cbbbaf" 
        strokeWidth="1" 
        fill="none"/>
    </svg>
  )
}

export default CapacityBar;