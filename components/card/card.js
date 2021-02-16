import styles from "./card.module.scss";
import cn from "classnames";

export default function Card({ href, className, children }) {
	if ( href ) {
		return	(
			<a href={ href } className={ cn( styles.cardLink, className ) }>{ children }</a>
		);
	} else {
		return	(
			<div className={ cn( styles.card, className ) }>{ children }</div>
		);
	}
}
