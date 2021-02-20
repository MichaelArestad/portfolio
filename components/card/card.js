import React from "react";
import styles from "./card.module.scss";
import cn from "classnames";

export default class Card extends React.Component {
	renderCard() {
		if ( this.props.href ) {
			return	(
				<a href={ this.props.href } className={ cn( styles.cardLink, this.props.className ) } style={{ background: this.props.backgroundColor, color: this.props.textColor }}>{ this.props.children }</a>
			);
		} else {
			return	(
				<div className={ cn( styles.card, this.props.className ) } style={{ background: this.props.backgroundColor, color: this.props.textColor }}>{ this.props.children }</div>
			);
		}
	}

	render() {
		return this.renderCard();
	}
}