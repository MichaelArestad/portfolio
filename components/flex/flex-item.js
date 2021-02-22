import styles from "./flex.module.scss";

export default function FlexItem({ maxWidth, children }) {
	return (
		<div className={ styles.flexItem } style={{ maxWidth: maxWidth }}>{ children }</div>
	);
}