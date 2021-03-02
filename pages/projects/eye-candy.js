import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import SEO from "../../components/seo";
import styles from "../../styles/eye-candy.module.scss";

import CheckboxGrid from "../../components/candy/checkbox-grid/checkbox-grid";
import DarkNet from "../../components/candy/darknet/darknet";
import Laced from "../../components/candy/laced/laced";
import TheVoid from "../../components/candy/the-void/the-void";
import VaultPress from "../../components/candy/vaultpress/vaultpress";
import WcDen from "../../components/candy/wcden/wcden";

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
					<VaultPress />
					<Laced />
					<WcDen />
					<DarkNet />
					<CheckboxGrid />
					<TheVoid />
					<WcDen icon="speaker" />
					<WcDen icon="heart" />
				</Card>
			</main>
		</Layout>
	);
}
