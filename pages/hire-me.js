import Link from "next/link";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/hero/hero";
import Back from "../components/back/back";
import Card from "../components/card/card";
import List from "../components/list/list";

export default function Home() {
	return (
		<Layout>
			<SEO title="say hi" />

			<main>
				<Hero
					title="Hire me"
					description="I'm currently accepting new clients. If you are interested in working together, please reach out."
					backgroundColor="#000"
					textColor="#fff">
					<Back href="/">Home</Back>
				</Hero>
				<Card>
					<List minimal condensed>
						<li>
							<a href="mailto:marestad@gmail.com">Email</a>
						</li>
						<li>
							<a href="https://michael.blog/">Blog</a>
						</li>
						<li>
							<a href="https://github.com/MichaelArestad">GitHub</a>
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
