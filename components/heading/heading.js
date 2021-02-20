import styles from "./heading.module.scss";
import cn from "classnames";

export default function Heading({ size = 3, className, children }) {
	// const isTextBig = () => {
	// 	if ( isBig ) {
	// 		return styles.isBig;
	// 	}
	// };

	if ( size === 3 ){
		return	(
			<h3 className={ cn( styles.heading, className ) }>{ children }</h3>
		);
	}
}
