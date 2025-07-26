import Bulb from '@/img/lightbulb.svg'
import styles from './Beginner.module.css'

export const Beginner = () =>{
  return(
    <div className={styles.beginner}>
      <div className={styles.beginner__aside}>
        <div className={styles.aside__content}>
          <h3 className={styles.content__subtitle}>Beginner</h3>
          <p className={styles.content__text}>Для небольшого исследования</p>
        </div>
        <img src={Bulb} alt='bulb' />
      </div>
      <div className={styles.beginner__under}>
        <div className={styles.under__cost}>
          <div className={styles.cost__top}>
            <p className={styles.top__text}>799 ₽</p>
            <p className={styles.top__text_line}>1 200 ₽</p>
          </div>
          <p className={styles.cost__text}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
        </div>
      </div>
    </div>
  )
}