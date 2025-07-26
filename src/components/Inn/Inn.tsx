import Main from '../../img/main.svg'
import styles from './Inn.module.css'
export default function Inn(){
  return(
    <div className={styles.inn}>
      <div className={styles.inn__content}>
        <h1 className={styles.content__title}>сервис по поиску<br />публикаций <br />о компании <br />по его ИНН</h1>
        <p className={styles.content__text}>Комплексный анализ публикаций, получение данных <br />в формате PDF на электронную почту.</p>
        <button className={styles.content__btn}>Запросить данные</button>
      </div>
      <img src={Main} alt="main__logo" />
    </div>
  )
}