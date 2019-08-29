import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import styles from "./index.module.scss";

export default class Layout extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		styles: PropTypes.object.isRequired
	}

	static defaultProps = {
		styles: {
			backgroundColor: "#000",
			color: "#fff"
		}
	}

	render() {
		const { children } = this.props;

		return (
			<div className={ styles.layout } style={ this.props.styles }>
				<Header
					siteName="Maura Scanlan"
					styles={{ color: this.props.styles.color }}
				/>
				<main id="main-content" className={ styles.main }>
					{ children }
				</main>
			</div>
		);
	}

}