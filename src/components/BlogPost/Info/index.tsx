import React from "react";
import Box from "../../Box";
import Row from "../../Row";
import avatar from '../../../assets/social/avatar.png'
import Image from "next/image";
import styles from './info.module.scss';
const Info = () =>{
  return(
    <React.Fragment>
      <div className={styles.info}>
        <Box width={96}>
          <Image src={avatar} layout='responsive'/>
        </Box>
         <Box>
          <div className={styles.content}>
            <p className={styles.txt_blue}>Fulano de tal</p>
            <span  className={styles.txt_arroba}>@fulano.tal</span>
            <p  className={styles.txt_silver}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.</p>
            <a href="#"  className={styles.txt_blue_small}>Ver perfil</a>
          </div>
        </Box> 
      </div>
    </React.Fragment>
  )
}

export default Info;