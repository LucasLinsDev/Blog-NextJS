import styles from './noticias.module.scss';
import produto from '../../assets/images/produto.png';
import Image from 'next/image';
const Noticias = () =>{
  return(
    <section className={styles.noticias}>
          <div className={styles.header}>
            <h1>Notícias patrocinadas.</h1>
            <p>Últimas notícias impulsionadas por nossos patrocinadores.</p>
          </div>
          <div className={styles.row}>
           {[1,2,3].map(()=>(
             <div className={styles.card}>
              <div className={styles.image}>
                  <Image src={produto} layout='responsive'/>
              </div>
              <div className={styles.content}>
                  <div className={styles.category}>
                    GAMES
                  </div>
                
                  <h1>Ainda vale a pena o PS4 Pro em 2022?</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
                  <div className={styles.card_bottom}>
                    <p>Ler mais</p>
                    <span>Out 26, 2021 - 8 min read</span>
                  </div>
              </div>
            </div>
           ))}
          </div>
    </section>
  )
}

export default Noticias;