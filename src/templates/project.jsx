import React from "react";
import { Helmet } from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";
import Layout from "../layouts";
import Carousel from "../components/Carousel";
import generateMetaTags from "../helpers/generate-meta-tags";
import styles from "./index.module.scss";

const ProjectTemplate = props => {
	const { wordpressWpProject: project } = props.data;
	const metaTags = generateMetaTags(project.yoast_meta);

	return (
		<PageTransition>
			<Layout styles={{ backgroundColor: '#eee', color: '#000' }}>
				<Helmet title={project.title}>
					{metaTags}
				</Helmet>
				<article>
					<header
						className="text-center mb-4"
						aria-label="project title and subtitle"
					>
						<h1 className={styles.title}>{project.title}</h1>
						<p className={styles.subtitle}>{project.acf.project_subtitle}</p>
					</header>
					<section aria-label="project details">
						<div className={styles.carouselWrap}>
							<Carousel
								aspectRatio={[100, 45]}
								images={project.acf.project_featured_images}
							/>
						</div>
						<div
							className={`content-body text-center ${styles.content}`}
							dangerouslySetInnerHTML={{ __html: project.content }}
						/>
					</section>
				</article>
			</Layout>
		</PageTransition>
	);
};

export default ProjectTemplate;

export const pageQuery = graphql`
	query($id: String!) {
		wordpressWpProject(id: { eq: $id }) {
			title
			content
			acf {
				project_subtitle
				project_featured_images {
					localFile {
						childImageSharp {
							fluid(maxWidth: 1440, quality: 75) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
					id
					alt_text
				}
			}
			yoast_meta {
				content
				name
				property
			}
		}
	}
`;
