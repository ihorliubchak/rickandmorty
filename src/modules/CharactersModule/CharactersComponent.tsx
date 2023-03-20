import React, { useEffect, useState, useCallback, FC } from "react";
import { parse } from "query-string";
import httpService from "../../services/http/httpService";
import styles from "./CharactersComponent.module.css";
import CharactersHeader from "./components/CharactersHeader";
import CharactersItems from "./components/CharactersItems";
import Filters from "./components/Filters";
import ModalItemInfo from "./components/ModalItemInfo";
import { getDate } from "../../services/utils/timeFormat";
import { INIT_PAGINATION, setUrlParams } from "../../helpers";
import { CharacterModel } from "./models";

export interface CharacterComponentProps {
	history: any;
	onClick: () => void;
	location: any;
  }

const getCurrentData = (data: any) => {
	return { ...data, created: getDate(data.created) };
};

const CharactersComponent: FC<CharacterComponentProps>  = ({ history, location }) => {
	const [characters, setCaracters] = useState([] as CharacterModel[]);
	const [total, setTotal] = useState(0 as any);
	const [totalPages, setTotalPages] = useState(0);
	const [showModalFilters, setShowModalFilters] = useState(false);
	const [showModalItem, setShowModalItem] = useState(false);
	const [infoItem, setInfoItem] = useState([] as CharacterModel);

	const urlParams = parse(location.search);
	const checkUrlParams: any = Object.keys(urlParams).length ? urlParams : INIT_PAGINATION;
	const searchValue = checkUrlParams?.searchValue || "";

	useEffect(() => {
		getCharatctersList({ ...checkUrlParams, ...searchValue });
	}, [location]);

	const getCharatctersList = (param: any) => {
		httpService
			.getCharatctersList(param)
			.then(res => {
				setCharactersList(res);
			})
			.catch(error => {
				setCaracters([]);
				setTotal(0);
				setTotalPages(0);
				console.log("error", error);
			});
	};

	const setCharactersList = (data: any) => {
		setCaracters([...data.results]);
		setTotal(data.info.count);
		setTotalPages(data.info.pages);
	};

	const controlModalFilters = () => setShowModalFilters(!showModalFilters);

	const controlModalItem = () => setShowModalItem(!showModalItem);

	const openItemInfo = (id?: number) => {
		const pickedIteamData = characters.find(x => x.id === id);
		setShowModalItem(true);
		setInfoItem(getCurrentData(pickedIteamData));
	};

	const changePagination = (key: string, value: number) => {
		if (key === "page" && (value < 0 || value >= total.totalPages)) {
			return;
		}
		setUrlParams(history, { ...checkUrlParams, [key]: Number(value) });
	};

	const applyFilters = (data: any) => {
		Object.keys(data).forEach(key => {
			if (data[key] === "Any" && (key === "status" || key === "gender")) {
				delete data[key];
			}
		});
		setUrlParams(history, { ...INIT_PAGINATION, ...data });
	};

	const clearFilters = () => setUrlParams(history, { ...INIT_PAGINATION });

	return (
		<div className={styles.companiesContainer}>
			<CharactersHeader
				checkUrlParams={checkUrlParams}
				total={total}
				clearFilters={clearFilters}
				onClick={controlModalFilters}
			/>
			<Filters
				location={location}
				show={showModalFilters}
				controlModalFilters={controlModalFilters}
				applyFilters={applyFilters}
			/>
			<CharactersItems
				characters={characters}
				pagination={checkUrlParams}
				totalPages={totalPages}
				changePagination={changePagination}
				onClick={openItemInfo}
			/>
			<ModalItemInfo infoItem={infoItem} show={showModalItem} controlModalItem={controlModalItem} />
		</div>
	);
};

export default CharactersComponent;
