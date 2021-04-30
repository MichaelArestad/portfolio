import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Heading from "../../components/heading/heading";
import Hero from "../../components/hero/hero";
import HeroContent from "../../components/hero/hero-content";
import Image from "../../components/image/image";
import Item from "../../components/item/item";
import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
import SEO from "../../components/seo";
import Text from "../../components/text/text";

export default function Home() {
	return (
		<Layout backgroundColor="#e9eff3">
			<SEO title="Case study: Activity Log" />

			<main>
				<Hero
					title="Case study: Activity Log"
					description="Be kind - rewind"
					backgroundColor="#fff"
					textColor="#000"
				>
					<Back href="/">Home</Back>
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
							src="/images/activity-log/jetpack-activity-log.png"
							width={800}
							height={440}
						/>
						<Card
							compact
							backgroundColor="#ffffff"
							style={{ marginTop: "var( --unit-3 )" }}
						>
							<Text caption>
								A complete record of everything that happens on your site.
							</Text>
						</Card>
					</Item>
				</Card>

				<Card backgroundColor="#fff" textColor="#000">
					<Item style={{ margin: "var( --unit-5 ) auto" }} width="m">
						<Text size="l">
							The Activity Log is a list of every event on a WordPress site that
							comes with the ability to rewind the site to any specific event. I
							helped design and build the Activity Log over the course of year
							helping solidify the feature offering of Jetpack's paid plans.
						</Text>
					</Item>
				</Card>

				<Card>
					<Item width="m" centered>
						<Heading>Problem</Heading>
						<Text>
							WordPress sites are always changing. Editors add publish content,
							admins are updating plugins or modifying settings, and designers
							are modifying the theme. These specific changes to WordPress sites
							are almost always invisible. This can be problematic if you are
							troubleshooting why the site is down or why a popular post is
							missing. Extracting the information of who made a change and when
							requires a deep technical knowledge. Beyond that, even if you know
							why the site went down, it's not always easy to recover.
						</Text>

						<Heading>Vision</Heading>
						<Text>
							The Activity Log brings all of the invisible happenings on
							WordPress sites into a visible user-friendly layer. It lowers the
							level of technical expertise needed to understand what is
							happening on your site at any given point in time and even makes
							the activity actionable. It is, at its core, a list of all the
							events happening in relation to a site; who did what, when, to
							what thing. Each event shows a simple explanation, a timestamp,
							and relevant objects (people, posts, pages, media) to provide
							context. The main view is filterable to provide powerful views
							such as “everything Susan has done recently”, “all security
							related events”, “all updates available”, or “everything to do
							with this post”.
						</Text>
						<Text>
							<strong>
								The Activity Log will be a foundation upon which we can
								implement a backups and security product that will add value to
								Jetpack and WordPress.com because users will be able to be
								confident in their site remaining online and secure and,
								ultimately, sell more plans.
							</strong>
						</Text>

						<Heading>Who is it for?</Heading>
						<Text>
							Primarily site admins, folks who manage editorial teams, folks
							with active sites, store owners
						</Text>

						<Heading>User stories</Heading>
						<Text>
							We created several user stories to help guide the design of the
							flows. Here is a sample of what we wrote.
						</Text>
						<List>
							<li>
								As a site admin, I want to be notified immediately when my site
								is down, and be able to get a bird’s eye view of my site when
								this happens in order to take steps to fix the issue.
							</li>
							<li>
								As a member of an editorial team, a store owner, or happiness
								engineer, I can’t always remember exactly what I was looking for
								or when exactly it happened. I want to be able to filter the
								entire list by a single type of event, date, or user, so I can
								quickly identify where a problem (or good thing) occurred.
							</li>
							<li>
								As a site admin, I visit my site and find my site’s theme
								appears to be different than the last time I visited. I jump
								into my site’s Activity, but everything seems ok. I click a chat
								button so that a Happiness Engineer (support) can guide me
								through the problem.
							</li>
							<li>
								As a site admin, I noticed a weird event (attempted sign in) in
								my Activity Log, and I want to see all other events from that
								same IP, or of a similar kind (other failed sign ins) to try to
								understand what’s going on.
							</li>
							<li>
								As a site admin or happiness engineer, I want to be able to send
								someone else to a specific day or event in the event log so I
								can get help or show them a specific series of events. This way
								they will be able to see and understand which change caused the
								site to misbehave.
							</li>
						</List>
					</Item>
				</Card>
				<Card>
					<Item centered width="m">
						<Heading>My involvement</Heading>
						<Text>
							I worked with a team on the design and I oversaw the
							implementation of the Activity Log project. When we shifted
							Jetpack to be more security-focused, we made a gargantuan effort
							to build a rock-solid and intuitive backup interface. The
							interface was built into WordPress.com's dashboard so a user could
							restore their Jetpack site even if the site was down.
						</Text>

						<Text>
							We designed the interface to resemble a ledger to simplify the
							concept of rewinding a site to a previous state. The ledger was
							also invaluable in helping both users and Happiness Engineers
							(support) identify changes on a site that either were
							unintentional or made by another user.
						</Text>
					</Item>
				</Card>
			</main>
		</Layout>
	);
}
