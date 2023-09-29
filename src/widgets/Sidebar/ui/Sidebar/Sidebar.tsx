import React, { ButtonHTMLAttributes, FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	// const { className, theme, children, ...otherProps } = props;

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>tog</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};
