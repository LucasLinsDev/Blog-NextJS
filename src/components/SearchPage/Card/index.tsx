import styles from './card.module.scss'
import produto from '../../../assets/images/produto.png';
import Image from 'next/image';
const Card = () =>{
  return(
    <div className={styles.card}>
        <div className={styles.images}>
            <Image src={produto} layout='responsive'/>
        </div>
        <div className={styles.content}>
          <span>01 NOV 2021</span>
          <p className={styles.text_blue}>TECNOLOGIA</p>
          <h1>O que tem de novo no PS5? Muitas novidades? </h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
          <a href="#" className={styles.text_blue}>Ler mais</a>
        </div>
    </div>
  )
}

export default Card;