import React from 'react'
import ReactLogoLight from '../../assets/reactLogoLight.svg'
import ReactLogoDark from '../../assets/reactLogoDark.svg'
import './header.css'
const Header = props => {
	return (
		<nav
			className={
				!props.mode
					? 'container container__header-dark dark'
					: 'container container__header'
			}
		>
			<div className='header__logo'>
				<img
					className='header__logo-img'
					src={!props.mode ? ReactLogoDark : ReactLogoLight}
					alt='React Logo'
				/>
				<h2 className={!props.mode ? 'header__title-dark' : 'header__title'}>
					ReactFacts
				</h2>
			</div>
			<div className='toggler' onClick={props.onHandleClick}>
				<p className='toggler--light'>Light</p>
				<div className='toggler--slider'>
					<div className='toggler--slider--circle'></div>
				</div>
				<p className='toggler--dark'>Dark</p>
			</div>
		</nav>
	)
}

export default Header
