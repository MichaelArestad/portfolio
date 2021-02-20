import Link from "next/link";
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
				<Hero>
					<Back href="/">Home</Back>
					<HeroContent><h2 className={ styles.heading }>PROjEcTs</h2></HeroContent>
				</Hero>
				
				<Card>
					<List minimal align="center">
						<li>
							<Link href="/projects/jetpack">Jetpack</Link>
						</li>
						<li>
							<Link href="/projects/gutenberg">Gutenberg</Link>
						</li>
						<li>
							<Link href="/projects/gutenberg">Gutenpack</Link>
						</li>
						<li>
							<Link href="/projects/gutenberg">Activity Log</Link>
						</li>
						<li>
							<Link href="/projects/gutenberg">WordPress.com</Link>
						</li>
					</List>
				</Card>
			</main>
		</Layout>
	);
}
