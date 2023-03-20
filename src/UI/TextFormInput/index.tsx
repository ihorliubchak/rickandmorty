import React from "react";
import styles from "./index.module.css";
import InputText from "../MainInput";
import DropDownSelect from "../DropDownSelect";

const getInput = (type: any, props: any) => {
	const typeInput: any = {
		input: <InputText {...props} />,
		dropdownSelect: <DropDownSelect {...props} />,
	};
	return typeInput[type] || typeInput.input;
};
const TextFormInput = (props: any) => (
	<div className={`${styles.modalAddRowContainer} ${props.type === "count" ? styles.countContainer : ""} `}>
		<span
			className={`${styles.modalAddRowTitle} ${props.type === "count" ? styles.countLabel : ""} ${
				props.labelStyles
			}`}>
			{props.label}
		</span>
		{getInput(props.type, props)}
	</div>
);

TextFormInput.defaultProps = {
	type: "input",
	label: "",
	value: "",
	error: "",
	onBlur: () => {},
	placeholder: "",
	onChange: () => {},
	labelStyles: {},
};

export default TextFormInput;
