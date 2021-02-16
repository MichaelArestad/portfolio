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

	if ( zag ) {
		return (
			<header className={ cn( styles.hero, className ) } style={{ background: bg, color: textColor }}>
				<div  className={ isBigZag() } style={{ "--color-zag": zagColor }}></div>
				<div className={ styles.heroInfo }>
					<h1 className={ styles.title }>{ title }</h1>
					<h2 className={ styles.description }>{ description }</h2>
				</div>
				{ children }
			</header>
		);
	} else {
		return (
			<header className={ cn( styles.hero, className ) } style={{ background: bg, color: textColor }}>
				<div className={ styles.heroInfo }>
					<h1 className={ styles.title }>{ title }</h1>
					<h2 className={ styles.description }>{ description }</h2>
				</div>
				{ children }
			</header>
		);
	}
}
