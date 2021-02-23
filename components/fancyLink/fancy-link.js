import styles from "./fancy-link.module.scss";
import Link from "next/link";

export default function FancyLink({ link, href, children }) {
	if ( link ) {
		return <span className={ styles.fancyLink }><Link href={ href }>{ children }</Link></span>
	} else {
		return <a href={ href } className={ styles.fancyLink }>{ children }</a>
	}
}