import SEO from "../../components/seo";
import Card from "../../components/card/card";
import Layout from "../../components/layout/layout";
import Back from "../../components/back/back";
import Hero from "../../components/hero/hero";
import styles from "../../styles/eye-candy.module.scss";

import CheckboxGrid from "../../components/candy/checkbox-grid/checkbox-grid";
import DarkNet from "../../components/candy/darknet/darknet";
import VaultPress from "../../components/candy/vaultpress/vaultpress";
import TheVoid from "../../components/candy/the-void/the-void";
import Laced from "../../components/candy/laced/laced";

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
					backgroundColor="#ff0054"
					textColor="#fff"
				>
					<Back href="/projects/">Projects</Back>
				</Hero>

				<Card addedClass={styles.eyeCandy}>
					<VaultPress />
					<Laced />
					<CheckboxGrid />
					<DarkNet />
					<TheVoid />
				</Card>
			</main>
		</Layout>
	);
}
