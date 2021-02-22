import Link from "next/link";
import FancyLink from "../components/fancyLink/fancy-link";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import List from "../components/list/list";

export default function Home() {
	return (
		<Layout header home>
			<SEO title="Michael's lil folio" />
			<main>
				<List minimal mono align="center">
					<li>
						<FancyLink href="/who">who?</FancyLink>
					</li>
					<li>
						<FancyLink href="/projects/">projects</FancyLink>
					</li>
					<li>
						<FancyLink href="/projects/eye-candy">eye candy</FancyLink>
					</li>
					<li>
						<FancyLink href="/hire-me">hire me</FancyLink>
					</li>
				</List>
				<br title="yup" />
			</main>
		</Layout>
	);
}
