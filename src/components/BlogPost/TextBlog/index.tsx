import React, { ReactElement } from 'react';
import styles from './text_blog.module.scss';

interface IPropsText{
  title?:string
  txt?:string
  children?:ReactElement | ReactElement[]
}


const TextBlog=({title,txt,children}:IPropsText)=>{
  return(
    <React.Fragment>
      <div className={styles.text_blog}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default TextBlog;