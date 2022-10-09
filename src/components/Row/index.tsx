import React, { CSSProperties, ReactElement } from 'react';
import styles from './row.module.scss'

interface IPropsRow{
  children?:ReactElement | ReactElement[]
  display?:'flex' | 'row' 
  gap?:number
  wrap?:'wrap' | 'nowrap'
  title?:string,
}

const Row  = ({children,gap,display,wrap,title}:IPropsRow) =>{



  return (
    <React.Fragment>
     {title ? ( <div className={styles.row}>
      <h1 className={styles.text_title}>{title}</h1>
      </div>) :''}
         <div className={styles.row}  style={{display:display,gap:gap,flexWrap:wrap}}>
        {children}
    </div>
    </React.Fragment>
  )
}

export default Row;