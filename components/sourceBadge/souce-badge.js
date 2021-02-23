import styles from "./source-badge.module.scss";
import Text from "../text/text";

export default function SourceBadge({ children }) {
	return (
		<div className={ styles.sourceBadge }>
			<Text caption><a href="https://github.com/MichaelArestad/portfolio">view source</a></Text>
		</div>
	);
}