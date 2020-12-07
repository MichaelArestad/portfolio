import Header from "../header/header";
import PageMeta from "../page-meta";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<PageMeta />
			<Header />
			{children}
		</div>
	);
}
