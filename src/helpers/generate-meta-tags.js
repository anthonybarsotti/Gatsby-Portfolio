import React from "react";

/**
 * Generates meta tags based on Yoast SEO data.
 * We can't do this via a component because Helmet
 * doesn't allow nested components.
*/
export default function generateMetaTags(data) {
	return data.map(({ name, property, content }, i) => {
		const attrs = {};

		if (!!name) attrs.name = name;
		if (!!property) attrs.property = property;
		if (!!content) attrs.content = content;

		return <meta key={`meta-tag-${i}`} {...attrs} />;
	});
};