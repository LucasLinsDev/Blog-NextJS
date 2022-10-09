import styles from './header.module.scss';

import search from '../../assets/icones/search.svg';
import logo from '../../assets/icones/logo.svg';
import Image from 'next/image';

const Header=()=>{
  return(
    <header className={styles.header}>
      <div className={styles.header_container}>
    
        <div className={styles.logo}>
              <Image src={logo} alt='Search Icon'/>
        </div>

        <div className={styles.menu}>
          <a href="#">Categorias</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </div>

        <div className={styles.search}>
          <input type='text' placeholder='Buscar'/>
          <button>
            <Image src={search} alt='Search Icon'/>
          </button>
        </div>

        <button className={styles.button_primary}>
          Login
        </button>

      </div>
    </header>
  )
}

export default Header;