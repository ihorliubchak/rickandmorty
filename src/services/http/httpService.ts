import baseHttpClient from "./baseHttpClient";
import { stringify } from "query-string";
import apiEnvironment from "./apiEnvironment";

const apiUrl = () => {
	return apiEnvironment.getAPIEnv();
};

export default {
	getCharatctersList(query: any) {
		return baseHttpClient.get(`${apiUrl()}/character?${stringify(query)}`);
	},
	getEpisodesList(query: any) {
		return baseHttpClient.get(`${apiUrl()}/episode?${stringify(query)}`);
	},
	getLocationsList(query: any) {
		return baseHttpClient.get(`${apiUrl()}/location?${stringify(query)}`);
	},
};
