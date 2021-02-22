import React from "react";
import styles from "./card.module.scss";
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

	renderCard() {
		if ( this.props.href ) {
			return	(
				<a href={ this.props.href } className={ cn( styles.card, this.hasCircles(), this.isCompact(), this.props.className ) } style={{ backgroundColor: this.props.backgroundColor, color: this.props.textColor }}>{ this.props.children }</a>
			);
		} else {
			return	(
				<div className={ cn( styles.card, this.hasCircles(), this.isCompact(), this.props.className ) } style={{ backgroundColor: this.props.backgroundColor, color: this.props.textColor }}>
					{ this.props.children }
				</div>
			);
		}
	}

	render() {
		return this.renderCard();
	}
}