const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
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
              tags
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const postTemplate = path.resolve("src/templates/post.js");
  const categoryTemplate = path.resolve("src/templates/category.js");
  const posts = result.data.allMarkdownRemark.edges;
  const tagsPosts = {};
  posts.forEach(({ node }) => {
    const { tags, slug } = node.frontmatter;
    tags &&
      tags.forEach(tag => {
        if (!tagsPosts[tag]) tagsPosts[tag] = [];
        tagsPosts[tag].push(node);
      });
    createPage({
      path: `/posts/${slug}`,
      component: postTemplate,
      context: { slug }
    });
  });

  Object.keys(tagsPosts).forEach(key => {
    const slug = key.toLowerCase().replace(/\s+/g, "-");
    createPage({
      path: `/tags/${slug}`,
      component: categoryTemplate,
      context: { title: key, posts: tagsPosts[key] }
    });
  });
};
