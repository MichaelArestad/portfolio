import cn from "classnames";
import styles from "./item.module.scss";

export default function Item({
	backgroundColor,
	centered,
	width,
	textColor,
	className,
	addedClass,
	children,
	style,
}) {
	const howWide = () => {
		if (width) {
			switch (width) {
				case "xs":
					return styles.xs;
				case "s":
					return styles.s;
				case "m":
					return styles.m;
				case "l":
					return styles.l;
				case "xl":
					return styles.xl;
				default:
					break;
			}
		}
	};

	const isCentered = () => {
		if (centered) {
			return styles.centered;
		}
	};

	const styling = {
		backgroundColor: backgroundColor,
		color: textColor,
	};

	return (
		<div
			style={{ ...style, ...styling }}
			className={cn(className, addedClass, howWide(), isCentered())}
		>
			{children}
		</div>
	);
}
