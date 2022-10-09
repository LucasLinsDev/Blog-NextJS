import styles from './destaques.module.scss';
import card_big_image from '../../assets/banner/card_big.png'
import avatar from '../../assets/images/avatar.png'
import Image from 'next/image';
import styled from 'styled-components';

const Destaques = () =>{

  return(
    <section className={styles.destaques_container}>
        <div className={styles.section_header}>
              <h2>Destaques</h2>
              <a href="#">Explorar mais artigos</a>
        </div>
        <div className={styles.row}>
           <div className={styles.box_left}>
              <div className={styles.card_big}>
                <div className={styles.content}>
                  <div className={styles.category}>
                       Games
                  </div>
                  <h1>Quais as vantagens de ter um ecossistema Apple?</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
                </div>
                <div className={styles.image}>
                     <Image src={card_big_image} layout='responsive'/>
                </div>
              </div>
           </div>
           <div className={styles.box_right}>
                <div className={styles.row}>
                    <div className={styles.card_large}>
                        <div className={styles.content}>
                            <div className={styles.category}>
                               Games
                            </div>
                            <h1>Top 10 Filmes de 2021</h1>
                            <span>by Nasser Yousef</span>
                           
                        </div>
                        <div className={styles.image}>
                            <Image src={card_big_image} layout='responsive'/>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.card_small}>
                    <div className={styles.content}>
                      <div className={styles.category}>
                        Games
                      </div>
                      <h1>PC Gamer muito caro, o que fazer?</h1>
                      <div className={styles.card_small_bottom}>
                         <span>by Nasser Yousef</span>
                         <span>by Nasser Yousef</span>
                      </div>
                    </div>
                    <div className={styles.image}>
                      <Image src={card_big_image}/>
                    </div>
                  </div>
                  <div className={styles.card_small}>
                      <div className={styles.content}>
                        <div className={styles.category}>
                          Games
                        </div>
                        <h1>PC Gamer muito caro, o que fazer?</h1>
                        <div className={styles.card_small_bottom}>
                          <span>by Nasser Yousef</span>
                          <span>by Nasser Yousef</span>
                        </div>
                      </div>
                      <div className={styles.image}>
                        <Image src={card_big_image}/>
                      </div>
                  </div>
                </div>
           </div>
        </div>
    </section>

  )

}

export default Destaques;