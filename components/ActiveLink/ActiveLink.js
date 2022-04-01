import React from 'react';
import { withRouter } from 'next/router'
import Icon from '../Icons/icon';

const ActiveLink = ({ children, router, href, mainIcon, activeIcon, title }) => {

	const handleClick = e => {
		e.preventDefault();
		router.push(href)
	};

	return (
		<a href={href} onClick={handleClick} className={router.pathname === href ? 'active' : ''}>
			<span className="main-menu__icon"><Icon name={router.pathname === href ? activeIcon : mainIcon} /></span>
			<span className="link-title">{title}</span>
		</a>
	)
};

export default withRouter(ActiveLink)