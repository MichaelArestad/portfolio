import Link from "next/link";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import List from "../components/list/list";

export default function Home() {
	return (
		<Layout>
			<SEO title="say hi" />

			<main>
				<h2>hiRe mE</h2>
				<List minimal>
					<li>
						<a href="mailto:marestad@gmail.com">Email</a>
					</li>
				</List>
				<List minimal>
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
			</main>
		</Layout>
	);
}
