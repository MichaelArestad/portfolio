import styles from "./avatar.module.scss";

export default function Avatar({ size = 160 }) {
	return (
		<img className={ styles.avatar } alt="Michael Arestad's face" width={ size } height={ size } src={ "https://www.gravatar.com/avatar/46e0f1b10224bb4e832ea9633acee2b8?s=" + ( size * 2 ) } />
	);
}
