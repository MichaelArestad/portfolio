import styles from "./hero.module.scss";
import cn from "classnames";

export default function Hero({ 
	title,
	description,
	backgroundColor,
	textColor,
	addedClass,
	className,
	compact,
	zag,
	zagColor,
	children }) {

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

	const isCompact = () => {
		if ( compact ) {
			return styles.isCompact;
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
		<header className={ cn( styles.hero, className, addedClass, isCompact() ) } style={{ background: backgroundColor, color: textColor }}>
			{ hasZag() }
			{ children }
			{ hasHeroInfo() }
		</header>
	);
}
