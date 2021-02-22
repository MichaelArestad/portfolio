import styles from "./text.module.scss";
import cn from "classnames";

export default function Text({ isBig, caption, className, children }) {
	const isTextBig = () => {
		if ( isBig ) {
			return styles.isBig;
		}
	};

	const isCaption = () => {
		if ( caption ) {
			return styles.caption;
		}
	}

	return	(
		<p className={ cn( styles.text, className, isTextBig(), isCaption() ) }>{ children }</p>
	);
}
