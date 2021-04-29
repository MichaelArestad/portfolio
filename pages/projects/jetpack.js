import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Flex from "../../components/flex/flex";
import FlexItem from "../../components/flex/flex-item";
import Heading from "../../components/heading/heading";
import Hero from "../../components/hero/hero";
import HeroContent from "../../components/hero/hero-content";
import Image from "../../components/image/image";
import Item from "../../components/item/item";
import Layout from "../../components/layout/layout";
import Link from "next/link";
import SEO from "../../components/seo";
import Spacer from "../../components/spacer/spacer";
import Text from "../../components/text/text";
import GalleryOverlap from "../../components/gallery-overlap/gallery-overlap";

export default function Home() {
	return (
		<Layout backgroundColor="#e9eff3" textColor="#000">
			<SEO title="Jetpack" />

			<main>
				<Hero
					title="Jetpack"
					description="Safer. Faster. More traffic. Security, performance, and marketing tools made for WordPress sites by the WordPress experts"
					backgroundColor="#fff"
					textColor="#000"
				>
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
								stroke="#000"
							/>
							<path
								d="M107.652 58.744l-33.68 65.303V58.744h33.68zM32.347 81.122l33.547-65.165v65.165H32.347z"
								stroke="#000"
							/>
						</svg>
					</HeroContent>
				</Hero>

				<Card circles backgroundColor="#e9eff3">
					<Item width="l" style={{ margin: "var( --unit-5 ) auto" }}>
						<Image
							alt="The Jetpack plugin dashboard"
							src="/images/jetpack/jetpack-dashboard.jpg"
							width={800}
							height={448}
						/>
						<Card
							compact
							backgroundColor="#ffffff"
							style={{
								marginTop: "var( --unit-3)",
								boxShadow: "0 var(--unit-2) var(--unit-4) rgba(0,0,0,.1)",
							}}
						>
							<Text caption>
								Jetpack is a WordPress plugin with over 5 million active
								installs. It is a collection of security, performance, and
								marketing tools designed to expand the capabilities of
								WordPress.
							</Text>
						</Card>
					</Item>
				</Card>
				<Card backgroundColor="#fff" textColor="#000">
					<Item style={{ margin: "0 auto" }} width="m">
						<Text size="l">
							I started work at Automattic in 2013 and spent a significant
							amount of my time working on Jetpack. When I joined the Jetpack
							team, the plugin was laden with broken flows and had no concrete
							plans for monetization.
						</Text>

						<Text size="l">
							By the time I left Automattic in 2020, Jetpack was a profitable
							business. The plugin’s interface was entirely rebuilt using a
							design system shared with WordPress.com. It had a focused business
							model centered around backups and security. Jetpack’s website was
							redesigned into a sophisticated and flexible platform tying nicely
							into the plugin.
						</Text>
					</Item>
				</Card>
				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>The plugin</Heading>
							<Text>
								<strong>I redesigned and maintained the Jetpack plugin.</strong>{" "}
								The most recent time, we rebuilt the entire plugin interface in
								React using shared components and design patterns with
								WordPress.com. This made going back and forth between Jetpack
								and WordPress.com much smoother for users as it now was a
								cohesive system.
							</Text>

							<Text>
								<strong>
									I worked with a team to design and build Jetpack features.
								</strong>{" "}
								This included backup and security features, tiled galleries, the
								contact form, related posts, WordAds, several widgets, and
								several blocks.
							</Text>

							<Text>
								<strong>
									I helped transition the product from a free product to a
									profitable product with paid plans.
								</strong>{" "}
								This included quite a range of flows between the Jetpack
								dashboard, jetpack.com, and WordPress.com depending on the
								situation.
							</Text>
						</FlexItem>
						<FlexItem>
							<Image
								alt="The Jetpack plugin settings"
								src="/images/jetpack/jetpack-settings.jpg"
								width={800}
								height={448}
							/>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="s">
							<Heading>The website</Heading>
							<Text>
								<strong>I redesigned the Jetpack website.</strong> Early on, I
								designed and coded this primarily myself and, as the team grew,
								it became a group effort. This included research, hypotheses,
								design, implementation, testing, and iteration.
							</Text>
						</FlexItem>
					</Flex>

					<GalleryOverlap>
						<Image
							caption="jetpack.me 2012"
							src="/images/jetpack/web2012.jpg"
							width={800}
							height={448}
						/>

						<Image
							align="right"
							caption="jetpack.me 2013"
							src="/images/jetpack/web2013.jpg"
							width={800}
							height={448}
						/>

						<Image
							caption="jetpack.me 2014"
							src="/images/jetpack/web2014.jpg"
							width={800}
							height={448}
						/>

						<Image
							align="right"
							caption="jetpack.com 2016"
							src="/images/jetpack/web2016.jpg"
							width={800}
							height={448}
						/>
					</GalleryOverlap>

					<Flex>
						<FlexItem>
							<Image
								alt="The current Jetpack website"
								align="center"
								href="https://jetpack.com/"
								caption="jetpack.com 2018"
								src="/images/jetpack/web2018.jpg"
								width={1344}
								height={766}
							/>
						</FlexItem>
					</Flex>

					<Spacer />

					<Flex>
						<FlexItem width="s">
							<Heading>WordPress.com integration</Heading>
							<Text>
								<strong>
									I integrated Jetpack into WordPress.com’s React-based
									dashboard
								</strong>{" "}
								and even designed/coded some of the most used components on
								WordPress.com’s interface.{" "}
								<Link href="/projects/wordpressdotcom">
									I go over a few of the projects here.
								</Link>
							</Text>
						</FlexItem>
						<FlexItem>
							<Image
								alt="WordPress.com's dashboard showing stats and insights"
								src="/images/jetpack/dotcom-integration.jpg"
								width={800}
								height={448}
							/>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="s">
							<Heading>Events</Heading>
							<Text>
								<strong>I designed collateral for events</strong> including
								booths, swag, and the conference branding. I also attended
								several events representing Automattic and Jetpack.
							</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
