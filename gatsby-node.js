const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityService {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
      allSanityProducts {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  result.data.allSanityService.edges.forEach(({ node }) => {
    const pagePath = `service/${node.slug.current}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/service.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });

  result.data.allSanityProducts.edges.forEach(({ node }) => {
    const pagePath = `product/${node.slug.current}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
