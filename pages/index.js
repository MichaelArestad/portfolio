import FancyLink from "../components/fancyLink/fancy-link";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import List from "../components/list/list";

export default function Home() {
	return (
		<Layout header home>
			<SEO />
			<main>
				<List minimal mono align="center">
					<li>
						<FancyLink link href="/who">
							who?
						</FancyLink>
					</li>
					<li>
						<FancyLink link href="/projects/">
							projects
						</FancyLink>
					</li>
					<li>
						<FancyLink surprise="💎" link href="/contact-me">
							say hi
						</FancyLink>
					</li>
				</List>
				<br title="yup" />
			</main>
		</Layout>
	);
}
