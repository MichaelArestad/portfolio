import cn from "classnames";

export default function Item({
	backgroundColor,
	maxWidth,
	textColor,
	className,
	children
}) {

	const styles = {
		backgroundColor: backgroundColor,
		maxWidth: maxWidth,
		color: textColor
	};

	return <div style={ styles } className={ className }>{ children }</div>
}