import React from "react";
import styles from "./card.module.scss";
import Item from "../item/item";
import cn from "classnames";

export default class Card extends React.Component {
	hasCircles() {
		if ( this.props.circles ) {
			return styles.circles;
		}
	}

	isCompact() {
		if ( this.props.compact ) {
			return styles.compact;
		}
	}

	classnames = cn(
		styles.card,
		this.hasCircles(),
		this.isCompact(),
		this.props.className
	);

	renderCard() {
		if ( this.props.href ) {
			return	(
				<a
					href={ this.props.href }
					className={ this.classnames }
					style={ this.styles }>
					{ this.props.children }
				</a>
			);
		} else {
			return	(
				<Item className={ this.classnames } { ...this.props }>
					{ this.props.children }
				</Item>
			);
		}
	}

	render() {
		return this.renderCard();
	}
}