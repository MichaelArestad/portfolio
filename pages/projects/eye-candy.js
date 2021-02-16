import Link from "next/link";
import SEO from "../../components/seo";
import Card from "../../components/card/card";
import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
import Back from "../../components/back/back";
import Hero from "../../components/hero/hero";
import styles from "../../styles/eye-candy.module.scss";

import CheckboxGrid from "../../components/candy/checkbox-grid/checkbox-grid";
import Sixty from "../../components/candy/sixty/sixty";

export default function Home() {
	return (
		<Layout addedStyle={ styles.container }>
			<SEO title="Projects" />

			<main>
				<Hero
					title="Eye candy"
					description="for the discerning individual"
					zag="big"
					bg="#ff0054"
					textColor="#fff">
					<Back href="/">Home</Back>
				</Hero>

				<Card className={ styles.eyeCandy }>
					<Card className={ styles.theVoid }></Card>

					{/* <Sixty /> */}

					<Card href="https://codepen.io/MichaelArestad/pen/pGalK" className={ styles.vaultPress }>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={250}
							height={250}
							viewBox="0 0 250 250"
						>
							<path
								fill="#464342"
								d="M32.131 53.343s22.733 113.6 94.368 176.51c1.759-1.539 3.457-3.139 5.155-4.74.22-.195.44-.391.66-.599.208-.195.428-.391.647-.599.623-.599 1.221-1.221 1.844-1.832.208-.208.403-.416.611-.624.208-.195.403-.403.61-.61a222.741 222.741 0 005.045-5.204c.195-.208.391-.415.574-.624.195-.208.391-.415.574-.623l1.734-1.881c.183-.22.391-.415.574-.635.183-.208.391-.403.574-.623 1.564-1.759 3.078-3.567 4.593-5.362.171-.22.367-.428.537-.648.183-.208.367-.415.538-.635.537-.635 1.038-1.295 1.564-1.93.171-.22.342-.44.513-.647.171-.22.342-.44.513-.647a268.136 268.136 0 004.264-5.497c.159-.208.317-.44.476-.648.171-.22.33-.44.489-.659.488-.66.977-1.32 1.454-1.979.159-.22.33-.44.488-.66.159-.22.318-.428.477-.66 1.343-1.844 2.639-3.726 3.921-5.594.147-.232.306-.452.452-.672.159-.22.318-.44.464-.66l1.356-2.016c.147-.232.293-.452.44-.672.147-.232.281-.452.428-.684a258.16 258.16 0 003.664-5.692c.147-.232.281-.452.415-.684.147-.22.281-.452.415-.684.415-.672.831-1.368 1.246-2.04.134-.232.281-.465.415-.684.134-.232.281-.452.415-.684 1.148-1.93 2.284-3.86 3.384-5.79.134-.232.269-.464.391-.696.134-.22.269-.452.403-.684.391-.696.794-1.38 1.185-2.076.122-.232.245-.464.378-.684.123-.232.244-.464.379-.696a387.18 387.18 0 003.163-5.876l.367-.696c.123-.232.232-.464.355-.696.367-.709.72-1.417 1.075-2.113.122-.232.244-.464.366-.709.123-.232.233-.464.355-.696a297.595 297.595 0 002.944-5.949c.122-.232.232-.477.342-.709.122-.232.232-.464.342-.708.342-.709.696-1.417 1.038-2.126.11-.232.22-.477.33-.709.11-.232.22-.476.33-.709.94-2.009 1.869-4.025 2.761-6.016.098-.232.208-.476.317-.709.098-.244.208-.476.306-.72.317-.721.623-1.442.941-2.162.109-.232.208-.477.317-.709.098-.244.208-.488.306-.72a400.966 400.966 0 002.565-6.086c.098-.245.208-.477.306-.721s.195-.488.293-.72c.306-.733.599-1.454.892-2.175.098-.244.183-.488.293-.733.098-.244.183-.476.281-.72a406.83 406.83 0 002.394-6.144c.086-.245.183-.488.269-.733.098-.245.183-.488.281-.733.269-.733.55-1.466.819-2.199.098-.244.183-.488.281-.732.086-.245.183-.489.269-.733a519.955 519.955 0 002.223-6.194c.086-.256.159-.488.245-.745.098-.245.171-.488.256-.733.256-.757.513-1.49.757-2.223.086-.244.171-.5.256-.745l.256-.733c.721-2.15 1.405-4.239 2.053-6.266.073-.245.146-.489.232-.746.085-.256.159-.488.232-.745.244-.757.476-1.503.696-2.235.086-.245.159-.501.232-.746.086-.244.159-.513.232-.757.684-2.211 1.295-4.312 1.881-6.315.073-.257.146-.501.22-.757.073-.245.134-.501.208-.746l.647-2.26c.073-.269.134-.501.208-.757.073-.269.135-.513.208-.757a356.109 356.109 0 001.686-6.389c.073-.268.134-.501.196-.757.073-.268.134-.513.195-.769.196-.806.391-1.576.562-2.285l.183-.769c.061-.245.134-.525.183-.757.794-3.347 1.161-5.204 1.161-5.204L126.5 20.142 32.131 53.343zm98.374 166.396c-.208.195-.415.403-.623.61-.635.611-1.27 1.21-1.918 1.808-.22.208-.44.403-.66.599-.208.208-.427.403-.647.599l-.159-.049v-5.804l4.618 1.625-.611.612zm9.235-9.529c-.196.208-.391.403-.587.611-.574.635-1.173 1.258-1.759 1.881-.183.208-.379.415-.574.623-.196.208-.391.415-.587.61l-9.735-3.42V204.725l13.803 4.85c-.182.208-.377.416-.561.635zm8.392-9.833c-.171.208-.355.427-.525.635-.525.647-1.051 1.295-1.575 1.93-.183.22-.355.44-.525.647-.183.208-.355.428-.525.647l-18.482-6.511V191.934l22.159 7.794c-.173.222-.356.429-.527.649zm63.887-130.923c-.073.257-.146.489-.22.757-.196.733-.415 1.49-.635 2.26-.073.244-.146.5-.22.745-.074.256-.134.501-.208.757L192.34 67.5l-2.43 6.12 18.934 6.67c-.073.244-.159.5-.232.745-.073.256-.146.501-.232.757-.232.745-.452 1.466-.696 2.235-.073.245-.159.501-.232.746-.086.244-.171.5-.245.745l-19.325-6.804-2.444 6.12 19.716 6.939c-.086.245-.171.488-.256.745-.086.245-.159.489-.245.746-.256.72-.513 1.466-.769 2.211-.086.245-.171.488-.257.745l-.256.733-19.96-7.024-2.431 6.12 20.168 7.097a17.99 17.99 0 00-.269.745c-.098.245-.171.477-.269.733-.269.72-.55 1.466-.831 2.187-.086.245-.183.488-.281.733-.086.245-.183.488-.269.733l-25.579-9.003c-.77 1.1-1.173 2.065-1.185 2.089l-.378.941-1.21 2.981 25.958 9.137c-.098.245-.196.477-.293.72-.098.245-.183.489-.281.733-.293.721-.599 1.442-.892 2.175-.098.232-.208.476-.305.72-.098.245-.196.477-.293.72l-25.958-9.124-2.48 6.107 25.86 9.104c-.098.232-.208.477-.305.72-.11.232-.208.477-.318.709-.305.72-.623 1.442-.941 2.162-.098.232-.22.477-.318.709-.109.245-.22.477-.33.721l-25.701-9.054-2.48 6.123 25.433 8.942c-.109.232-.232.476-.341.702-.11.244-.22.476-.33.708l-1.014 2.138c-.11.233-.22.477-.342.709-.11.232-.22.477-.342.709l-25.127-8.838-2.48 6.102 24.663 8.685-.367.696-.367.696c-.354.709-.732 1.405-1.099 2.101-.123.232-.232.476-.367.709-.123.232-.232.464-.355.696l-24.162-8.502-2.479 6.108 23.466 8.258c-.122.232-.256.464-.378.696-.134.232-.256.464-.379.696-.391.684-.782 1.38-1.185 2.077-.123.232-.256.452-.391.684-.134.233-.269.465-.391.684l-22.794-8.013-2.479 6.107 21.865 7.696c-.134.232-.281.452-.415.684-.134.22-.281.452-.415.684-.415.684-.818 1.368-1.246 2.04-.134.232-.269.464-.415.684-.134.232-.281.452-.427.684l-21.011-7.403-2.48 6.12 19.838 6.975c-.159.232-.306.452-.452.672-.146.22-.305.44-.452.672-.452.672-.916 1.332-1.368 2.003l-.452.672c-.159.22-.305.44-.452.672l-18.714-6.596-2.138 5.253h-2.809l19.703 6.926-.476.66-.477.659-1.466 1.979c-.159.22-.33.427-.501.647-.158.22-.33.44-.5.659l-26.434-9.308v-2.224h-12.951L80.92 102.302l-.378-.941c-.013-.049-2.077-5.216-6.352-5.216h-2.125L60.337 66.682h34.827l31.335 78.713 4.043-10.145-4.043-1.43V128.017l6.071 2.138 2.443-6.12-8.514-2.996V115.236l10.542 3.701 2.43-6.12-12.973-4.568V102.446l15 5.277 2.444-6.12-17.444-6.132V89.671l19.472 6.84 2.431-6.12-21.903-7.708V76.879l23.93 8.429 2.443-6.132-26.373-9.271V64.102l28.401 9.992 2.431-6.132-30.832-10.847V51.311l43.658 15.367h19.837L126.499 44.34V38.537l85.728 30.16a13.3 13.3 0 00-.208.757zm3.042-11.714c-.061.256-.11.488-.183.769-.171.697-.367 1.466-.562 2.285-.061.244-.134.501-.195.757-.061.244-.134.513-.196.757L126.499 31.55V25.747l88.746 31.223c-.062.245-.123.514-.184.77zm10.835-18.677L131.532 5.861a15.077 15.077 0 00-10.044 0L27.111 39.063c-7.06 2.492-11.287 9.907-9.821 17.26.977 4.838 24.614 119.391 99.226 184.903a15.137 15.137 0 009.983 3.774c3.689 0 7.232-1.343 9.993-3.774 74.611-65.511 98.261-180.065 99.226-184.903 1.465-7.353-2.75-14.768-9.822-17.26zm4.41 16.173c-.953 4.764-24.224 117.546-97.455 181.849-3.506 3.078-9.183 3.078-12.683 0C46.936 172.782 23.666 60 22.701 55.236c-.928-4.666 1.747-9.381 6.242-10.969l94.373-33.202a9.4 9.4 0 013.182-.55c1.1 0 2.175.183 3.2.55l94.364 33.202c4.497 1.587 7.172 6.303 6.244 10.969z"
							/>
						</svg>
					</Card>

					{/* <Card className={ styles.discoBars }>
						<img src="/images/discobars.gif" width="498" height="400" />
					</Card> */}

<Card className={ styles.darknet }>
						<svg
							className={ styles.darknetBeacon }
							width={26}
							height={213}
							viewBox="0 0 26 213"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								fill: "white",
							}}
						>
							<g filter="url(#shadow)">
								<path
									className={ styles.beacon__d }
									d="M5.59259 1H1.03704H1V5.59259H1.03704V24.963H5.59259L24 15.7778V7.44444H19.4444V12.7778L5.59259 19.7037V5.59259H24V1H5.59259Z"
								/>
								<g className={ styles.beacon__a }>
									<path d="M13.037 32.1482V32.1111H1V36.7037H11.6296L19.6296 40.9259V56.1482H24V37.9259L13.037 32.1482Z" />
									<path d="M3.2963 41.8148H1V56.1482H5.59259V46.4074H8.62963H15.2963V43.8889L11.3333 41.8148H3.2963Z" />
								</g>
								<path
									className={ styles.beacon__r }
									d="M5.59259 81.963L12.5185 78.4815L19.4444 81.963V87.2963H24V78.963L17.7778 75.8518L24 72.7407V67.8889V63.2963H19.4074H1V67.8889H19.4074V69.7407L1 78.963V87.2963H5.59259V81.963Z"
								/>
								<g className={ styles.beacon__k }>
									<path d="M5.59259 94.4445H1V118.407H5.59259V94.4445Z" />
									<path d="M24.0001 94.4445H19.4075V100.889L13.5927 103.778V109.074L19.4075 111.963V118.407H24.0001V109L18.8519 106.407L24.0001 103.852V94.4445Z" />
								</g>
								<g className={ styles.beacon__n }>
									<path d="M5.59259 139.778H1V149.519H5.59259V139.778Z" />
									<path d="M19.4444 137.815L5.59259 130.889V125.556H1V133.889L19.4074 143.074V149.518H24V145.63V125.556H19.4444V137.815Z" />
								</g>
								<g className={ styles.beacon__e }>
									<path d="M1 180.667H5.59259H24V176.074H5.59259V175.333V170.037L1 172.333V176.074V180.667Z" />
									<path d="M10.8149 166.481V171.074H19.1482L21.4075 166.481H16.1482H10.8149Z" />
									<path d="M24 156.667H1V161.259H24V156.667Z" />
								</g>
								<g className={ styles.beacon__t }>
									<path d="M7.44444 207.185H1V211.778H10.4074L19.6296 192.37H25V187.815H16.6667L7.44444 207.185Z" />
									<path d="M10.7407 187.815H1V192.407H10.7407V187.815Z" />
								</g>
							</g>
							<defs>
								<filter id="shadow">
									<feDropShadow dx={-2} dy={2} stdDeviation={0} floodColor="#BD10E0" />
									<feDropShadow dx={2} dy={-2} stdDeviation={0} floodColor="#009BFF" />
								</filter>
							</defs>
						</svg>
					</Card>

					<CheckboxGrid />
				</Card>



				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
			</main>
		</Layout>
	);
}
