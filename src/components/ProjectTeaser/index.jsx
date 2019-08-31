import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./index.module.scss";

const formatExcerpt = (excerpt) => {
	const temp = document.createElement("DIV");

	temp.innerHTML = this.props.excerpt;

	return `${temp.textContent.replace("[…]", "").trim()}…`;
};

const ProjectTeaser = (props) => {
	const { id, title, subtitle, image, url } = this.props;
	const [blurred, setBlurred] = useState(false);
	const headingId = `project-${id}-heading`;
	const blurFilter = blurred ? "blur(5px)" : null;
	const formattedExcerpt = formatExcerpt(props.excerpt);

	return (
		<article
			className={styles.article}
			aria-labelledby={headingId}
		>
			<Img
				className={styles.featuredImage}
				fluid={{ ...image.localFile.childImageSharp.fluid, aspectRatio: 16 / 9 }}
				objectFit="cover"
				objectPosition="50% 50%"
				style={{ filter: blurFilter, transition: '.3s filter ease-in-out' }}
				alt={image.alt_text}
			/>
			<div className={styles.articleContent}>
				<div className="mb-4" style={{ filter: blurFilter, transition: ".3s filter ease-in-out" }}>
					<h2 id={headingId} className={styles.title}>{title}</h2>
					<p className={styles.subtitle}>{subtitle}</p>
					<p>{formattedExcerpt}</p>
				</div>
				<div className="text-right mt-auto">
					<Link
						to={url}
						className={styles.cta}
						onFocus={() => { setBlurred(true) }}
						onBlur={() => { setBlurred(false) }}
						onMouseEnter={() => { setBlurred(true) }}
						onMouseLeave={() => { setBlurred(false) }}
					>
						View Project<svg aria-hidden="true" className="inline-block ml-3" width="41px" height="10px" viewBox="0 0 41 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-1321.000000, -584.000000)" fill="#FF7100" fillRule="nonzero"><g transform="translate(1169.000000, 574.000000)"><path d="M184,15.75 L152,15.75 L152,14.75 L184,14.75 L184,10.75 L193,15.25 L184,19.75 L184,15.75 Z"></path></g></g></g></svg>
					</Link>
				</div>
			</div>
		</article>
	);
};

ProjectTeaser.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired
};

export default ProjectTeaser;
