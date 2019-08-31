import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { usePrimaryMenu } from "../../hooks/use-primary-menu";
import styles from "./index.module.scss";

const Offcanvas = ({ active, id, toggleId }) => {
	const menu = usePrimaryMenu();
	const items = menu.items.map((item) => {
		const { pathname } = new URL(item.url);
		return (
			<li key={item.object_id} className="text-center">
				<Link to={pathname} className={styles.menuLink}>{item.title}</Link>
			</li>
		);
	});

	return (
		<nav
			id={id}
			className={styles.offcanvas}
			style={{ opacity: active ? '1' : '0', visibility: active ? 'visible' : 'hidden', transform: `scale(${active ? '1' : '.95'}) translate3d(0, ${active ? '0' : '5%'}, 0)` }}
			aria-hidden={!active}
			aria-labelledby={toggleId}
			aria-label="Primary"
		>
			<ul>
				{items}
			</ul>
		</nav>
	);
}

Offcanvas.propTypes = {
	active: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	toggleId: PropTypes.string.isRequired
};

export default Offcanvas;
