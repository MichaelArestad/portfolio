import styles from "./spacer.module.scss";

export default function Spacer({ height="40px" }) {
	return <div style={{ height: height }} className={ styles.spacer } />
}