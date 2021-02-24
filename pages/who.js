import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import HeroContent from "../components/hero/hero-content";
import Card from "../components/card/card";
import List from "../components/list/list";
import Back from "../components/back/back";
import Avatar from "../components/avatar/avatar";

export default function Home() {
	return (
		<Layout>
			<SEO title="whoami" />

			<main>
				<Hero
					title="Michael Arestad"
					description="product designer, front-end developer, open source software fanatic, type nerd, graphic artist, and mediocre (at best) musician"
					backgroundColor="#000"
					textColor="#fff"
				>
					<Back href="/">Home</Back>
					<HeroContent>
						<Avatar size="140" />
					</HeroContent>
				</Hero>

				<Card>
					<List title="Experience" minimal condensed mono>
						<li>
							<a href="https://automattic.com/">Automattic</a>
						</li>
						<li>
							<a href="https://wordpress.org/">WordPress</a>
						</li>
						<li>State of Colorado</li>
					</List>

					<List title="Speaking" minimal condensed mono>
						<li>Develop Denver</li>
						<li>WordCamp St. Louis</li>
						<li>WordCamp Denver</li>
						<li>WordCamp San Francisco</li>
						<li>WordCamp US</li>
						<li>WordCamp Europe</li>
					</List>

					<List title="Cyber" minimal condensed mono>
						<li>
							<a href="https://michael.blog/">blog</a>
						</li>
						<li>
							<a href="https://github.com/MichaelArestad">github</a>
						</li>
						<li>
							<a href="https://twitter.com/michaelarestad">twitter</a>
						</li>
					</List>

					<List title="Sound" minimal condensed mono>
						<li>
							<a href="https://www.youtube.com/channel/UCTkmzS2HNUxh4MnPva201ZA">
								youtube
							</a>
						</li>
						<li>
							<a href="https://soundcloud.com/heckseven">soundcloud</a>
						</li>
						<li>
							<a href="https://www.instagram.com/heckseven/">insta</a>
						</li>
					</List>
				</Card>
			</main>
		</Layout>
	);
}
