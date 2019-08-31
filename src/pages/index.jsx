import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import ProjectTeaser from "../components/ProjectTeaser";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const IndexPage = (props) => {
	const { title } = useSiteMetadata();
	const teasers = props.data.allWordpressWpProject.edges.map(({ node }) => (
		<ProjectTeaser
			key={ node.id }
			id={ node.id }
			title={ node.title }
			excerpt={ node.excerpt }
			url={ node.path }
			subtitle={ node.acf.project_subtitle }
			image={ node.acf.project_featured_images[0] }
		/>
	));

	return (
		<Layout>
			<h1 className="sr-only">{ title }</h1>
			{ teasers }
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		allWordpressWpProject {
			edges {
				node {
					id
					slug
					title
					excerpt
					path
					acf {
						project_featured_images {
							localFile {
								childImageSharp {
									fluid(maxWidth: 760, quality: 75) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
							alt_text
						}
						project_subtitle
					}
				}
			}
		}
	}
`;
