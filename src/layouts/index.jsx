import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import styles from "./index.module.scss";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Layout = (props) => {
	const { children } = props;
	const { title } = useSiteMetadata();

	return (
		<div className={styles.layout} style={props.styles}>
			<Header
				siteName={ title }
				styles={{ color: props.styles.color }}
			/>
			<main id="main-content" className={styles.main}>
				{ children }
			</main>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	styles: PropTypes.object.isRequired
};

Layout.defaultProps = {
	styles: {
		backgroundColor: "#000",
		color: "#fff"
	}
};

export default Layout;
