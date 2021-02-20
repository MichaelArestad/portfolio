import Header from "../header/header";
import PageMeta from "../page-meta";
import cn from "classnames";
import styles from "./layout.module.scss";

export default function Layout({ addedStyle, backgroundColor, textColor, header, children }) {
	const hasHeader = () => {
		if (header === true) {
			return <Header />;
		}
	};

	return (
		<div className={cn(styles.container, addedStyle)} style={{ background: backgroundColor, color: textColor }}>
			<PageMeta />
			{ hasHeader() }
			{children}
		</div>
	);
}
