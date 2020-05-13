import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogEntry from "../components/blogEntry";
import { Link } from "gatsby";

const CategoryPage = ({ pageContext: data }) => {
  const { title, posts } = data;
  return (
    <Layout>
      <SEO title={title} />
      <Link to="/">Back to homepage</Link>
      <h1>Tag: {title}</h1>
      <section className="blog_feed">
        {posts.map(node => {
          const front = node.frontmatter;
          return (
            <BlogEntry key={front.slug} excerpt={node.excerpt} {...front} />
          );
        })}
      </section>
    </Layout>
  );
};

export default CategoryPage;
