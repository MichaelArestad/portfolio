import Header from "../header/header";
import PageMeta from "../page-meta";
import cn from "classnames";
import styles from "./layout.module.scss";
import SourceBadge from "../sourceBadge/souce-badge";

export default function Layout({ addedStyle, backgroundColor, textColor, header, home, children }) {
	const hasHeader = () => {
		if ( header === true ) {
			if( home ) {
				return <Header home />;
			} else {
				return <Header />;
			}
		}
	};

	return (
		<div className={ cn( styles.container, addedStyle ) } style={{ background: backgroundColor, color: textColor }}>
			<PageMeta />
			{ hasHeader() }
			{ children }
			<SourceBadge />
		</div>
	);
}
