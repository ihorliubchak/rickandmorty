import { stringify } from "query-string";

export const INIT_PAGINATION = { page: Number(1) };
export const INIT_SORT = { sortByParameter: "id", descending: true };

export const setUrlParams = (history: any, val?: any) => {
	return history.push({
		search: stringify(val),
	});
};
