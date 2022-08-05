import React from 'react'
import './main.css'
import EllipseLight from '../../assets/ellipseLight.svg'
import reactMainLight from '../../assets/reactMainLight.svg'
import EllipseDark from '../../assets/ellipseDark.svg'
import reactMainDark from '../../assets/reactMainDark.svg'
const Main = props => {
	return (
		<section
			className={
				!props.mode
					? 'container container__main-dark'
					: 'container container__main'
			}
		>
			<img
				className='main__bg-image'
				src={!props.mode ? reactMainDark : reactMainLight}
				alt='React Main Icon'
			></img>
			<div className='main'>
				<h2 className={!props.mode ? 'main__title-dark' : 'main__title'}>
					Fun facts about React
				</h2>
			</div>
			<ul className='main__list'>
				<li
					className={!props.mode ? 'main__list-item-dark' : 'main__list-item'}
				>
					<img
						className='main__dot'
						src={!props.mode ? EllipseDark : EllipseLight}
						alt='Ellipse'
					></img>
					Was first released in 2013
				</li>
				<li
					className={!props.mode ? 'main__list-item-dark' : 'main__list-item'}
				>
					<img
						className='main__dot'
						src={!props.mode ? EllipseDark : EllipseLight}
						alt='Ellipse'
					></img>
					Was originally created by Jordan Walke
				</li>
				<li
					className={!props.mode ? 'main__list-item-dark' : 'main__list-item'}
				>
					<img
						className='main__dot'
						src={!props.mode ? EllipseDark : EllipseLight}
						alt='Ellipse'
					></img>
					Has well over 100K stars on GitHub
				</li>
				<li
					className={!props.mode ? 'main__list-item-dark' : 'main__list-item'}
				>
					<img
						className='main__dot'
						src={!props.mode ? EllipseDark : EllipseLight}
						alt='Ellipse'
					></img>
					Is maintained by Facebook
				</li>
				<li
					className={!props.mode ? 'main__list-item-dark' : 'main__list-item'}
				>
					<img
						className='main__dot'
						src={!props.mode ? EllipseDark : EllipseLight}
						alt='Ellipse'
					></img>
					Powers thousands of enterprise apps, including mobile apps
				</li>
			</ul>
		</section>
	)
}

export default Main
