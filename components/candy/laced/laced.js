import styles from "./laced.module.scss";

export default function Laced({}) {
	return (
		<textarea
			className={styles.laced}
			defaultValue="try out laced go ahead and edit this to create your own unique patterns"
		/>
	);
}
