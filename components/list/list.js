import cn from "classnames";
import styles from "./list.module.scss";

export default function List({ title, minimal, condensed, align, children }) {
	const isMinimal = () => {
		if ( minimal ) {
			return styles.minimal;
		}
	};

	const isCondensed = () => {
		if ( condensed ) {
			return styles.condensed;
		}
	};

	const alignment = () => {
		switch ( align ) {
			case "center":
				return styles.center;
			case "right":
				return styles.right;
			default:
				break;
		}
	}

	if ( title ) {
		return (
			<div className={ styles.list }>
				<h3 className={ styles.title }>{ title }</h3>
				<ul className={ cn( isMinimal(), isCondensed(), alignment() ) }>{ children }</ul>
			</div>
		);
	} else {
		return <ul className={ cn( styles.list, isMinimal(), isCondensed(), alignment() ) }>{ children }</ul>;
	}
}
