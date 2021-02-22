import styles from "./fancy-link.module.scss";
import Link from "next/link";

export default function FancyLink({ link, href, children }) {
	if ( link ) {
		return <Link href={ href } className={ styles.fancyLink }>{ children }</Link>
	} else {
		return <a href={ href } className={ styles.fancyLink }>{ children }</a>
	}
}