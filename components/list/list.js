import cn from "classnames";
import styles from "./list.module.scss";

export default function List({ title, className, minimal, mono, condensed, align, children }) {
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

	const isMono = () => {
		if ( mono ) {
			return styles.mono;
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
				<ul className={ cn( isMinimal(), isCondensed(), isMono(), alignment() ) }>{ children }</ul>
			</div>
		);
	} else {
		return <ul className={ cn( styles.list, isMinimal(), isCondensed(), isMono(), alignment(), className ) }>{ children }</ul>;
	}
}
