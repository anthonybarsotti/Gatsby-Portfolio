import { useStaticQuery, graphql } from "gatsby";

export const usePrimaryMenu = () => {
	const { wordpressWpApiMenusMenusItems } = useStaticQuery(
		graphql`
			query PrimaryMenu {
				wordpressWpApiMenusMenusItems(slug: {eq: "primary"}) {
					items {
						object_id
						title
						url
					}
				}
			}
		`
	);

	return {
		items: wordpressWpApiMenusMenusItems.items
	}
};