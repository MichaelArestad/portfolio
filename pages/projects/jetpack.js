import Link from "next/link";
import SEO from "../../components/seo";
import Card from "../../components/card/card";
import Layout from "../../components/layout/layout";
import Back from "../../components/back/back";
import Hero from "../../components/hero/hero";
import HeroContent from "../../components/hero/hero-content";

export default function Home() {
	return (
		<Layout backgroundColor="#e7e7e7">
			<SEO title="Projects" />

			<main>
				<Hero
					title="Jetpack"
					description="Safer. Faster. More traffic. Security, performance, and marketing tools made for WordPress sites by the WordPress experts"
					backgroundColor="#000"
					textColor="#fff">
					<Back href="/projects/">Projects</Back>
					<HeroContent>
						<svg
							width={140}
							height={140}
							viewBox="0 0 140 140"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M139.5 70c0 38.384-31.116 69.5-69.5 69.5S.5 108.384.5 70 31.616.5 70 .5s69.5 31.116 69.5 69.5z"
								stroke="#fff"
							/>
							<path
								d="M107.652 58.744l-33.68 65.303V58.744h33.68zM32.347 81.122l33.547-65.165v65.165H32.347z"
								stroke="#fff"
							/>
						</svg>
					</HeroContent>
				</Hero>

				<Card backgroundColor="#ffffff">
					<p>Jetpack is a WordPress plugin with over 5 million active installs. It is a collection of security, performance, and marketing tools designed to expand the capabilities of WordPress.</p>

					<p>I started work at Automattic in 2013 and spent a significant amount of my time working on Jetpack. When I joined the Jetpack team, the plugin was laden with broken flows and had no concrete plans for monetization.</p>

					<p>By the time I left Automattic in 2020, Jetpack was a profitable business. The plugin’s interface was entirely rebuilt using a design system shared with WordPress.com. It had a focused business model centered around backups and security. Jetpack’s website was redesigned into a sophisticated and flexible platform tying nicely into the plugin.</p>
					Test
				</Card>
			</main>
		</Layout>
	);
}
