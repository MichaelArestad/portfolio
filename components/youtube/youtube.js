import styles from "./youtube.module.scss";

export default function YouTube({ src, alt }) {
	const srcLink = `https://www.youtube.com/embed/${src}`;
	let altContent;
	if (alt) {
		altContent = `alt="${alt}"`;
	}

	return (
		<div className={styles.wrapper}>
			<iframe
				className={styles.iframe}
				width="1344"
				height="756"
				src={srcLink}
				srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${srcLink}?autoplay=1><img loading="lazy" src=https://img.youtube.com/vi/${src}/maxresdefault.jpg ${altContent}><span>▶</span></a>`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
