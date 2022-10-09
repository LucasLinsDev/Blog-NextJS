import { ReactElement } from 'react';
import styles from './layout.module.scss';

interface IPropsLayout {
  children?:ReactElement | ReactElement[]
  width?:number
}

const Layout = ({children,width}:IPropsLayout)=>{
  return(
    <div className={styles.layout} style={{maxWidth:width}}>
      {children}
    </div>
  )
}

export default Layout;