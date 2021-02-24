import styles from "./fancy-link.module.scss";
import Link from "next/link";
import cn from "classnames";

export default function FancyLink({
	link,
	href,
	inverted,
	surprise,
	children,
}) {
	let surpriseContent;
	if (surprise) {
		surpriseContent = '"' + surprise + '"';
	}

	const hasSurprise = () => {
		if (surprise) {
			return styles.hasSurprise;
		}
	};

	const isInverted = () => {
		if (inverted) {
			return styles.isInverted;
		}
	};

	if (link) {
		return (
			<span
				className={cn(styles.fancyLink, hasSurprise(), isInverted())}
				style={{ "--surprise-content": surpriseContent }}
			>
				<Link href={href}>{children}</Link>
			</span>
		);
	} else {
		return (
			<a
				href={href}
				className={cn(styles.fancyLink, hasSurprise(), isInverted())}
				style={{ "--surprise-content": surprise }}
			>
				{children}
			</a>
		);
	}
}
