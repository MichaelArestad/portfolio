import styles from "./avatar.module.scss";

export default function Avatar({ size = 160 }) {
	const src = `https://secure.gravatar.com/avatar/e8b4c8470f61ff15b9c98f7a1556c16b?s=${size * 2}`;
	return (
		<>
			{/* eslint-disable-next-line */}
			<img
				className={styles.avatar}
				alt="Michael Arestad's face"
				width={size}
				height={size}
				src={src}
			/>
		</>
	);
}
