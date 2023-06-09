import React from "react";
import routes from "../routes";
import styles from "./Menu.module.css";
import NavButton from "../UI/NavButtons/index";


const AppMenu = ({ history } : any) => {
	const menuItemClick = (resource : any) => {
		redirect(resource);
	};

	const redirect = (resource : any) => {
		history.push({ pathname: resource.path });
	};

	const currentPath = history?.location?.pathname || "/";
	return (
		<div className={styles.container}>
			<ul className={styles.fixedContainer}>
				{routes.map(resource => (
					<li key={resource.name}>
						<NavButton resource={resource} onClick={() => menuItemClick(resource)} pathname={currentPath} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default AppMenu;
