import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import After from '@/img/after-slider.svg'
import Lock from '@/img/lock.svg'
import Loop from '@/img/loop.svg'
import Timer from '@/img/timer.svg'
import styles from './Slider.module.css'
export default function Slider() {
	return (
		<div className={styles.slider}>
			<Carousel className={styles.slider__carousel}>
				<CarouselPrevious className={styles.carousel__prev} />
				<CarouselContent className={styles.carousel__content}>
					<CarouselItem className={styles.content__item}>
						<img src={Timer} alt='timer' />
						Высокая и оперативная скорость <br />
						обработки заявки
					</CarouselItem>
					<CarouselItem className={styles.content__item}>
						<img src={Loop} alt='loop' />
						Огромная комплексная база <br />
						данных, обеспечивающая <br />
						объективный ответ на запрос
					</CarouselItem>
					<CarouselItem className={styles.content__item}>
						<img src={Lock} alt='lock' />
						Защита конфеденциальных сведений, <br /> не подлежащих разглашению
						по
						<br /> федеральному законодательству
					</CarouselItem>
					<CarouselItem className={styles.content__item}>
						<img src={Timer} alt='timer' />
						Высокая и оперативная скорость <br /> обработки заявки
					</CarouselItem>
					<CarouselItem className={styles.content__item}>
						<img src={Loop} alt='loop' />
						Огромная комплексная база <br />
						данных, обеспечивающая <br />
						объективный ответ на запрос
					</CarouselItem>
					<CarouselItem className={styles.content__item}>
						<img src={Lock} alt='lock' />
						Защита конфеденциальных сведений,
						<br /> не подлежащих разглашению по <br />
						федеральному законодательству
					</CarouselItem>
				</CarouselContent>
				<CarouselNext className={styles.carousel__next} />
			</Carousel>
			<img className={styles.slider__after_img} src={After} alt='bruh' />
		</div>
	)
}