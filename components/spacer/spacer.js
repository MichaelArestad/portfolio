import styles from "./spacer.module.scss";

export default function Spacer({ height = "var( --unit-5 )" }) {
	return <div style={{ height: height }} className={styles.spacer} />;
}
