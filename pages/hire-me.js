import Back from "../components/back/back";
import Card from "../components/card/card";
import Heading from "../components/heading/heading";
import Layout from "../components/layout/layout";
import List from "../components/list/list";
import SEO from "../components/seo";
import Spacer from "../components/spacer/spacer";
import Text from "../components/text/text";

import styles from "../styles/hire-me.module.scss";

export default function Home() {
	return (
		<Layout backgroundColor="#000000" textColor="#ffffff">
			<SEO title="got any jobby trees where i can find some jobs?" />

			<main>
				<Back href="/">Home</Back>
				<Card width="small" style={{ margin: "40px auto" }}>
					<Spacer height="15vh" />
					<Heading>Hire me</Heading>
					<Text>
						I'm currently accepting new clients. If you are interested in
						working together, please reach out.
					</Text>
					<Spacer />
					<List className={styles.list} minimal mono condensed>
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
