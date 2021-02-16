import Link from "next/link";
import styles from "./back.module.scss";

export default function Back({ href, children }) {
	const label = "< - " + children;

	return (
		<div className={ styles.back }><Link href={ href }>{ label }</Link></div>
	);
}
