import React, { useState } from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const CarouselPrevButton = (props) => (
	<button
		className={ `${ styles.navButton } left-0` }
		aria-label="View previous slide"
		type="button"
		{ ...props }
	>
		<svg aria-hidden="true" width="16px" height="40px" viewBox="0 0 16 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(-26.000000, -486.000000)" stroke="#FFFFFF" strokeWidth="3"><g transform="translate(28.000000, 488.000000)"><g transform="translate(6.000000, 18.000000) scale(-1, -1) translate(-6.000000, -18.000000) "><path d="M0.166666667,0.321428571 L11.8333333,17.6785714"></path><path d="M0.166666667,18.3214286 L11.8333333,35.6785714" transform="translate(6.000000, 27.000000) scale(1, -1) translate(-6.000000, -27.000000) "></path></g></g></g></g></svg>
	</button>
);

const CarouselNextButton = (props) => (
	<button
		className={ `${ styles.navButton } right-0` }
		aria-label="View next slide"
		type="button"
		{ ...props }
	>
		<svg aria-hidden="true" width="16px" height="40px" viewBox="0 0 16 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(-1399.000000, -486.000000)" stroke="#FFFFFF" strokeWidth="3"><g transform="translate(28.000000, 488.000000)"><g transform="translate(1373.000000, 0.000000)"><path d="M0.166666667,0.321428571 L11.8333333,17.6785714"></path><path d="M0.166666667,18.3214286 L11.8333333,35.6785714" transform="translate(6.000000, 27.000000) scale(1, -1) translate(-6.000000, -27.000000) "></path></g></g></g></g></svg>
	</button>
);

const Carousel = (props) => {
	const [ index, setIndex ] = useState(props.startIndex);
	const slides = props.images.map((image, i) => (
		<Img
			key={ image.id }
			className="top-0 right-0 bottom-0 left-0"
			fluid={{ ...image.localFile.childImageSharp.fluid, aspectRatio: props.aspectRatio[0] / props.aspectRatio[1] }}
			objectFit="cover"
			objectPosition="50% 50%"
			style={{ position: "absolute", opacity: index === i ? "1" : "0", transition: ".5s opacity ease-in-out" }}
			alt={ image.alt_text }
		/>
	));

	const onPrevClick = () => { setIndex(index - 1 !== -1 ? index - 1 : slides.length - 1) };
	const onNextClick = () => { setIndex(index + 1 !== slides.length ? index + 1 : 0) }

	return (
		<div className={ styles.carousel }>
			<div style={{ paddingBottom: `${props.aspectRatio[1] / props.aspectRatio[0] * 100}%` }} role="presentation" />
			{ slides }
			{ slides.length > 1 ? <CarouselPrevButton onClick={ onPrevClick } /> : null }
			{ slides.length > 1 ? <CarouselNextButton onClick={ onNextClick } /> : null }
		</div>
	);
};

Carousel.propTypes = {
	startIndex: PropTypes.number.isRequired,
	aspectRatio: PropTypes.arrayOf(PropTypes.number).isRequired,
	images: PropTypes.arrayOf(PropTypes.object).isRequired
};

Carousel.defaultProps = {
	startIndex: 0,
	aspectRatio: [ 16, 9 ]
};

export default Carousel;
