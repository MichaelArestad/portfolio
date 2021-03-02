import Card from "../../card/card";
import styles from "./laced.module.scss";

export default function Laced({}) {
	return (
		<Card addedClass={styles.container}>
			<div contentEditable className={styles.laced}>
				try out laced go ahead and edit this to create your own unique patterns
			</div>
		</Card>
	);
}
