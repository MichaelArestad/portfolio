import Link from "next/link";
import styles from "./back.module.scss";
import cn from "classnames";

export default function Back({ href, className, children }) {
	const label = "< - " + children;

	return (
		<div className={ cn( styles.back, className ) }><Link href={ href }>{ label }</Link></div>
	);
}
