const fs = require(`fs`);
const path = require('path');
const fetch = require('isomorphic-unfetch');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulPages {
        edges {
          node {
            title
            id
            slug
          }
        }
      }
    }
  `).then(async result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString())); // eslint-disable-line
      return Promise.reject(result.errors);
    }

    // console.log('result', result);
    result.data.allContentfulPages.edges.forEach(({ node }) => {
      // console.log('node', node);
      const pagePath = `page/${node.slug}`;
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/page.js`),
        // additional data can be passed via context
        context: {
          slug: node.slug,
        },
      });
    });

    return null;
  });
};
