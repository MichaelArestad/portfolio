import Link from "next/link";
import SEO from "../../components/seo";
import Card from "../../components/card/card";
import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
import Back from "../../components/back/back";
import Hero from "../../components/hero/hero";
import styles from "../../styles/eye-candy.module.scss";

import CheckboxGrid from "../../components/candy/checkbox-grid/checkbox-grid";
import DarkNet from "../../components/candy/darknet/darknet";
import VaultPress from "../../components/candy/vaultpress/vaultpress";
import Sixty from "../../components/candy/sixty/sixty";

export default function Home() {
	return (
		<Layout
			addedStyle={styles.container}
			backgroundColor="#373737"
			textColor="#ffffff"
		>
			<SEO title="Projects" />

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
					<Card addedClass={styles.theVoid}></Card>

					{/* <Sixty /> */}
					<VaultPress />
					<DarkNet />

					{/* <Card className={ styles.discoBars }>
						<img src="/images/discobars.gif" width="498" height="400" />
					</Card> */}

					<CheckboxGrid />
				</Card>
			</main>
		</Layout>
	);
}
