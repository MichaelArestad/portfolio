import styles from "./text.module.scss";
import cn from "classnames";

export default function Text({ isBig, className, children }) {
	const isTextBig = () => {
		if ( isBig ) {
			return styles.isBig;
		}
	};

	return	(
		<p className={ cn( styles.text, className, isTextBig() ) }>{ children }</p>
	);
}
