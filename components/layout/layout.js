import Header from "../header/header";
import PageMeta from "../page-meta";
import cn from "classnames";
import styles from "./layout.module.scss";

export default function Layout({ addedStyle, children }) {
	return (
		<div className={cn(styles.container, addedStyle)}>
			<PageMeta />
			<Header />
			{children}
		</div>
	);
}
