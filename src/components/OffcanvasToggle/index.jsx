import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

export default class OffcanvasToggle extends React.Component {

	static defaultProps = {
		iconColor: "#fff"
	}

	static propTypes = {
		active: PropTypes.bool.isRequired,
		iconColor: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		navId: PropTypes.string.isRequired
	}
	
	get iconLines() {
		const { iconColor, active } = this.props;

		return Array.from({ length: 4 }).map((_, i) => {
			const computedStyles = {
				backgroundColor: iconColor
			};

			// Add opacity for first and last
			if (i === 0 || i === 3) {
				computedStyles.opacity = active ? 0 : 1;
			} else if (i === 1) {
				computedStyles.transform = `translate(-50%, -50%) rotate(${active ? 45 : 0}deg)`;
			} else {
				computedStyles.transform = `translate(-50%, -50%) rotate(${active ? -45 : 0}deg)`;
			}

			return <span
				key={ `icon-line-${i}` }
				className={ styles.line }
				style={ computedStyles }
				role="presentation"
			/>
		});
	}

	render() {
		const { active, onClick, id, navId } = this.props;

		return (
			<button
				id={ id }
				className={ styles.button }
				onClick={ onClick }
				aria-label="Toggle main menu"
				aria-expanded={ active }
				aria-controls={ navId }
			>
				{ this.iconLines }
			</button>
		);
	}

};

