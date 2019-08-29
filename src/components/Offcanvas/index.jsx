import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

export default class Offcanvas extends React.Component {

	static propTypes = {
		active: PropTypes.bool.isRequired,
		id: PropTypes.string.isRequired,
		toggleId: PropTypes.string.isRequired
	}

	get computedStyles() {
		const { active } = this.props;

		return {
			opacity: active ? "1" : "0",
			visibility: active ? "visible" : "hidden",
			transform: `scale(${active ? "1" : ".95"}) translate3d(0, ${active ? "0" : "5%" }, 0)`
		};
	}

	render() {
		const { active, id, toggleId } = this.props;

		return (
			<nav
				id={ id }
				className={ styles.offcanvas }
				style={ this.computedStyles }
				aria-hidden={ !active }
				aria-labelledby={ toggleId }
				aria-label="Primary"
			>

			</nav>
		);
	}

};