import Link from "next/link";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import List from "../components/list/list";

export default function Home() {
	return (
		<Layout header>
			<SEO title="Michael's lil folio" />
			<main>
				<List minimal align="center">
					<li>
						<Link href="/who">who?</Link>
					</li>
					<li>
						<Link href="/projects/">projects</Link>
					</li>
					<li>
						<Link href="/projects/eye-candy">eye candy</Link>
					</li>
					<li>
						<Link href="/hire-me">hire me</Link>
					</li>
				</List>
				<br title="yup" />
			</main>
		</Layout>
	);
}
