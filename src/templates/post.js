import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YT from "../components/YT";
import Tags from "../components/tags";

const Post = ({ data }) => {
  const { html, frontmatter: front, excerpt } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={front.title} description={front.description || excerpt} />
      <Link to="/">Back to homepage</Link>
      <article className="post">
        <div className="post__date">{front.date}</div>
        <h1 className="post__title">{front.title}</h1>
        <Tags tags={front.tags} />
        {front.youtube ? (
          <YT youtube={front.youtube} title={front.title} />
        ) : null}
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
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        youtube
        description
        tags
      }
    }
  }
`;

export default Post;
