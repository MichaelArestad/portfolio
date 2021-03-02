import Head from "next/head";
import { useRouter } from "next/router";

const baseUrl = "https://michaelarestad.com";
const defaultDescription = `The playground and portfolio of Michael Arestad.`;

// This is entirely copied from https://github.com/ItsJonQ/jonquach/blob/master/components/seo.js

export default function SEO({
	title,
	image = "",
	description = defaultDescription,
}) {
	const siteTitle = title
		? `${title} - Michael Arestad`
		: "Michael Arestad was here";
	const router = useRouter();

	const url = `${baseUrl}${router.asPath}`;
	const imagePath = image ? `${baseUrl}${image}` : "/images/maximum-seo.jpg";

	return (
		<Head>
			<title>{siteTitle}</title>
			<meta name="title" content={siteTitle} />
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={siteTitle} />
			<meta property="og:description" content={description} />
			{imagePath && <meta property="og:image" content={imagePath} />}

			<meta property="twitter:creator" content="@michaelarestad" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={siteTitle} />
			<meta property="twitter:description" content={description} />

			{imagePath && <meta property="twitter:image" content={imagePath} />}
		</Head>
	);
}
