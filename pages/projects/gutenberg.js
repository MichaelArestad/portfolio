import Head from "next/head";
import Link from "next/link";
import SEO from "../../components/seo";
import Layout from "../../components/layout/layout";
import styles from "./gutenberg.module.scss";

export default function FirstPost() {
	return (
		<Layout addedStyle={styles.container}>
			<SEO title="Gutenberg" />

			<main className={styles.main}>
				<h2>Gutenberg</h2>
				<p>Gotta write some stuff here</p>
			</main>
		</Layout>
	);
}
