import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import FlexItem from "../../components/flex/flex-item";
import Heading from "../../components/heading/heading";
import Hero from "../../components/hero/hero";
import HeroContent from "../../components/hero/hero-content";
import Item from "../../components/item/item";
import Image from "../../components/image/image";
import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
import SEO from "../../components/seo";

export default function Home() {
	return (
		<Layout backgroundColor="#fff" textColor="#000">
			<SEO title="WordPress" />

			<main>
				<Hero
					title="WordPress"
					description="An open source software you can use to create a beautiful website, blog, or app"
					backgroundColor="#23282d"
					textColor="#fff"
				>
					<Back href="/projects/">Projects</Back>
					<HeroContent>
						<svg
							width="140"
							height="140"
							viewBox="0 0 140 140"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M69.9895 4.19979C78.872 4.19979 87.4816 5.9427 95.6082 9.36553C99.514 11.0244 103.273 13.0613 106.78 15.4342C110.265 17.7861 113.541 20.495 116.523 23.4768C119.505 26.4587 122.214 29.7345 124.566 33.2203C126.939 36.7272 128.976 40.507 130.634 44.3918C134.057 52.4974 135.8 61.1069 135.8 70.0105C135.8 78.9141 134.057 87.5026 130.634 95.6292C128.976 99.535 126.939 103.294 124.566 106.801C122.214 110.286 119.505 113.562 116.523 116.544C113.541 119.526 110.265 122.235 106.78 124.587C103.273 126.96 99.493 128.997 95.6082 130.655C87.5026 134.078 78.893 135.821 69.9895 135.821C61.1069 135.821 52.4974 134.078 44.3708 130.655C40.465 128.997 36.7062 126.96 33.1993 124.587C29.7135 122.235 26.4377 119.526 23.4558 116.544C20.474 113.562 17.7651 110.286 15.4132 106.801C13.0403 103.294 11.0034 99.514 9.34453 95.6292C5.9427 87.5026 4.19979 78.8721 4.19979 69.9895C4.19979 61.1069 5.9427 52.4974 9.36553 44.3708C11.0244 40.465 13.0613 36.7062 15.4342 33.1993C17.7861 29.7135 20.495 26.4377 23.4768 23.4558C26.4587 20.474 29.7345 17.7651 33.2203 15.4132C36.7272 13.0403 40.507 11.0035 44.3918 9.34453C52.4974 5.9427 61.1069 4.19979 69.9895 4.19979ZM69.9895 0C31.3304 0 0 31.3304 0 69.9895C0 108.649 31.3304 139.979 69.9895 139.979C108.649 139.979 139.979 108.649 139.979 69.9895C140 31.3304 108.649 0 69.9895 0Z"
								fill="#ffffff"
							/>
							<path
								d="M11.6754 69.9895C11.6754 93.0674 25.0938 113.037 44.5598 122.487L16.7362 46.2607C13.4813 53.5053 11.6754 61.5479 11.6754 69.9895ZM109.384 67.0497C109.384 59.847 106.801 54.8493 104.575 50.9645C101.614 46.1557 98.8421 42.0819 98.8421 37.2941C98.8421 31.9394 102.916 26.9417 108.628 26.9417C108.88 26.9417 109.132 26.9627 109.384 26.9837C99.0101 17.4711 85.1718 11.6754 69.9895 11.6754C49.6205 11.6754 31.6874 22.1329 21.2509 37.9661C22.6159 38.0081 23.9178 38.0291 25.0098 38.0291C31.0995 38.0291 40.549 37.2941 40.549 37.2941C43.6988 37.1052 44.0558 41.7249 40.927 42.1029C40.927 42.1029 37.7561 42.4809 34.2493 42.6489L55.5002 105.835L68.2676 67.5536L59.1751 42.6489C56.0252 42.4599 53.0644 42.1029 53.0644 42.1029C49.9145 41.9139 50.2925 37.1052 53.4423 37.2941C53.4423 37.2941 63.0809 38.0291 68.8136 38.0291C74.9033 38.0291 84.3528 37.2941 84.3528 37.2941C87.5027 37.1052 87.8596 41.7249 84.7308 42.1029C84.7308 42.1029 81.5599 42.4809 78.0531 42.6489L99.1151 105.352L105.142 86.2847C107.809 77.9481 109.384 72.0474 109.384 67.0497ZM71.0185 75.0923L53.5053 125.952C58.7341 127.485 64.2568 128.325 69.9895 128.325C76.7722 128.325 83.3029 127.149 89.3506 125.028C89.2036 124.776 89.0566 124.503 88.9306 124.23L71.0185 75.0923ZM121.185 42.0189C121.437 43.8668 121.584 45.8617 121.584 48.0246C121.584 53.9463 120.471 60.603 117.153 68.9186L99.3251 120.408C116.67 110.308 128.325 91.5134 128.325 69.9895C128.325 59.847 125.742 50.3135 121.185 42.0189Z"
								fill="#ffffff"
							/>
						</svg>
					</HeroContent>
				</Hero>

				<Card backgroundColor="#0073aa">
					<Item width="l" style={{ margin: "var( --unit-5 ) auto" }}>
						<img
							src="/images/wordpress/dashboard.jpg"
							width={800}
							height={448}
						/>
						<Card
							compact
							backgroundColor="#ffffff"
							style={{ marginTop: "var( --unit-3 )" }}
						>
							<Text caption>
								<a href="https://wordpress.org/">WordPress</a> now powers 40% of
								the web and is driven by volunteers. I am a proud contributer
								having donated design and code work to the project.
							</Text>
						</Card>
					</Item>
				</Card>

				<Card backgroundColor="#23282d" textColor="#fff">
					<Item style={{ margin: "var( --unit-5 ) auto" }} width="m">
						<Text size="l">
							I have been using WordPress for so long I am not even sure when I
							first started. It's been well over a decade. Before I started
							working at Automattic, I had been contributing here and there to
							the forums and the occasional project, but it wasn't until around
							2013 that I was encouraged to apply for Automattic. That was the
							beginning of a head-first dive into the realm of WordPress. What
							follows are some highlights.
						</Text>
					</Item>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Editors</Heading>
							<Text>
								Most of my contributions to WordPress have been focused on the
								editing and site-customizing experience. My interest in
								contributing started with the idea that I could improve the
								design of parts of the editor that were frustrating to me. Down
								the rabbit hole, I went. Over the next several years, I worked
								on the various WordPress editors (Press This, Classic editor,
								Customizer, Gutenberg) and even some WordPress.com concept
								editors that eventually led us to Gutenberg.
							</Text>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexItem width="s">
							<Heading>Press This</Heading>
							<Text>
								One of my first major projects on WordPress was a redesign of a
								bookmarklet tool called Press This. It's effectively a tiny
								version of the WordPress editor that allows users to quote or
								repost content from other sites. It was the main feature in
								WordPress 4.2 Powell. I designed it and Stephane Daury built it
								along with some help from others familiar with the editor. It
								was also one of the first, if not the first, feature to be built
								as a plugin to speed up development. The next several releases
								used the Feature Plugin development cycle for major changes.
							</Text>

							<Text>
								Looking back at it now, there is a striking resemblance between
								it and the new WordPress editor, Gutenberg.
							</Text>
						</FlexItem>

						<FlexItem style={{ flexGrow: "1" }}>
							<div className="videoWrapper">
								<iframe
									className="videoIframe"
									width="632"
									height="354"
									src="https://videopress.com/embed/e9kH4FzP"
									frameBorder="0"
									allowFullScreen
								></iframe>
								<script src="https://videopress.com/videopress-iframe.js"></script>
							</div>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Gutenberg</Heading>
							<Text>
								The most recent major project I worked on was{" "}
								<a href="https://github.com/WordPress/gutenberg/">
									the Gutenberg editor for WordPress
								</a>
								. I contributed countless hours to the design and code of it. I
								also led the transition of it from being a post and page editor
								to a tool that can be used to edit any content on a site.
								Because of the depth of this work, I'm taking some time to write
								this up as a project of it's own. In the meantime,{" "}
								<a href="https://wordpress.org/gutenberg/">
									take Gutenberg for a spin
								</a>
								.
							</Text>

							<Text>
								I also updated several Jetpack features to work seamlessly with
								it.
							</Text>
						</FlexItem>

						<FlexItem>
							<Image
								src="/images/gutenberg/gberg-demo.jpg"
								width={800}
								height={448}
							/>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Commit</Heading>
							<Text>
								In 2015, I was granted commit access to WordPress. I was one of
								the first designers granted access. I am still very much honored
								to be a WordPress core committer. You can read{" "}
								<a href="https://michael.blog/2015/12/11/wordpress-commit/">
									my blog post about it
								</a>{" "}
								if you wish to know more.
							</Text>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexItem width="s">
							<Heading>Events</Heading>
							<Text>
								I designed the branding, website, collateral, and swag for a few
								WordPress events called WordCamps. WordCamps take place all over
								the world and usually are local to a city. I did design work for{" "}
								<a href="https://denver.wordcamp.org/2015/">
									WordCamp Denver 2015
								</a>
								, WordCamp San Francisco 2014, and WordCamp Denver 2013. I also
								worked on a handful of the State of the Word slides. You can
								even spot me on stage doing last minute updates (ask me about
								this) on one of them.{" "}
							</Text>
						</FlexItem>

						<FlexItem>
							<Image
								border
								src="/images/wordpress/wcden.jpg"
								width={800}
								height={448}
							/>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Musings</Heading>
							<Text>
								Because I spend so much time thinking about and working on
								WordPress, I sometimes have some interesting ideas that I write
								down. Here are a handful of blog posts that might be
								interesting.
							</Text>

							<List>
								<li>
									<a href="https://michael.blog/2020/05/29/wordpress-the-site-builder/">
										WordPress – the site builder
									</a>
								</li>
								<li>
									<a href="https://michael.blog/2015/08/26/wordpress-dark-admin-concept/">
										Dark admin concept
									</a>
								</li>
								<li>
									<a href="https://michael.blog/2017/07/25/improving-the-wordpress-experience/">
										Improving the WordPress experience
									</a>
								</li>
								<li>
									<a href="https://michael.blog/2016/01/06/the-shape-of-wordpress-shapes-the-web/">
										The shape of WordPress shapes the web
									</a>
								</li>
							</List>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
