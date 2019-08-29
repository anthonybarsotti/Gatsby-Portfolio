import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import ProjectTeaser from "../components/ProjectTeaser";

export default class IndexPage extends React.Component {

	get teasers() {
		return this.props.data.allWordpressWpProject.edges.map(({ node }) => (
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
	}
	
	render() {
		return (
			<Layout>
				{ this.teasers }
			</Layout>
		);
	}

};

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
									fluid(maxWidth: 1520, quality: 75) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
						project_subtitle
					}
				}
			}
		}
	}
`;
