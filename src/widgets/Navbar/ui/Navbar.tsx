import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
					Main
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
					About
				</AppLink>
			</div>
		</div>
	);
};
