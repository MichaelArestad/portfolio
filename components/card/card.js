import cn from "classnames";
import Item from "../item/item";
import styles from "./card.module.scss";

export default function Card({
	addedClass,
	circles,
	className,
	children,
	compact,
	href,
	...props
}) {
	const hasCircles = () => {
		if (circles) {
			return styles.circles;
		}
	};

	const isCompact = () => {
		if (compact) {
			return styles.compact;
		}
	};

	const classes = cn(styles.card, hasCircles(), isCompact());

	const renderCard = () => {
		if (href) {
			return (
				<a href={href} className={classes} style={styles} {...props}>
					{children}
				</a>
			);
		} else {
			return (
				<Item className={classes} {...props}>
					{children}
				</Item>
			);
		}
	};

	return renderCard();
}
