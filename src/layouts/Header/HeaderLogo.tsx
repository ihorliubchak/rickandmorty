import React, { FC } from "react";
import styles from "./HeaderComponents.module.css";

export interface HeaderLogoProps {
	item: string;
  }

const HeaderLogo: FC<HeaderLogoProps> = ({ item }) => <img src={item} alt="logo" className={styles.headerLogoIcon} />;

export default HeaderLogo;
