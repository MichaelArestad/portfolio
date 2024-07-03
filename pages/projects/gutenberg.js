import SEO from "../../components/seo";
import Layout from "../../components/layout/layout";
import Hero from "../../components/hero/hero";
import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Text from "../../components/text/text";
import Heading from "../../components/heading/heading";
import Flex from "../../components/flex/flex";
import FlexItem from "../../components/flex/flex-item";
import Item from "../../components/item/item";
import Image from "../../components/image/image";

export default function Home() {
	return (
		<Layout backgroundColor="#e7e7e7">
			<SEO title="Gutenberg" />

			<main>
				<Hero
					title="Gutenberg"
					description="A WordPress editing experience rebuilt from the ground up"
					backgroundColor="var( --color-dark )"
					textColor="var( --color-light )"
				>
					<Back href="/projects/">Projects</Back>
				</Hero>

				<Card circles backgroundColor="var( --color-dark )">
					<Item width="l" style={{ margin: "var( --unit-5 ) auto" }}>
						<Image
							src="/images/gutenberg/gberg-demo.jpg"
							width="800"
							height="448"
							alt="Gutenberg demo"
						/>
						<Card
							compact
							backgroundColor="#ffffff"
							style={{ marginTop: "var( --unit-3 )" }}
						>
							<Text caption>
								Gutenberg is a new breed of editor with a block-based interface
								built in React.
							</Text>
						</Card>
					</Item>
				</Card>
				<Card
					backgroundColor="var( --color-dark )"
					textColor="var( --color-light )"
				>
					<Item centered width="s">
						<Text size="l">TBD</Text>
					</Item>
				</Card>
				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="s">
							<Heading>The editor</Heading>
							<Text>TBD</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
