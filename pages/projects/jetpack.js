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
import Text from "../../components/text/text";
import GalleryOverlap from "../../components/gallery-overlap/gallery-overlap";

export default function Home() {
	return (
		<Layout backgroundColor="#e9eff3">
			<SEO title="Projects" />

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
					<Item width="large" style={{ margin: "40px auto" }}>
						<Image
							src="/images/jetpack/jetpack-dashboard@2x.jpg"
							width="800"
							height="448"
						/>
						<Card
							compact
							backgroundColor="#ffffff"
							style={{ marginTop: "24px" }}
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
					<Item style={{ margin: "0 auto" }} width="small">
						<Text>
							I started work at Automattic in 2013 and spent a significant
							amount of my time working on Jetpack. When I joined the Jetpack
							team, the plugin was laden with broken flows and had no concrete
							plans for monetization.
						</Text>

						<Text>
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
						<FlexItem width="small">
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
								several blocks. I’ll go into a few of these in detail.
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
								src="/images/jetpack/jetpack-dashboard@2x.jpg"
								width="800"
								height="448"
							/>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="small">
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
							src="/images/jetpack/web2012@2x.jpg"
							width="800"
							height="448"
						/>

						<Image
							align="right"
							href="#"
							caption="jetpack.me 2013"
							src="/images/jetpack/web2013@2x.jpg"
							width="800"
							height="448"
						/>

						<Image
							caption="jetpack.me 2014"
							src="/images/jetpack/web2014@2x.jpg"
							width="800"
							height="448"
						/>

						<Image
							align="right"
							href="#"
							caption="jetpack.com 2016"
							src="/images/jetpack/web2016@2x.jpg"
							width="800"
							height="448"
						/>
					</GalleryOverlap>

					<Flex>
						<FlexItem>
							<Image
								align="center"
								href="#"
								caption="jetpack.com 2018"
								src="/images/jetpack/web2018@2x.jpg"
								width="1344"
								height="448"
							/>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="small">
							<Heading>WordPress.com integration</Heading>
							<Text>
								<strong>
									I integrated Jetpack into{" "}
									<Link href="/projects/wordpressdotcom">
										WordPress.com’s React-based dashboard
									</Link>
								</strong>{" "}
								and even designed/coded some of the most used components on
								WordPress.com’s interface.
							</Text>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="small">
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
