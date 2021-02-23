import FancyLink from "../components/fancyLink/fancy-link";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import HeroContent from "../components/hero/hero-content";
import Back from "../components/back/back";
import Card from "../components/card/card";
import List from "../components/list/list";
import styles from "../styles/projects.module.scss";

export default function Home() {
	return (
		<Layout addedStyle={ styles.container } backgroundColor="#FFE600">
			<SEO title="Projects" />

			<main className={ styles.main }>
				<Hero compact addedClass={ styles.hero }>
					<Back href="/">Home</Back>
					<HeroContent><h2 className={ styles.heading }>PROjEcTs</h2></HeroContent>
				</Hero>
				
				<Card>
					<List className={ styles.list } minimal mono align="center">
						<li>
							<FancyLink link href="/projects/jetpack">Jetpack</FancyLink>
						</li>
						<li>
							<FancyLink link href="/projects/wordpressdotcom">WordPress.com</FancyLink>
						</li>
						<li>
							<FancyLink link href="/projects/gutenberg">Gutenberg</FancyLink>
						</li>
						<li>
							<FancyLink link href="/projects/eye-candy">Eye Candy</FancyLink>
						</li>
					</List>
				</Card>
			</main>
		</Layout>
	);
}
