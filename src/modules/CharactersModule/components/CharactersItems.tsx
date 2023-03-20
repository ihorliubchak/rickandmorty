import React, { FC } from "react";
import ControlBtnList from "../../../UI/Table/ControlList";
import styles from "../CharactersComponent.module.css";
import { CharacterModel } from "../models";

export interface CharactersItemsProps {
	characters: CharacterModel[];
	onClick: (id?: number) => void;
	changePagination: any;
	pagination: any;
	totalPages: number;
  }

const CharactersItems: FC<CharactersItemsProps> = ({ characters, onClick, pagination, changePagination, totalPages }) => {
	return (
		<>
			<div className={styles.charactersItemsContainer}>
				{characters.map(({ name, id, image, species, status, gender }) => (
					<div onClick={() => onClick(id)} key={id} className={styles.charactersItemContainer}>
						<img className={styles.charactersImage} src={image} alt="Character image" />
						<span className={styles.charactersName}>{name}</span>
						<span>{species}</span>
						<span>{status}</span>
						<span>{gender}</span>
					</div>
				))}
			</div>
			{pagination && (
				<ControlBtnList pagination={pagination} changePagination={changePagination} total={totalPages} />
			)}
		</>
	);
};

export default CharactersItems;
