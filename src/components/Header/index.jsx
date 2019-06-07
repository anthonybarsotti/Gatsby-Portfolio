import React from "react";
import { Link } from "gatsby";

import OffcanvasToggle from "../OffcanvasToggle";

import styles from "./index.module.scss";

export default class Header extends React.Component {

	static defaultProps = {
		fontColor: "#fff"
	};

	constructor(props) {
		super(props);
		
		this.state = {
			navActive: false
		};
	}

	toggleNavActive = () => {
		this.setState(state => ({ navActive: !state.navActive }));
	}

	render() {
		const { fontColor, siteName } = this.props;
		const { navActive } = this.state;
		const logoStyles = {
			color: fontColor
		};

		return <header className={ styles.header }>
			<div className="outer-pad">
				<div className={ styles.inner }>
					<Link className={ styles.logo } style={ logoStyles } to="/">
						{ siteName }
					</Link>
					<OffcanvasToggle
						active={ navActive }
						iconColor={ fontColor }
						onClick={ this.toggleNavActive }
					/>
				</div>
			</div>
		</header>;
	}
};
