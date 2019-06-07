import React from "react";
import styles from "./index.module.scss";

export default function OffcanvasToggle(props) {
	const iconLines = Array.from({ length: 4 }).map((_, i) => {
		const lineStyles = {
			backgroundColor: props.iconColor
		};

		// Add opacity for first and last
		if (i === 0 || i === 3) {
			lineStyles.opacity = props.active ? 0 : 1;
		} else if(i === 1) {
			lineStyles.transform = `translate(-50%, -50%) rotate(${ props.active ? 45 : 0 }deg)`;
		} else {
			lineStyles.transform = `translate(-50%, -50%) rotate(${ props.active ? -45 : 0 }deg)`;
		}

		return <span
			key={ `icon-line-${i}` }
			className={ styles.iconLine }
			style={ lineStyles }
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