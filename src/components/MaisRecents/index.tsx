import styles from './mais_recentes.module.scss'
import avatar from '../../assets/images/avatar2.png'
import netflix from '../../assets/images/netflix.png'
import Image from 'next/image';
const MaisRecentes = ()=>{
  return(
    <section className={styles.mais_recentes}>
      <div className={styles.header}>
        <div className={styles.left_box}>
            <h1>Mais recentes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.rigth_box}>
            <a href="#">Explorar mais artigos</a>
        </div>
      </div>
      <div className={styles.row}>
          <div className={styles.box_left}>
            <div className={styles.card}>
              <div className={styles.category}>
                Entreterimento
              </div>
              <h1>Quais são os lançamentos da Netflix?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.</p>
              <div className={styles.card_bottom}>
                <div className={styles.avatar}>
                  <Image src={avatar}/>
                  <div className={styles.avatar_content}>
                    <p>by Ben Parker</p>
                    <span>@benparker</span>
                  </div>
                </div>
                <span>Aug 2, 2020</span>
              </div>
              <a href="#">Ler mais</a>
            </div>
          </div>
           <div className={styles.box_right}>
               <Image src={netflix} layout='responsive'/>
          </div>
      </div>
        <div className={styles.row}>
          <div className={styles.box_left}>
            <div className={styles.card}>
              <div className={styles.category}>
                Entreterimento
              </div>
              <h1>Quais são os lançamentos da Netflix?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.</p>
              <div className={styles.card_bottom}>
                <div className={styles.avatar}>
                  <Image src={avatar}/>
                  <div className={styles.avatar_content}>
                    <p>by Ben Parker</p>
                    <span>@benparker</span>
                  </div>
                </div>
                <span>Aug 2, 2020</span>
              </div>
              <a href="#">Ler mais</a>
            </div>
          </div>
           <div className={styles.box_right}>
               <Image src={netflix} layout='responsive'/>
          </div>
      </div>
    </section>
  ) 
}

export default MaisRecentes;