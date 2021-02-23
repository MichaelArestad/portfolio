import Header from "../header/header";
import PageMeta from "../page-meta";
import cn from "classnames";
import styles from "./layout.module.scss";
import SourceBadge from "../sourceBadge/souce-badge";
import { Fragment } from "react";

export default function Layout({ addedStyle, backgroundColor, textColor, header, home, children }) {
	const hasHeader = () => {
		if ( header === true ) {
			if( home ) {
				return (
					<Fragment>
						<div className={ styles.x } />
						<Header home />
					</Fragment>
				);
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
