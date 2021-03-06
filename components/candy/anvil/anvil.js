import Card from "../../card/card";
import styles from "./anvil.module.scss";

export default function Anvil({}) {
	return (
		<Card addedClass={styles.container}>
			<svg
				className={styles.anvil}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 400 86.6"
			>
				<path
					fill="#ffffff"
					d="M42.4 85.4h16.1l3.4-1.4s2.6-5.3 17.4-5.3 17 5.3 17 5.3l4 1.4h16v-8.9l-8.5-8.6C96.7 64.4 94 60.9 94 55.1s2.3-11.7 13.4-17c11.1-5.3 29.6-6.8 30.7-7.9 1.1-1.1 1-4.8 1.3-5.5s1-.7 1-.7v-5.3h-85l-.2 3.7s-1.2.9-2.8 1-5.2.1-5.2.1v1.7s-9 .2-21.4.2c-10.3 0-20.4-.5-23.8-.7-.7 0-1.8-.2-2 .2-.2.4.2 1 .5 1.5.3.4 5.9 8.3 20.9 14.5C36.6 47 43.2 47 48.6 47.5c6.9.7 14.7 1.9 14.7 9.4 0 9-7.2 9.4-13.7 10.7l-7.1 7.8-.1 10zM180.2 2.1c1.9 4.6 4.4 10.2 7.2 16.9 2.9 6.7 5.8 13.5 8.9 20.6 3.1 7 6 13.9 8.9 20.6 2.9 6.7 5.3 12.3 7.3 16.8.6 1.4 1.7 2.7 3.4 3.9.9.6 1.8 1.1 2.7 1.5.9.4 1.6.8 2.1 1.1.4.3.6.5.8.8.1.2.1.3.1.5 0 .1 0 .3-.1.4-.1.2-.4.4-.7.4H201c-.4 0-.7-.1-1.1-.4-.4-.3-.6-.6-.7-.9-.1-.1-.1-.2-.1-.3 0-.4.2-.7.7-1.1.4-.4.8-.7 1.3-1.1.5-.4.9-.9 1.1-1.6.1-.3.2-.7.2-1.1 0-.7-.2-1.4-.5-2.2l-8.6-20h-34c-1.4 3.3-2.8 6.7-4.2 10s-2.8 6.6-4.2 10c-.4.8-.5 1.5-.6 2.1 0 .3-.1.5-.1.8 0 .4.1.8.2 1.1.1.5.3.9.6 1.3.3.3.5.7.6 1 0 .3.1.5.1.6 0 .1 0 .3-.1.4-.3.8-.7 1.2-1.3 1.2h-15.1c-.4 0-.7-.1-.8-.4 0 0 0-.1-.1-.3 0-.1 0-.3.1-.6.2-.5.9-1 2-1.5.6-.3 1.2-.6 1.9-.9.7-.3 1.4-.7 2.1-1.2 1.4-1 2.5-2.2 3.2-3.7L176.7 2c-.1.1 3.5.1 3.5.1zm11 50.1L176 16.6c-2.5 6-5 11.9-7.4 17.8-2.5 5.9-4.9 11.8-7.4 17.8h30zm51.7-16.6c2.1-.8 4-1.5 5.7-2.2 1.6-.6 3.2-1.2 4.7-1.7 3.6-1.2 7.3-2.1 11.2-2.5.5 0 1-.1 1.5-.1 3.3 0 6.4 1.1 9.3 3.3 4.7 3.6 7.1 11.4 7.1 23.3v21c0 2.5 1 4.1 2.9 4.8 1.9.7 2.9 1.5 2.9 2.5 0 .8-.4 1.2-1.2 1.2h-14.2c-.7 0-1-.3-1-.8V55.9c0-8.5-1.8-14.5-5.3-18-2.3-2.2-5-3.3-8.3-3.3-1.9 0-3.9.4-6.1 1.1-.9.3-1.9.7-3.2 1.2-1.3.5-2.4.9-3.4 1.3-.9.4-1.8.7-2.5.9v37.8c0 2.5 1 4.1 2.9 4.8 1.9.7 2.9 1.5 2.9 2.5 0 .8-.4 1.2-1.2 1.2h-19.8c-.8 0-1.2-.4-1.2-1.2 0-1 1-1.8 2.9-2.5s2.9-2.3 2.9-4.8V39.5c0-2.5-1-4-2.9-4.7-1.9-.7-2.9-1.6-2.9-2.6 0-.8.4-1.2 1.2-1.2 2.6-.1 5.1-.5 7.6-1.2s5-1.5 7.5-2.3v8.1zm62.4 2.8l15.3 37.3L334 43.6c.4-.8.5-1.6.5-2.4 0-1.4-.5-2.7-1.6-4l-1.9-2.3 5.3-4.1c.2-.2.4-.4.6-.4.3 0 .6.2.9.5l3.3 3.3c.7.7 1 1.6 1 2.6 0 .6-.1 1.2-.4 1.9-.6 1.9-1.5 4.1-2.7 6.5l-18 40.1c-.2.4-.4.7-.6.9-.2.2-.4.3-.6.3h-4.9c-.3 0-.5-.1-.6-.4-.1-.1-.3-.4-.4-.9-.2-.5-.3-.8-.4-1.1l-19.1-45.5c-.7-1.5-1.6-2.6-2.9-3.5-.8-.5-1.6-.9-2.4-1.3-.8-.4-1.4-.7-1.9-1.1-.3-.2-.5-.4-.7-.8 0-.2-.1-.3-.1-.4s0-.2.1-.3c.1-.2.3-.3.6-.3h19.2c.3 0 .6.1.9.3.3.3.5.5.6.8 0 .1.1.2.1.3 0 .4-.2.7-.6 1.1-1.3 1.2-2 2-2.2 2.4-.1.4-.2.7-.2 1.1 0 .5.1 1 .4 1.5zm59.2 38.5c0 2.5 1 4.1 2.9 4.8 1.9.7 2.9 1.5 2.9 2.5 0 .8-.4 1.2-1.2 1.2h-19.8c-.8 0-1.2-.4-1.2-1.2 0-1 1-1.8 2.9-2.5s2.9-2.3 2.9-4.8V39.5c0-2.5-1-4-2.9-4.7-1.9-.7-2.9-1.6-2.9-2.6 0-.8.4-1.2 1.2-1.2 2.6-.1 5.1-.5 7.6-1.2s5-1.5 7.5-2.3l.1 49.4zm-5.3-73.2c4.2 0 6.4 2.1 6.4 6.4 0 4.3-2.1 6.5-6.4 6.5-4.2 0-6.4-2.2-6.4-6.5.1-4.3 2.2-6.4 6.4-6.4zm35 73.2c0 2.5 1 4.1 2.9 4.8 1.9.7 2.9 1.5 2.9 2.5 0 .8-.4 1.2-1.2 1.2H379c-.8 0-1.2-.4-1.2-1.2 0-1 1-1.8 2.9-2.5s2.9-2.3 2.9-4.8V12c0-2.5-1-4.1-2.9-4.8-1.9-.7-2.9-1.6-2.9-2.6 0-.8.4-1.2 1.2-1.2 2.6-.1 5.1-.5 7.6-1.2s5-1.4 7.5-2.3v77z"
				/>
			</svg>
		</Card>
	);
}
