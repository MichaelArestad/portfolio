import cn from "classnames";
import styles from "./image.module.scss";

export default function Image({ src, width, height, alt, href, border, margin, caption }) {
	const hasBorder = () => {
		if ( border ) {
			return styles.hasBorder;
		}
	};

	const borderColor = () => {
		if ( border != "" ) {
			return { "--image-border-color": border };
		}
	}; 

	return (
		<img
			className={ cn( styles.image, hasBorder() )}
			style={ borderColor(), { margin: margin } }
			src={ src }
			width={ width }
			height={ height }
			alt={ alt } />
	);
}