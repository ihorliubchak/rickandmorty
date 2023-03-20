import React, { FC } from "react";
import { Page } from "../../types";
import styles from "./NavButton.module.css";

interface NavButtonProps {
	resource: Page;
	onClick: () => void;
	pathname: string;
  }

const NavButton: FC<NavButtonProps> = ({ resource, onClick, pathname }) => {
	const btnStyle = `${styles.container}  ${pathname.includes(resource.path) ? styles.selectBtn : undefined}`;
	return (
		<div className={btnStyle} onClick={onClick}>
			<span id={resource.name}>{resource.name}</span>
		</div>
	);
};

export default NavButton;
