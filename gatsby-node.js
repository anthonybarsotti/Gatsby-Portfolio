const path = require("path");
const slash = require("slash");

/* Queries */
const projectsQuery = `
	query {
		allWordpressWpProject {
			edges {
				node {
					id
					slug
					title
					content
					acf {
						project_featured_images {
							alt_text
							caption
							source_url
							id
						}
						project_subtitle
					}
				}
			}
		}
	}
`;

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(projectsQuery);

	result.data.allWordpressWpProject.edges.forEach(edge => {
		createPage({
			path: edge.node.slug,
			component: slash(path.resolve("./src/templates/project.jsx")),
			context: {
				id: edge.node.id,
			},
		})
	})
};
