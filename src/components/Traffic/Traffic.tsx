import { Beginner } from '@/entities/Beginner/Beginner'
import styles from './Traffic.module.css'

export default function Traffic(){
  return(
    <div className={styles.traffic}>
      <h2 className={styles.traffic__subtitle}>наши тарифы</h2>
      <Beginner />
    </div>
  )
}