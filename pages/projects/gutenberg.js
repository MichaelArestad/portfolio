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
			<SEO title="Gutenberg" />

			<main>
				<Hero
					title="Gutenberg"
					description="A WordPress editing experience rebuilt from the ground up"
					backgroundColor="#000000"
					textColor="#fff"
				>
					<Back href="/projects/">Projects</Back>
				</Hero>

				<Card circles backgroundColor="#000">
					<Item width="large" style={{ margin: "40px auto" }}>
						<img
							src="/images/gutenberg/gberg-demo@2x.jpg"
							width="800"
							height="448"
						/>
						<Card
							compact
							backgroundColor="#ffffff"
							style={{ marginTop: "24px" }}
						>
							<Text caption>
								Gutenberg is a new breed of editor with a block-based interface
								built in React.
							</Text>
						</Card>
					</Item>
				</Card>
				<Card backgroundColor="#000" textColor="#fff">
					<Item style={{ margin: "0 auto" }} width="small">
						<Text>TBD</Text>
					</Item>
				</Card>
				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="small">
							<Heading>The editor</Heading>
							<Text>TBD</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
