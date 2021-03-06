import Card from "../../card/card";
import styles from "./aurora.module.scss";

export default function Aurora() {
	return (
		<Card addedClass={styles.container}>
			<svg
				className={styles.aurora}
				id="prefix__Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x={0}
				y={0}
				viewBox="0 0 360 57"
				xmlSpace="preserve"
			>
				<path
					fill="#fff"
					d="M25.1 1.3h3.8L54 55.5h-4.4l-6.8-15.1H11L4.2 55.5H0L25.1 1.3zm16 35.5L26.9 5.6 12.7 36.8h28.4zM83.3 56.4c-3.2 0-6.2-.5-8.9-1.5s-5-2.5-7-4.5-3.5-4.4-4.6-7.3c-1.1-2.9-1.6-6.2-1.6-10V1.6h4v31.1c0 6.4 1.6 11.3 4.8 14.8 3.2 3.5 7.7 5.2 13.4 5.2 2.7 0 5.2-.4 7.4-1.2 2.2-.8 4.1-2.1 5.7-3.7 1.6-1.6 2.8-3.7 3.6-6.2.8-2.5 1.3-5.3 1.3-8.5V1.6h4v31c0 3.8-.5 7.2-1.6 10.2-1.1 3-2.6 5.4-4.5 7.4s-4.3 3.5-7 4.5c-2.7 1.1-5.7 1.7-9 1.7zM120.5 1.6h22.6c3.3 0 6.3.5 8.8 1.4 2.6.9 4.7 2.2 6.3 3.9 1.3 1.3 2.3 2.8 3 4.5.7 1.7 1.1 3.6 1.1 5.5v.2c0 2.3-.4 4.3-1.2 6s-1.9 3.3-3.3 4.6c-1.4 1.3-3.1 2.3-5 3.1-1.9.8-4 1.3-6.3 1.7l17.8 23h-5.1L142 33.2h-17.5v22.3h-4V1.6zm22.2 28c2.3 0 4.3-.3 6.3-.8 1.9-.6 3.6-1.4 5-2.4 1.4-1.1 2.5-2.3 3.3-3.9.8-1.5 1.2-3.3 1.2-5.2v-.2c0-3.7-1.3-6.5-4-8.6-2.7-2.1-6.5-3.2-11.4-3.2h-18.4v24.3h18zM255 1.6h22.6c3.3 0 6.3.5 8.8 1.4 2.6.9 4.7 2.2 6.3 3.9 1.3 1.3 2.3 2.8 3 4.5.7 1.7 1.1 3.6 1.1 5.5v.2c0 2.3-.4 4.3-1.2 6s-1.9 3.3-3.3 4.6c-1.4 1.3-3.1 2.3-5 3.1-1.9.8-4 1.3-6.3 1.7l17.8 23h-5.1l-17.2-22.3H259v22.3h-4V1.6zm22.1 28c2.3 0 4.3-.3 6.3-.8 1.9-.6 3.6-1.4 5-2.4 1.4-1.1 2.5-2.3 3.3-3.9.8-1.5 1.2-3.3 1.2-5.2v-.2c0-3.7-1.3-6.5-4-8.6-2.7-2.1-6.5-3.2-11.4-3.2H259v24.3h18.1zM331.1 1.3h3.8L360 55.5h-4.4l-6.8-15.1H317l-6.8 15.1H306l25.1-54.2zm16 35.5L332.9 5.6l-14.2 31.2h28.4zM208.2 5.3c15.5 0 28.2 11.9 29.5 27 .1-.8.1-1.7.1-2.6C238 13.4 224.7 0 208.3 0s-29.7 13.2-29.7 29.6c0 .9.1 1.9.1 2.8 1.3-15.2 14-27.1 29.5-27.1z"
				/>
			</svg>
		</Card>
	);
}
