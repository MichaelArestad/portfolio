import Avatar from "../components/avatar/avatar";
import Back from "../components/back/back";
import Card from "../components/card/card";
import cn from "classnames";
import Heading from "../components/heading/heading";
import Hero from "../components/hero/hero";
import HeroContent from "../components/hero/hero-content";
import Layout from "../components/layout/layout";
import List from "../components/list/list";
import SEO from "../components/seo";
import styles from "../styles/who.module.scss";

export default function Home() {
	return (
		<Layout>
			<SEO title="whoami" />

			<main className={styles.who}>
				<Hero
					title="Michael Arestad"
					description="I'm a product designer and front-end engineer with proven ability to design and develop products used by millions globally."
					backgroundColor="var( --color-dark )"
					textColor="var( --color-light )"
				>
					<Back href="/">Home</Back>
					<HeroContent>
						<Avatar size="140" />
					</HeroContent>
				</Hero>

				<div className={styles.flexContainer}>
					<div className={cn(styles.flexItem, styles.flexA)}>
						<Card>
							<Heading>Skills</Heading>
							<ul className={styles.skills}>
								<li>
									UI &amp; UX design
									<div className={styles.percent}>
										████████████████████{" "}
										<span className={styles.percentValue}>[100%]</span>
									</div>
								</li>
								<li>
									Systems Design
									<div className={styles.percent}>
										██████████████████░░{" "}
										<span className={styles.percentValue}>[90%]</span>
									</div>
								</li>
								<li>
									User research
									<div className={styles.percent}>
										████████████████░░░░{" "}
										<span className={styles.percentValue}>[80%]</span>
									</div>
								</li>
								<li>
									t Y p O g R a P h Y
									<div className={styles.percent}>
										████████████████████{" "}
										<span className={styles.percentValue}>[100%]</span>
									</div>
								</li>
								<li>
									HTML/CSS
									<div className={styles.percent}>
										████████████████████{" "}
										<span className={styles.percentValue}>[100%]</span>
									</div>
								</li>
								<li>
									Javascript
									<div className={styles.percent}>
										█████████████████░░░{" "}
										<span className={styles.percentValue}>[85%]</span>
									</div>
								</li>
							</ul>

							<Heading>Education</Heading>
							<ul>
								<li className={styles.college}>
									<div className={styles.collegeName}>
										Rocky Mountain College of Art &amp; Design
									</div>
									<div className={styles.degree}>
										B.F.A. Communications Design
									</div>
								</li>
								<li className={styles.college}>
									<div className={styles.collegeName}>
										University of Northern Colorado
									</div>
									<div className={styles.degree}>B.A. Graphic Design</div>
								</li>
							</ul>

							<Heading>Speaking</Heading>
							<ul className={styles.speaking}>
								<li>
									<strong>WordCamps</strong> Europe, US, NYC, SF, &amp; more
								</li>
								<li>
									<strong>Develop Denver</strong>
								</li>
							</ul>

							<Heading>Contact</Heading>
							<ul className={styles.contact}>
								<li>
									<a href="https://michael.blog/">blog</a>
								</li>
								<li>
									<a href="https://github.com/MichaelArestad">github</a>
								</li>
								<li>
									<a href="https://twitter.com/michaelarestad">twitter</a>
								</li>
							</ul>
						</Card>
					</div>
					<div className={cn(styles.flexItem, styles.flexB)}>
						<Card>
							<div className={styles.experience}>
								<Heading>Experience</Heading>

								<Heading level={4}>
									<a href="https://automattic.com/">Automattic</a>: Product
									Designer<span className={styles.dateRange}> – 2013-2020</span>
								</Heading>
								<p>
									Collaborate with a team to design and build improved WordPress
									experiences with powerful features growing the user base and
									increasing annual recurring revenue.
								</p>
								<ul>
									<li>
										Designed popular products serving millions of people
										worldwide.
									</li>
									<li>
										Worked in concert with engineers, researchers, and designers
										to redesign and rebuild entire interfaces including{" "}
										<a href="https://wordpress.com">WordPress.com</a>,{" "}
										<a href="https://jetpack.com/">Jetpack</a>, and WordPress’s
										new block-based editor,{" "}
										<a href="https://wordpress.org/gutenberg/">Gutenberg</a>.
									</li>
									<li>
										Designed, engineered, and maintained design system
										components for WordPress.com and Jetpack reducing design
										debt, speeding up prototyping, and resulting in a cohesive
										product experience.
									</li>
									<li>
										Transformed Jetpack from a free product into a highly
										profitable plugin for Automattic and its partners bringing
										in millions in annual recurring revenue.
									</li>
									<li>
										Conducted qualitative research and gathered quantitative
										data resulting in clear understanding of customer needs and
										informed design decisions.
									</li>
								</ul>

								<Heading level={4}>
									<a href="https://wordpress.org/">WordPress</a>: Core Committer
									<span className={styles.dateRange}> – 2012-Present</span>
								</Heading>
								<p>
									Volunteer design and code to aid the WordPress community and
									advance the goal of democratizing publishing.
								</p>
								<ul>
									<li>
										Led the design of product releases and product features
										delivering improvements to WordPress (powering 40% of the
										web).
									</li>
									<li>
										Organized and conducted online and in-person WordPress
										events.
									</li>
									<li>
										Designed identity systems and collateral for WordCamps
										across the US.
									</li>
								</ul>

								<Heading level={4}>
									<a href="https://www.colorado.gov/">State of Colorado</a>:
									Graphic Designer
									<span className={styles.dateRange}> – 2012-2013</span>
								</Heading>
								<p>
									Work with a small team to make major design improvements to
									the interactive and print products produced by the state.
								</p>
								<ul>
									<li>
										Designed and produced websites, printed collateral, and
										identity systems for internal and external clients.
									</li>
									<li>
										Audited hundreds of pages on the website removing
										redundant/outdated content resulting in an improved user
										experience.
									</li>
								</ul>
							</div>
						</Card>
					</div>
				</div>
			</main>
		</Layout>
	);
}
