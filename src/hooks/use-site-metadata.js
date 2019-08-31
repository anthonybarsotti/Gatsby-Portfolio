import { useStaticQuery, graphql } from "gatsby";
import _get from "lodash.get";

export const useSiteMetadata = () => {
	const { allWordpressSiteMetadata } = useStaticQuery(
		graphql`
			query SiteMetaData {
				allWordpressSiteMetadata {
					edges {
						node {
							name
						}
					}
				}
			}
		`
	);

	return {
		title: _get(allWordpressSiteMetadata, "edges[0].node.name", "My Portfolio"),
	};
}
