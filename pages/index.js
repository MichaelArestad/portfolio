import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import List from "../components/list/list";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Michael's lil folio</title>
			</Head>
			<main>
				<p className="description">I'm a designer who futzes with code.</p>
				<List minimal>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/code">Code</Link>
					</li>
				</List>
				<br title="yup" />
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
