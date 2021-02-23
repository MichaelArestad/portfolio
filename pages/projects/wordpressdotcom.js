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

export default function Home() {
	return (
		<Layout backgroundColor="#e7e7e7">
			<SEO title="Projects" />

			<main>
				<Hero
					title="WordPress.com"
					description="Build a site. Sell your stuff. Start a blog."
					backgroundColor="#117ac9"
					textColor="#fff">
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

				<Card circles backgroundColor="#117ac9">
					<Item width="large" style={{ margin: "40px auto" }}>
						<img src="/images/wordpressdotcom/dotcom-dashboard@2x.jpg" width="800" height="448" />
						<Card compact backgroundColor="#ffffff" style={{ marginTop: "24px" }}><Text caption>WordPress.com hosts millions of websites and is powered by, you guessed it, WordPress.</Text></Card>
					</Item>
				</Card>

				<Card backgroundColor="#117ac9" textColor="#fff">
					<Item style={{ margin: "0 auto" }} width="small">
						<Text>WordPress.com started as a blogging platform and evolved into a platform to build a huge variety of websites. Nearly all of the work I did integrated with WordPress.com in some way, but I want to specifically share my work on Calypso.</Text>

						<Text>One of the wildest projects I worked on was to help completely rebuild the WordPress admin interface as a React application. This application is known as Calypso and uses the WordPress API to communicate with WordPress behind the scenes.</Text>

						<Text>When the project first started, I was tasked with areas of the dashboard that are related to Jetpack. I ended up designing and helping build the Activity Log, Plugins, and People sections along with various Jetpack connection and management flows.</Text>
					</Item>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="small">
							<Heading>Activity Log</Heading>
							<Text><strong>I worked with a team on the design and I oversaw the implementation of the Activity Log project.</strong> When we shifted Jetpack to be more security focused, we made a gargantuan effort to build a rock-solid and intuitive backup interface. The interface was built into WordPress.com's dashboard so a user could restore their Jetpack site even if the site was down. It isn't unusual for a site to break because of a plugin or theme update and this interface gave the user an undo button for their entire site.</Text>

							<Text>We designed the interface to resemble a ledger to simplify the concept of rewinding a site to a previous state. The ledger was also invaluable in helping both users and Happiness Engineers (support) identify changes on a site that either were unintentional or made by another user.</Text>
						</FlexItem>

						<FlexItem>
							<img src="/images/wordpressdotcom/dotcom-activity-log@2x.jpg" width="800" height="448" />
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex flexDirection="row-reverse" alignItems="center" justifyContent="space-between">
						<FlexItem width="small">
							<Heading>Plugins</Heading>
							<Text><strong>I designed and oversaw the implementation of the Plugins views.</strong> This added the ability to manage and install plugins from within the WordPress.com dashboard. It also allowed folks to autoupdate plugins with ease.</Text>
						</FlexItem>

						<FlexItem>
							<img src="/images/wordpressdotcom/dotcom-plugins@2x.jpg" width="800" height="448" />
						</FlexItem>
					</Flex>

				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="small">
							<Heading>People</Heading>
							<Text><strong>I quickly designed and helped implement an interface for managing users on a site.</strong> It combined the various tools and lists to manage site users, readers, and email followers. Before, this functionality was spread out in multiple interfaces and was frustrating to use. People also lets folks manage outstanding invites to the site if needed.</Text>

							<Text>We decided to call it people as it felt a little less dehumanizing than "users."</Text>
						</FlexItem>

						<FlexItem>
							<img src="/images/wordpressdotcom/dotcom-people@2x.jpg" width="800" height="448" />
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex flexDirection="row-reverse" alignItems="center" justifyContent="space-between">
						<FlexItem width="small">
							<Heading>Settings</Heading>
							<Text><strong>I aligned both WordPress.com setting and Jetpack settings</strong> in an effort to organize and simplify Jetpack settings. This way a user going from the Jetpack Dashboard to WordPress.com's dashboard would not have to relearn where all the settings were. The work included reorganization, but I also took the time to improve several of the settings form components and design patterns.</Text>
						</FlexItem>

						<FlexItem>
							<img src="/images/wordpressdotcom/dotcom-settings@2x.jpg" width="800" height="448" />
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="small">
							<Heading>My first React Components</Heading>
							<Text><strong>I designed and built the Card, Button, Spinner, and a slew of other components.</strong> Many remain largely unchanged outside of some minor tweaks to styling, though our devs did a great job of improving on my crude React components. Building these components awakened a deep interest in systematic design.</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
