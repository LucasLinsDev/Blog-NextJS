import styles from './newsteller.module.scss';

const Newsteller= () =>{
  return(
    <section className={styles.newsteller}>
      <div className={styles.box_left}>
          <h1>Participe da nossa</h1>
          <p>newsletter.</p>
      </div>
      <div className={styles.box_right}>
        <div className={styles.form}>
          <input type="text" placeholder='Digite seu e-mail aqui'/>
          <button>Cadatrar</button>
    
        </div>
      <p>No spam, notifications, only about new products and updates. You can always unsubscribe.</p>
      </div>
    </section>
  )
}

export default Newsteller;