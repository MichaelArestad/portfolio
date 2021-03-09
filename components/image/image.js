import React from "react";
import cn from "classnames";

import Card from "../card/card";
import Text from "../text/text";

import styles from "./image.module.scss";

export default class Image extends React.PureComponent {
	hasBorder() {
		if (this.props.border) {
			return styles.hasBorder;
		}
	}

	alignment() {
		if (this.props.align) {
			switch (this.props.align) {
				case "right":
					return { textAlign: "right" };
				case "center":
					return { textAlign: "center" };
				default:
					break;
			}
		}
	}

	hasCaption() {
		if (this.props.caption) {
			return (
				<Card
					addedClass={cn(styles.card, this.props.addedClass)}
					compact
					style={this.alignment()}
				>
					<Text caption>{this.props.caption}</Text>
				</Card>
			);
		}
	}

	render() {
		let TagName = "div";

		const styling = {
			margin: this.props.margin,
			"--image-border-color": this.props.border,
		};

		if (this.props.href) {
			TagName = "a";
		}

		return (
			<TagName href={this.props.href} className={styles.image}>
				<img
					className={this.hasBorder()}
					style={styling}
					src={this.props.src}
					srcset={this.props.srcset}
					width={this.props.width}
					height={this.props.height}
					alt={this.props.alt}
				/>
				{this.hasCaption()}
			</TagName>
		);
	}
}
