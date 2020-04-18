import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import BlogEntry from "../components/blogEntry";

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              slug
              title
              youtube
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);
  const posts = allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="blog_feed">
        {posts.map(({ node }) => {
          const front = node.frontmatter;
          return (
            <BlogEntry key={front.slug} excerpt={node.excerpt} {...front} />
          );
        })}
      </section>
    </Layout>
  );
};
export default IndexPage;
