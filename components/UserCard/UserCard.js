import React from 'react';

const UserCard = (
	{
		noPadding, boxShadow, noBorder, title, children, className, titleBorder, titleButtons, ...restProps
	}) =>{

	return(
		<section className={`user-card ${noPadding && 'no-padding'}${className && ` ${className}`}`} {...restProps}>
			<section className={`${titleBorder && `data-card__title-container-bordered`}`}>
				{
					title &&
					<h1 className={`data-card__title`}>
						{title}

						{titleButtons &&
						<div className={"data-card__title-buttons-container float-end"}>
							{
								titleButtons
							}
						</div>
						}
					</h1>
				}
			</section>
			<div className={'data-card__content'}>{children}</div>
		</section>
	)
};

export default UserCard;
