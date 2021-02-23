import cn from "classnames";
import styles from "./item.module.scss";


export default function Item({
	backgroundColor,
	width,
	textColor,
	className,
	addedClass,
	children,
	style
}) {

	const howWide = () => {
		if ( width ) {
			switch ( width ) {
				case "small":
					return styles.isSmall;
				case "medium":
					return styles.isMedium;
				case "large":
					return styles.isLarge;
				default:
					break;
			}
		}
	};

	const styling = {
		backgroundColor: backgroundColor,
		color: textColor
	};

	return <div style={{ ...style, ...styling }} className={ cn( className, addedClass, howWide() ) }>{ children }</div>
}