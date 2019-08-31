import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import OffcanvasToggle from "../OffcanvasToggle";
import Offcanvas from "../Offcanvas";
import styles from "./index.module.scss";

const Header = (props) => {
	const [ navActive, setNavActive ] = useState(false);
	const offcanvasId = "main-nav";
	const offcanvasToggleId = "main-nav-toggle";
	const navColor = navActive ? "#000" : props.styles.color;

	return (
		<header className={styles.header}>
			<div className={styles.headerBar}>
				<div className="p-6 md:p-8">
					<div className={styles.inner}>
						<Link
							className={styles.logo}
							style={{ color: navColor }}
							to="/"
						>
							{props.siteName}
						</Link>
						<OffcanvasToggle
							id={offcanvasToggleId}
							active={navActive}
							iconColor={navColor}
							onClick={() => { setNavActive(!navActive) }}
							navId={offcanvasId}
						/>
					</div>
				</div>
			</div>
			<Offcanvas
				id={offcanvasId}
				active={navActive}
				toggleId={offcanvasToggleId}
			/>
		</header>
	);
};

Header.defaultProps = {
	siteName: "Portfolio"
};

Header.propTypes = {
	siteName: PropTypes.string.isRequired,
	styles: PropTypes.object.isRequired
};

export default Header;
