import styles from "./flex.module.scss";

export default function Flex({
	alignItems,
	flexDirection,
	justifyContent,
	children,
	...props
}) {
	const styling = {
		alignItems: alignItems,
		flexDirection: flexDirection,
		justifyContent: justifyContent,
	};

	return (
		<div className={styles.flex} style={styling} {...props}>
			{children}
		</div>
	);
}
