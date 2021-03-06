import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import SEO from "../../components/seo";
import styles from "../../styles/eye-candy.module.scss";

import Anvil from "../../components/candy/anvil/anvil";
import AsciiRocketeer from "../../components/candy/ascii-rocketeer/ascii-rocketeer";
import Aurora from "../../components/candy/aurora/aurora";
import CheckboxGrid from "../../components/candy/checkbox-grid/checkbox-grid";
import DarkNet from "../../components/candy/darknet/darknet";
import EchoHelloWorld from "../../components/candy/echo-hello-world/echo-hello-world";
import Laced from "../../components/candy/laced/laced";
import TheVoid from "../../components/candy/the-void/the-void";
import VaultPress from "../../components/candy/vaultpress/vaultpress";
import WcDen from "../../components/candy/wcden/wcden";
import WpPixelated from "../../components/candy/wp-pixelated/wp-pixelated";

export default function Home() {
	return (
		<Layout
			addedStyle={styles.container}
			backgroundColor="#373737"
			textColor="#ffffff"
		>
			<SEO title="Eye Candy" />

			<main>
				<Hero
					title="Eye candy"
					description="a design and code playground"
					zag="big"
					backgroundColor="#FF5254"
					textColor="#fff"
				>
					<Back href="/projects/">Projects</Back>
				</Hero>

				<Card addedClass={styles.eyeCandy}>
					<div className={styles.container}>
						<DarkNet />
						<AsciiRocketeer />
						<WpPixelated />
						<VaultPress />
						<EchoHelloWorld />
						<Laced />
						<WcDen />
						<WcDen icon="speaker" />
						<Anvil />
						<CheckboxGrid />
						<Aurora />
						<TheVoid />
						<WcDen icon="heart" />
					</div>
				</Card>
			</main>
		</Layout>
	);
}
