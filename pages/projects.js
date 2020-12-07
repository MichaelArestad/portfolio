import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import List from "../components/list/list";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Projects</title>
			</Head>

			<main>
				<List minimal>
					<li>
						<Link href="/projects/gutenberg">Gutenberg</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Gutenpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Jetpack</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">Activity Log</Link>
					</li>
					<li>
						<Link href="/projects/gutenberg">WordPress.com</Link>
					</li>
				</List>
			</main>
		</Layout>
	);
}
