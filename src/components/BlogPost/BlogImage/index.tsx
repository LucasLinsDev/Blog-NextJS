import React from "react";
import styles from './image.module.scss';
import icone from '../../../assets/social/image.png';
import Image from "next/image"

const BlogImage =  ()=>{
  return(
    <React.Fragment>
      <Image src={icone} layout='responsive'/>
    </React.Fragment>
  )
}

export default BlogImage;