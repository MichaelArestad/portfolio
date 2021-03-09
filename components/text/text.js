import styles from "./text.module.scss";
import cn from "classnames";

export default function Text({ caption, size, className, children }) {
	const getSize = () => {
		switch (size) {
			case "s":
				return styles.s;
			case "m":
				return styles.m;
			case "l":
				return styles.l;
			case "xl":
				return styles.xl;
			case "xxl":
				return styles.xxl;
			default:
				break;
		}
	};

	const isCaption = () => {
		if (caption) {
			return styles.caption;
		}
	};

	return (
		<p className={cn(styles.text, className, getSize(), isCaption())}>
			{children}
		</p>
	);
}
