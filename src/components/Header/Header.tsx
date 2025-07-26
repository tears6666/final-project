import Logo from '../../img/logo.svg'
import styles from './Header.module.scss'

export default function Header(){
  return(
    <header className={styles.header}>
      <img src={Logo} alt="logo" width={141} height={141}/>
      <nav className={styles.header__nav}>
        <ul className={styles.nav__list}>
          <li className={styles.list__item}>Главная</li>
          <li className={styles.list__item}>Тарифы</li>
          <li className={styles.list__item}>FAQ</li>
        </ul>
      </nav>
      <div className={styles.header__reg}>
        <p className={styles.reg__text}>Зарегистрироваться</p>
        <div className={styles.reg__stick}></div>
        <button className={styles.reg__btn}>Войти</button>
      </div>
    </header>
  )
}