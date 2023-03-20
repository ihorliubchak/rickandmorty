import React from "react";
import Select from "react-select";
import { statusList, genderList } from "./utils";

const colourStyles = {
	control: (base: any, state: any) => ({
		...base,
		background: "#ebf0f0",
		width: 365,
		hight: 33,
		borderColor: state.isFocused ? "#87c7c3" : "#fff",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		boxShadow: state.isFocused ? null : null,
		"&:hover": {
			borderColor: null,
		},
	}),

	menuList: (styles: any) => ({
		...styles,
		background: "#dfe4e4",
	}),
	option: (styles: any, { isFocused, isSelected } : any) => ({
		...styles,
		background: isFocused ? "#c2d1d2" : isSelected ? "#c2d1d2" : undefined,
		zIndex: 1,
	}),
	menu: (base: any) => ({
		...base,
		zIndex: 100,
		fontFamily: "Poppins-Regular",
		fontSize: 12,
	}),
};

const listToRenderStatus = statusList.map(item => ({ value: item, label: item }));

const listToRenderGender = genderList.map(item => ({ value: item, label: item }));

const DropDownSelect = ({ placeholder, value, onChange, id }: any) => {
	const onChangeValue = (obj: any) => {
		onChange(obj.value);
	};
	const selectValue = value ? { value, label: value } : "";
	return (
		<Select
			options={id === "Filters_status" ? listToRenderStatus : listToRenderGender}
			value={selectValue}
			inputId="country_input"
			onChange={onChangeValue}
			//width={"100%"}
			styles={colourStyles}
			placeholder={placeholder}
		/>
	);
};

export default DropDownSelect;
