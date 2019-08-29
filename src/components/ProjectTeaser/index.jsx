import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./index.module.scss";

export default class ProjectTeaser extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		excerpt: PropTypes.string.isRequired,
		image: PropTypes.object.isRequired,
		url: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			blurred: false
		};

		this.formattedExcerpt = this.formatExcerpt(this.props.excerpt);
	}

	formatExcerpt(excerpt) {
		const temp = document.createElement("DIV");

		temp.innerHTML = this.props.excerpt;

		return `${temp.textContent.replace("[…]", "").trim()}…`;
	}

	render() {
		const { id, title, subtitle, image, url } = this.props;
		const headingId = `project-${id}-heading`;
		const { fluid } = image.localFile.childImageSharp;
		const blurFilter = this.state.blurred ? "blur(5px)" : null;

		return (
			<article
				className={ styles.article }
				aria-labelledby={ headingId }
			>
				<Img
					className={ styles.featuredImage }
					fluid={{ ...fluid, aspectRatio: 16/9 }}
					objectFit="cover"
					objectPosition="50% 50%"
					style={{ filter: blurFilter, transition: ".3s filter ease-in-out" }}
				/>
				<div className={ styles.articleContent }>
					<div style={{ filter: blurFilter, transition: ".3s filter ease-in-out" }}>
						<h2 id={ headingId } className={ styles.title }>{ title }</h2>
						<p className={ styles.subtitle }>{ subtitle }</p>
						<p>{ this.formattedExcerpt }</p>
					</div>
					<div className="text-right mt-auto">
						<Link
							className={ styles.cta }
							to={ url }
							onFocus={ () => { this.setState({ blurred: true }) } }
							onBlur={ () => { this.setState({ blurred: false }) } }
							onMouseEnter={ () => { this.setState({ blurred: true }) } }
							onMouseLeave={ () => { this.setState({ blurred: false }) } }
						>
							View Project<Arrow aria-hidden="true" className="inline-block ml-3" />
						</Link>
					</div>
				</div>
			</article>
		);
	}

};

function Arrow(props) {
	return (
		<svg {...props} width="41px" height="10px" viewBox="0 0 41 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g transform="translate(-1321.000000, -584.000000)" fill="#FF7100" fillRule="nonzero">
					<g transform="translate(1169.000000, 574.000000)">
						<path d="M184,15.75 L152,15.75 L152,14.75 L184,14.75 L184,10.75 L193,15.25 L184,19.75 L184,15.75 Z"></path>
					</g>
				</g>
			</g>
		</svg>
	);
}
