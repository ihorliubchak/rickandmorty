import React, { FC, useState } from "react";

interface RemoveBtnListProps {
	disabled: boolean;
	onClick: () => void;
	id: string;
  }

const RemoveBtnList: FC<RemoveBtnListProps> = ({ disabled, onClick, id }) => {
	const [isHovered, setHover] = useState(false);
	const handleMouseEnter = () => {
		setHover(true);
	};
	const handleMouseLeave = () => {
		setHover(false);
	};

	const onClickIcon = () => {
		if (disabled) {
			return;
		}
		onClick();
	};

	const fillIcon = !disabled && isHovered ? "#c50404" : "#C9D7D8";
	return (
		<svg
			width="24"
			cursor={"pointer"}
			onClick={onClickIcon}
			height="24"
			id={id}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<path
				d="M3.5 1.4C3.5 0.626801 4.1268 0 4.9 0H9.1C9.8732 0 10.5 0.626801 10.5 1.4V2.8H11.8928C11.8971 2.79996 11.9014 2.79996 11.9058 2.8H13.3C13.6866 2.8 14 3.1134 14 3.5C14 3.8866 13.6866 4.2 13.3 4.2H12.5518L11.9447 12.6997C11.8923 13.4324 11.2827 14 10.5482 14H3.45178C2.71729 14 2.10767 13.4324 2.05534 12.6997L1.44822 4.2H0.7C0.313401 4.2 0 3.8866 0 3.5C0 3.1134 0.313401 2.8 0.7 2.8H2.09422C2.09856 2.79996 2.1029 2.79996 2.10722 2.8H3.5V1.4ZM4.9 2.8H9.1V1.4H4.9V2.8ZM2.85178 4.2L3.45178 12.6H10.5482L11.1482 4.2H2.85178ZM5.6 5.6C5.9866 5.6 6.3 5.9134 6.3 6.3V10.5C6.3 10.8866 5.9866 11.2 5.6 11.2C5.2134 11.2 4.9 10.8866 4.9 10.5V6.3C4.9 5.9134 5.2134 5.6 5.6 5.6ZM8.4 5.6C8.7866 5.6 9.1 5.9134 9.1 6.3V10.5C9.1 10.8866 8.7866 11.2 8.4 11.2C8.0134 11.2 7.7 10.8866 7.7 10.5V6.3C7.7 5.9134 8.0134 5.6 8.4 5.6Z"
				fill={fillIcon}
			/>
		</svg>
	);
};

export default RemoveBtnList;
