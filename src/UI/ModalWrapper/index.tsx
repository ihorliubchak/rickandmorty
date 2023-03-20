import React, { FC, useRef } from "react";
import styles from "./ModalWrapper.module.css";
import CloseIcon from "../../assets/icons/CloseIcon.svg";

export interface ModalWrapperProps {
	children: React.ReactNode;
	onClose: () => void;
	show: boolean;
	title: string;
	modalStyle?: string;
  }

const ModalWrapper: FC<ModalWrapperProps> = ({ children, show, onClose, title, modalStyle }) => {
	const modalRef = useRef(null);

	const clickModal = (e: React.SyntheticEvent<EventTarget>) => {
		if (e.target === modalRef.current) {
			onClose();
		}
	};

	if (!show) {
		return null;
	}

	return (
		<div ref={modalRef} className={`${styles.bg} ${styles.bgBlur}`} onClick={clickModal}>
			<div className={`${styles.container} ${styles.containerBlur} ${modalStyle}`} >
				<div>
					<div className={styles.closeIconContainer} onClick={onClose}>
						<img src={CloseIcon} className={styles.icon} alt="close-icon" />
					</div>
					<div className={styles.titleContainer}>
						<span className={styles.titleText}>{title}</span>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

ModalWrapper.defaultProps = {
	show: false,
	onClose: () => {},
	title: "",
};

export default ModalWrapper;
