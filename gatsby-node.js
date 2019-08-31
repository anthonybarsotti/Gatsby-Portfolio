const path = require("path");
const slash = require("slash");

/* Queries */
const projectsQuery = `
	query {
		allWordpressWpProject {
			edges {
				node {
					id
					path
				}
			}
		}
	}
`;

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(projectsQuery);

	result.data.allWordpressWpProject.edges.forEach(({ node }) => {
		createPage({
			path: node.path,
			component: slash(path.resolve("./src/templates/project.jsx")),
			context: {
				id: node.id
			}
		});
	});
};
