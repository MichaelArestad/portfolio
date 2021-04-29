import SEO from "../../components/seo";
import Layout from "../../components/layout/layout";
import Hero from "../../components/hero/hero";
import HeroContent from "../../components/hero/hero-content";
import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Text from "../../components/text/text";
import Heading from "../../components/heading/heading";
import Flex from "../../components/flex/flex";
import FlexItem from "../../components/flex/flex-item";
import Item from "../../components/item/item";
import Image from "../../components/image/image";
import Spacer from "../../components/spacer/spacer";

export default function Home() {
	return (
		<Layout>
			<SEO title="WordPress.com" />

			<main>
				<Hero
					title="WordPress.com"
					description="Build a site. Sell your stuff. Start a blog."
					backgroundColor="#117ac9"
					textColor="#fff"
				>
					<Back href="/projects/">Projects</Back>
					<HeroContent>
						<svg
							width={140}
							height={140}
							viewBox="0 0 140 140"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M70 0C31.397 0 0 31.397 0 70s31.397 70 70 70 70-31.397 70-70S108.603 0 70 0zM7.069 70c0-9.12 1.965-17.793 5.448-25.62l30.017 82.258C21.535 116.431 7.07 94.914 7.07 70zM70 132.948a63.032 63.032 0 01-17.776-2.569L71.104 75.5l19.344 53c.121.31.276.586.449.862A62.593 62.593 0 0170 132.948zm8.672-92.465c3.794-.207 7.207-.604 7.207-.604 3.397-.396 3-5.379-.396-5.19 0 0-10.19.794-16.776.794-6.19 0-16.57-.793-16.57-.793-3.396-.207-3.792 4.982-.396 5.19 0 0 3.207.396 6.604.603l9.81 26.862-13.776 41.31-22.93-68.172c3.792-.207 7.206-.604 7.206-.604 3.397-.396 2.983-5.379-.396-5.19 0 0-10.19.794-16.776.794-1.173 0-2.57-.035-4.052-.07C28.672 18.346 48.017 7.07 70 7.07c16.38 0 31.31 6.259 42.5 16.517-.276-.017-.534-.051-.81-.051-6.19 0-10.569 5.379-10.569 11.172 0 5.19 3 9.569 6.189 14.758 2.397 4.19 5.19 9.57 5.19 17.363 0 5.396-1.603 12.172-4.793 20.344l-6.276 20.983-22.759-67.672zm22.966 83.914l19.224-55.587c3.586-8.982 4.793-16.155 4.793-22.534 0-2.31-.155-4.466-.431-6.466 4.914 8.966 7.707 19.259 7.707 30.19 0 23.224-12.586 43.483-31.293 54.397z"
								fill="#fff"
							/>
						</svg>
					</HeroContent>
				</Hero>

				<Card circles backgroundColor="#e3f3ff">
					<Item width="l" style={{ margin: "var( --unit-5 ) auto" }}>
						<img
							alt="The WordPress.com dashboard"
							src="/images/wordpressdotcom/dotcom-dashboard.jpg"
							width={800}
							height={448}
						/>
						<Card
							compact
							backgroundColor="#ffffff"
							style={{ marginTop: "var( --unit-3 )" }}
						>
							<Text caption>
								WordPress.com hosts millions of websites and is powered by, you
								guessed it, WordPress.
							</Text>
						</Card>
					</Item>
				</Card>

				<Card backgroundColor="#117ac9" textColor="#fff">
					<Item style={{ margin: "var( --unit-5 ) auto" }} width="m">
						<Text size="l">
							<a href="https://wordpress.com/">WordPress.com</a> started as a
							blogging platform and grew into a flexible website-building
							machine. Nearly all of the work I did integrated with
							WordPress.com in some way. To start, I want to share my work on
							Calypso.
						</Text>

						<Text size="l">
							One of the wildest projects I worked on was to help completely
							rebuild the WordPress admin interface as a React application. This
							application is known as Calypso and uses the WordPress API to
							communicate with WordPress behind the scenes.
						</Text>

						<Text size="l">
							When the project first started, I worked on areas of the dashboard
							that are related to Jetpack. By the time I left Automattic, I
							ended up designing and implementing the Activity Log, Plugins, and
							People sections along with various Jetpack connection and
							management flows.
						</Text>
					</Item>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Activity Log</Heading>
							<Text>
								<strong>
									I worked with a team on the design and I oversaw the
									implementation of the Activity Log project.
								</strong>{" "}
								When we shifted Jetpack to be more security-focused, we made a
								gargantuan effort to build a rock-solid and intuitive backup
								interface. The interface was built into WordPress.com's
								dashboard so a user could restore their Jetpack site even if the
								site was down. It isn't unusual for a site to break because of a
								plugin or theme update and this interface gave the user an undo
								button for their entire site.
							</Text>

							<Text>
								We designed the interface to resemble a ledger to simplify the
								concept of rewinding a site to a previous state. The ledger was
								also invaluable in helping both users and Happiness Engineers
								(support) identify changes on a site that either were
								unintentional or made by another user.
							</Text>
						</FlexItem>

						<FlexItem>
							<Image
								border
								alt="The Activity Logo showing a few event types"
								src="/images/wordpressdotcom/dotcom-activity-log.jpg"
								width={800}
								height={448}
								margin="0 auto"
							/>
						</FlexItem>
					</Flex>
				</Card>

				<Spacer />

				<Card>
					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexItem width="s">
							<Heading>Plugins</Heading>
							<Text>
								<strong>
									I designed and oversaw the implementation of the Plugins
									views.
								</strong>{" "}
								This added the ability to manage and install plugins from within
								the WordPress.com dashboard. It also allowed folks to autoupdate
								plugins with ease.
							</Text>
						</FlexItem>

						<FlexItem>
							<Image
								border
								alt="The Plugins browser"
								src="/images/wordpressdotcom/dotcom-plugins.jpg"
								width={800}
								height={448}
								margin="0 auto"
							/>
						</FlexItem>
					</Flex>
				</Card>

				<Spacer />

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>People</Heading>
							<Text>
								<strong>
									I quickly designed and implemented an interface for managing
									users on a site.
								</strong>{" "}
								It combined the various tools and lists to manage site users,
								readers, and email followers. Before, this functionality was
								spread out in multiple interfaces and was frustrating to use.
								People also lets folks manage outstanding invites to the site if
								needed.
							</Text>

							<Text>
								Note: We decided to call it "People" as it felt a little less
								dehumanizing than "Users."
							</Text>
						</FlexItem>

						<FlexItem>
							<Image
								border
								alt="The People view"
								src="/images/wordpressdotcom/dotcom-people.jpg"
								width={800}
								height={448}
								margin="0 auto"
							/>
						</FlexItem>
					</Flex>
				</Card>

				<Spacer />

				<Card>
					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexItem width="s">
							<Heading>Settings</Heading>
							<Text>
								<strong>
									I aligned both WordPress.com setting and Jetpack settings
								</strong>{" "}
								in an effort to organize and simplify Jetpack settings. At the
								time, Jetpack had over 40 modules and settings exposed for most
								of them. Now, the settings are consistent across dashboards and
								many of the unnecessary settings have been removed. I also took
								the time to improve several of the settings form components and
								design patterns.
							</Text>
						</FlexItem>

						<FlexItem>
							<Image
								border
								alt="WordPress.com settings"
								src="/images/wordpressdotcom/dotcom-settings.jpg"
								width={800}
								height={448}
								margin="0 auto"
							/>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>My first React Components</Heading>
							<Text>
								<strong>
									I designed and built the Card, Button, Spinner, and a slew of
									other components.
								</strong>{" "}
								Over time, our devs improving on my crude React components, but
								the core styling is still there. Building these components
								awakened my interest in creatingdesign systems.
							</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
