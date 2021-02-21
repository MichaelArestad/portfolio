import React from "react";
import styles from "./heading.module.scss";
import cn from "classnames";

export default class Heading extends React.PureComponent {
	render() {
		const {
			children,
			className,
			level,
			...props
		} = this.props;

		let TagName;

		if ( this.props.level ) {
			TagName = 'h' + this.props.level;
		} else {
			TagName = 'h3';
		}

		return (
			<div>
			<TagName className={ cn( styles.heading, className ) }>{ children }</TagName>
			</div>
		);
	}
}