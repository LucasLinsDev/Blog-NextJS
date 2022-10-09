import styles from './colunistas.module.scss';

import foto from '../../assets/images/foto.png'
import Image from 'next/image';

const Colunistas= () =>{
  return(
    <section className={styles.colunistas}>
        <div className={styles.header}>
          <h1>Nossos colunistas.</h1>
          <p>Os melhores em conteúdo, Clique e veja mais sobre os artigos de cada um.</p>
        </div>
        <div className={styles.row}>
        {[1,2,3,4].map(()=>(
            <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.category}>
                Moda
              </div>
              <h1>Lia Lake</h1>
              <p></p>
            </div>
            <Image src={foto} layout='responsive' />
          </div>
        ))}
        </div>
    </section>
  )
}

export default Colunistas;