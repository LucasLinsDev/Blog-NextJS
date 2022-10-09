import React from "react"
import styles from './colunista.module.scss'
import Layout from "../../Layout"
import avatar from '../../../assets/social/avatar.png'
import Image from "next/image"

const Colunista = () =>{
  return (
    <React.Fragment>
      <Layout>
        <div className={styles.colunista}>
          <Image src={avatar}/> <p>Fulano de tal</p> <span>Aug 2, 2020 - 8 min read</span>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Colunista