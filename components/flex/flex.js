import styles from "./flex.module.scss";

export default function Flex({ 
	alignItems,
	justifyContent,
	children })
	{

	const styling = {
		alignItems: alignItems,
		justifyContent: justifyContent
	};

	return (
		<div className={ styles.flex } style={ styling }>{ children }</div>
	);
}