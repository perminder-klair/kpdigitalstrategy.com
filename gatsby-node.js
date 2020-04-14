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
      allSanityProduct {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityBlog {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityDigitalService {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityCaseStudy {
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

  result.data.allSanityProduct.edges.forEach(({ node }) => {
    const pagePath = `product/${node.slug.current}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityBlog.edges.forEach(({ node }) => {
    const pagePath = `blog/${node.slug.current}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityDigitalService.edges.forEach(({ node }) => {
    const pagePath = `digitalService/${node.slug.current}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/digitalService.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityCaseStudy.edges.forEach(({ node }) => {

    createPage({
      path: ,
      component: path.resolve(`./src/templates/individualCaseStudy.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
