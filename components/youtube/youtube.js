import styles from "./youtube.module.scss";

export default function YouTube({ src }) {
	return (
		<div className={styles.wrapper}>
			<iframe
				className={styles.iframe}
				width="1344"
				height="756"
				src={src}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
