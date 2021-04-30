import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Flex from "../../components/flex/flex";
import FlexItem from "../../components/flex/flex-item";
import GalleryOverlap from "../../components/gallery-overlap/gallery-overlap";
import Heading from "../../components/heading/heading";
import Hero from "../../components/hero/hero";
import HeroContent from "../../components/hero/hero-content";
import Image from "../../components/image/image";
import Item from "../../components/item/item";
import Layout from "../../components/layout/layout";
import Text from "../../components/text/text";
import SEO from "../../components/seo";

export default function Home() {
	return (
		<Layout backgroundColor="#FFFEFA" textColor="#150619">
			<SEO title="Pipe Wrench" />

			<main>
				<Hero
					title="Pipe Wrench"
					description="The world's most interesting dinner party, but a magazine."
					backgroundColor="#150619"
					textColor="#FFFEFA"
				>
					<Back href="/projects/">Projects</Back>
					<HeroContent>
						<Image
							width={320}
							height={181}
							src="/images/pipe-wrench/logo-light_m.png"
						/>
					</HeroContent>
				</Hero>

				<Card backgroundColor="#D33838">
					<Item width="l" style={{ margin: "var( --unit-5 ) auto" }}>
						<Image
							src="/images/pipe-wrench/home.jpg"
							width={800}
							height={456}
						/>
						<Card
							compact
							backgroundColor="#150619"
							textColor="#FFFEFA"
							style={{ marginTop: "var( --unit-3 )" }}
						>
							<Text caption>
								"A release every other month, featuring one core longform story
								and a constellation of other pieces interpreting or reacting or
								springboarding off it."
							</Text>
						</Card>
					</Item>
				</Card>
				<Card backgroundColor="#150619" textColor="#FFFEFA">
					<Item centered width="s">
						<Text size="l">
							I designed the Pipe Wrench website. It's an in-your-face and also
							elegant WordPress theme designed to give design super powers to
							the editors. I gave them the freedom to play with the content
							without needing me. I know. Design anarchy. \m/
						</Text>
					</Item>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Color</Heading>
							<Text>Look at these colors!</Text>
							<Text>(updating this soon with details on the process)</Text>
						</FlexItem>
						<FlexItem>
							<Image
								width={800}
								height={427}
								src="/images/pipe-wrench/brand-colors.jpg"
							/>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Typography</Heading>
							<Text>
								Pipe Wrench needs a balance of type that allows the content to
								be both bold and poetic. In order to accomplish this, I needed
								massive a massive display typeface and an elegant body copy
								typeface.
							</Text>
							<Text>
								For headlines and buttons, I looked for a heavy display typeface
								reminiscent of Russian Constructivist posters, yet not quite as
								agressive.{" "}
								<a href="https://fonts.google.com/specimen/Teko">Teko</a> by the
								Indian Type Foundry fit this bill. When it is all caps, it has
								some massive IMPACT.
							</Text>
							<Text>
								For body copy, I looked for an elegant typeface with a larger
								x-height that contrasts with Teko.{" "}
								<a href="https://fonts.google.com/specimen/Bitter">Bitter</a> by
								Argentinian type foundry , Huerta Tipográfica, paired nicely and
								has quite the range of styles and weights. &lt;3
							</Text>
						</FlexItem>
					</Flex>
					<FlexItem>
						<Image
							border
							width={1600}
							height={854}
							src="/images/pipe-wrench/typography.jpg"
						/>
					</FlexItem>
				</Card>

				{/* <Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>Template Variation</Heading>
							<Text>TBD</Text>
						</FlexItem>
					</Flex>
				</Card> */}

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>WYSIWYG Editing (for real)</Heading>
							<Text>
								I took advantage of the editor's super powers and took extra
								care to ensure that when folks are editing content, it looks as
								close to possible as what is rendered on the front end. This
								makes it so much faster to compose interesting layouts and
								designs without having to preview every change. Below, you can
								see an image of a post in the editor and a second image of the
								post once published.
							</Text>
						</FlexItem>
					</Flex>
				</Card>

				<Card>
					<GalleryOverlap>
						<Image
							border="#FFFEFA"
							caption="the editor"
							src="/images/pipe-wrench/editor.jpg"
							width={800}
							height={456}
						/>

						<Image
							border="#FFFEFA"
							align="right"
							caption="the front-end"
							src="/images/pipe-wrench/front-end.jpg"
							width={800}
							height={456}
						/>
					</GalleryOverlap>
				</Card>
			</main>
		</Layout>
	);
}
