// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { graphql } from 'gatsby';
// import ReactGA from 'react-ga';

// import config from '../utils/config';
// import Seo from '../components/Seo';
// import Layout from '../components/Layout';
// import CategoryHero from '../components/CategoryHero';
// import BlogContent from '../components/BlogContent';

// export const pageQuery = graphql`
//   query PageByPath($slug: String!) {
//     contentfulPages(slug: { eq: $slug }) {
//       id
//       title
//       slug
//       color
//       description {
//         description
//       }
//     }
//   }
// `;

// export default class page extends React.Component {
//   componentDidMount() {
//     // eslint-disable-next-line react/destructuring-assignment
//     const { contentfulPages: page } = this.props.data;

//     ReactGA.pageview(`/page/${page.slug}`);
//   }

//   render() {
//     const { contentfulPages: page } = this.props.data;
//     return (
//       <Layout>
//         <Seo
//           title="Manchester Digital Marketing Agency"
//           description="KP Digital Strategy"
//           url={config.siteUrl}
//           image={config.image}
//         />
//         <CategoryHero page={page} />
//         <BlogContent page={page} />
//       </Layout>
//     );
//   }
// }
