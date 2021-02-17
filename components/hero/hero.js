import styles from "./hero.module.scss";
import cn from "classnames";

export default function Hero({ title, description, bg, textColor, className, zag, zagColor, children }) {
	const isBigZag = () => {
		if ( zag === "big" ) {
			return styles.bigZag;
		} else {
			return styles.zag;
		}
	};

	const zagDiv = (
		<div  className={ isBigZag() } style={{ "--color-zag": zagColor }}></div>
	);

	const hasZag = () => {
		if ( zag ) {
			return zagDiv;
		}
	};

	const heroInfo = (
		<div className={ styles.heroInfo }>
			<h1 className={ styles.title }>{ title }</h1>
			<h2 className={ styles.description }>{ description }</h2>
		</div>
	);

	const hasHeroInfo = () => {
		if ( title || description ) {
			return heroInfo;
		}
	};

	return (
		<header className={ cn( styles.hero, className ) } style={{ background: bg, color: textColor }}>
			{ hasZag() }
			{ hasHeroInfo() }
			{ children }
		</header>
	);
}
