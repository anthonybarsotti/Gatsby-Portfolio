import React from "react";
import styles from "./index.module.scss";

export default function OffcanvasToggle(props) {
	const iconLines = Array.from({ length: 4 }).map((_, i) => {
		const computedStyles = {
			backgroundColor: props.iconColor
		};

		// Add opacity for first and last
		if (i === 0 || i === 3) {
			computedStyles.opacity = props.active ? 0 : 1;
		} else if(i === 1) {
			computedStyles.transform = `translate(-50%, -50%) rotate(${ props.active ? 45 : 0 }deg)`;
		} else {
			computedStyles.transform = `translate(-50%, -50%) rotate(${ props.active ? -45 : 0 }deg)`;
		}

		return <span
			key={ `icon-line-${i}` }
			className={ styles.line }
			style={ computedStyles }
		/>
	});

	return <button
		className={ styles.button }
		aria-label={ `${props.active ? "hide" : "show" } navigation` }
		aria-expanded={ props.active }
		onClick={ props.onClick }
	>
		{ iconLines }
	</button>;
};