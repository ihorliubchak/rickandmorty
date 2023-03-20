import React, {FC, useState} from "react";

interface InputTextProps {
	disabled: boolean;
	onChange: (attribute?: string, value?: string) => void;
	attribute?: string;
    placeholder?: string;
    validate?: boolean;
    value?: string;
    error?: string;
  }

const InputText: FC<InputTextProps> = ({attribute, placeholder, validate, onChange, disabled, error, value}) => {
    const [touched, setTouched] = useState(false);

    const keyUp = (event: any) => {
        onChange(attribute, event.target?.value);
    };

    const touchHandle = (event: any) => {
        event.stopPropagation();
        if (!touched) {
            onChange(attribute, event.target.value);
            setTouched(true);
        }
    };

    return (
        <div className="form-group">
            <input type="text"
                   placeholder={placeholder}
                   className="form-control"
                   value={value || ""}
                   data-testid="text-input"
                   disabled={disabled}
                   onChange={keyUp}
                   onBlur={touchHandle}
            />
            {touched && validate && <span className="text-danger">{error}</span>}
        </div>
    )
};

export default InputText;
