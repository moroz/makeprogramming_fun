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
            frontmatter {
              slug
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
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }) => {
    const slug = node.frontmatter.slug;
    createPage({
      path: `/posts/${slug}`,
      component: postTemplate,
      context: { slug }
    });
  });
};
