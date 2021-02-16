import Link from "next/link";
import SEO from "../../components/seo";
import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
// import styles from "../styles/projects.module.scss";

export default function Home() {
	return (
		<Layout>
			<SEO title="Projects" />

			<main>
				<h2>eye candy</h2>
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
