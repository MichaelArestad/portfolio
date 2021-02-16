import styles from "./card.module.scss";
import cn from "classnames";

export default function Card({ className, children }) {
	return	<div className={ cn( styles.card, className ) }>{ children }</div>;
}
