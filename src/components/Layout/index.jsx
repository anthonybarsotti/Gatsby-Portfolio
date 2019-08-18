import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";

import styles from "./index.module.scss";

export default class Layout extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired
	}

	render() {
		const { children } = this.props;

		return <>
			<Header siteName="Maura Scanlan" />
			<main id="main-content" className={styles.main}>
				{children}
			</main>
		</>;
	}

}