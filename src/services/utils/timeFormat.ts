import moment from "moment";

const REMOVE_TIME_HOUR_TIME = [4, 16];

export const getDate = (time: string) => {
	if (!time) {
		return "";
	}
	return new Date(time).toString().slice(REMOVE_TIME_HOUR_TIME[0], REMOVE_TIME_HOUR_TIME[1]);
};
