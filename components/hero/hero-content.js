import styles from "./hero.module.scss";

export default function HeroContent({ children }) {
	return (
		<div className={ styles.heroContent }>
			{ children }
		</div>
	);
}
