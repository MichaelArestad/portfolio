import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/layout";

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
			</Head>

			<main>
				<h2>Gutenberg</h2>
				<p>Gotta write some stuff here</p>
			</main>
		</Layout>
	);
}
