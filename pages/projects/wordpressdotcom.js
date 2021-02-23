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
				</Hero>

				<Card circles backgroundColor="#117ac9">
					<Item width="large" style={{ margin: "40px auto" }}>
						<Card compact backgroundColor="#ffffff" style={{ marginTop: "24px" }}><Text caption>TBD</Text></Card>
					</Item>
				</Card>
				<Card backgroundColor="#117ac9" textColor="#fff">
					<Item style={{ margin: "0 auto" }} width="small">
						<Text>Content TBD</Text>
					</Item>
				</Card>
				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem width="small">
							<Heading>Calypso</Heading>
							<Text>TBD</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
