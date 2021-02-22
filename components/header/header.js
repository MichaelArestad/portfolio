import Link from "next/link";
import styles from "./header.module.scss";

export default function Header({ home }) {
	if ( home ) {
		return (
			<header className={styles.header}>
				<h1 className={styles.title}>Michael Arestad</h1>
			</header>
		);
	} else {
		return (
			<header className={styles.header}>
				<h1 className={styles.title}>
					<Link href="/">Michael Arestad</Link>
				</h1>
			</header>
		);
	}
}
