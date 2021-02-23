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

	classes = cn(
		styles.card,
		this.hasCircles(),
		this.isCompact(),
		this.props.addedClass,
		this.props.className
	);

	renderCard() {
		if ( this.props.href ) {
			console.log( this.props.classes );
			return	(
				<a
					href={ this.props.href }
					className={ this.classes }
					style={ this.styles }>
					{ this.props.children }
				</a>
			);
		} else {
			console.log( this.props.classes );
			return	(
				<Item className={ this.classes } { ...this.props }>
					{ this.props.children }
				</Item>
			);
		}
	}

	render() {
		return this.renderCard();
	}
}