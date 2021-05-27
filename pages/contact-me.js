import Back from "../components/back/back";
import Card from "../components/card/card";
import Heading from "../components/heading/heading";
import Layout from "../components/layout/layout";
import List from "../components/list/list";
import SEO from "../components/seo";
import Spacer from "../components/spacer/spacer";
import Text from "../components/text/text";

export default function Home() {
	return (
		<Layout backgroundColor="#000" textColor="#fff">
			<SEO title="got any jobby trees where i can find some jobs?" />

			<main>
				<Back href="/">Home</Back>
				<Card width="s" style={{ margin: "var( --unit-5 ) auto" }}>
					<Spacer height="15vh" />
					<Heading>Contact me</Heading>
					<Text>
						I'm no longer accepting new clients. If you are interested in
						chatting or have a question, please reach out.
					</Text>
					<Spacer />
					<List minimal mono condensed>
						<li>
							<a href="mailto:marestad@gmail.com">Email</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/michaelarestad/">LinkedIn</a>
						</li>
						<li>
							<a href="https://twitter.com/michaelarestad">Twitter</a>
						</li>
					</List>
				</Card>
			</main>
		</Layout>
	);
}
