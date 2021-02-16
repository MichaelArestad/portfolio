import styles from "./hero.module.scss";

export default function Hero({ title, description, bg, textColor, children }) {
	return (
		<header className={ styles.hero } style={{ background: bg, color: textColor }}>
			<div className={ styles.heroInfo }>
				<h1 className={ styles.title }>{ title }</h1>
				<h2 className={ styles.description }>{ description }</h2>
			</div>
			{ children }
		</header>
	);
}
