import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Offcanvas = ({ active, id, toggleId }) => (
	<nav
		id={id}
		className={styles.offcanvas}
		style={{ opacity: active ? '1' : '0', visibility: active ? 'visible' : 'hidden', transform: `scale(${active ? '1' : '.95'}) translate3d(0, ${active ? '0' : '5%'}, 0)` }}
		aria-hidden={!active}
		aria-labelledby={toggleId}
		aria-label="Primary"
	>

	</nav>
);

Offcanvas.propTypes = {
	active: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	toggleId: PropTypes.string.isRequired
};

export default Offcanvas;
