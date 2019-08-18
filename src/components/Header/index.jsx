import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import OffcanvasToggle from "../OffcanvasToggle";
import Offcanvas from "../Offcanvas";

import styles from "./index.module.scss";

export default class Header extends React.Component {

	static defaultProps = {
		siteName: "Portfolio"
	};

	static propTypes = {
		siteName: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);
		
		this.state = {
			navActive: false
		};
	}

	get computedStyles() {
		const { navActive } = this.state;

		return {
			logo: {
				color: navActive ? "#000" : "#fff"
			}
		};
	}

	toggleNavActive = () => {
		this.setState(state => ({ navActive: !state.navActive }));
	}

	render() {
		const { siteName } = this.props;
		const { navActive } = this.state;
		const offcanvasId = "main-nav";
		const offcanvasToggleId = "main-nav-toggle";

		return <header className={ styles.header }>
			<div className={ styles.headerBar }>
				<div className="p-6 md:p-8">
					<div className={ styles.inner }>
						<Link
							className={ styles.logo }
							style={ this.computedStyles.logo }
							to="/"
						>
							{ siteName }
						</Link>
						<OffcanvasToggle
							active={ navActive }
							iconColor={ this.computedStyles.logo.color }
							onClick={ this.toggleNavActive }
							id={ offcanvasToggleId }
							navId={ offcanvasId }
						/>
					</div>
				</div>
			</div>
			<Offcanvas
				active={ navActive }
				id={ offcanvasId }
				toggleId={ offcanvasToggleId }
			/>
		</header>;
	}

};
