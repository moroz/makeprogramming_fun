import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Post = ({ data }) => {
  const { html, frontmatter: front } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={front.title} />
      <article className="post">
        <h1 className="post__title">{front.title}</h1>
        <div className="post__meta">{front.date}</div>
        <div
          className="post__body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

export default Post;
