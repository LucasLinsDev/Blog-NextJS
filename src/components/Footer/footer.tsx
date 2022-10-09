import styles from './footer.module.scss'
import logo from '../../assets/icones/logo.svg';
import facebook from '../../assets/social/icon-facebook.png';
import Image from 'next/image';
const Footer =  () =>{
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <Image src={logo}/>
          <p>Blog</p>
      </div>
      <div className={styles.row}>
        <div className={styles.box_left}>
          <ul>
            <li><h2>Posts</h2></li>
            <li><a href="#">Mais vistos </a></li>
            <li><a href="#">Mais vistos </a></li>
            <li><a href="#">Mais vistos </a></li>
            <li><a href="#">Mais vistos </a></li>
          </ul>
           <ul>
            <li><h2>Categorias</h2></li>
            <li><a href="#">Mais vistos </a></li>
            <li><a href="#">Mais vistos </a></li>
            <li><a href="#">Mais vistos </a></li>
            <li><a href="#">Mais vistos </a></li>
          </ul>
        </div>
        <div className={styles.box_right}>
          <h2>Quer ser avisado dos novos posts do blog? </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. </p>
          <div className={styles.form}>
            <input type='text' placeholder='Digite seu e-mail aqui' />
            <button>Inscrever-se</button>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.box_left}>
          <p>2022 | Todos os direitos reservados.</p>
        </div>
          <div className={styles.box_right}>
          <Image src={facebook}/>
          <Image src={facebook}/>
          <Image src={facebook}/>
          <Image src={facebook}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;