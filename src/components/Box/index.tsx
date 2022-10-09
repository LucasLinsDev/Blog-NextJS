import { ReactElement } from 'react';
import styles from './box.module.scss';

interface IPropsBox{
  width?:number;
  children?:ReactElement | ReactElement[]
}

const Box = ({children,width}:IPropsBox) =>{
  return(
    <div className={styles.box} style={{maxWidth:width}}>
      {children}
    </div>
  )
}

export default Box;