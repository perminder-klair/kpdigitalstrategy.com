// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import blog from './blog';
import service from './service';
import product from './product';
import digitalService from './digitalService';
import aboutUs from './aboutus';
import team from './team';
import portfolio from './portfolio';
import portfolioItemImage from './portfolioItemImage';
import faq from './faq';
import faqQuestion from './faqQuestion';
import features from './features';
import featuresItem from './featuresItem';
import testimonialItem from './testimonialItem';
import siteSettings from './siteSettings';
import caseStudy from './caseStudy';
import details from './details';
import gallery from './gallery';
import brandIdentity from './brandIdentity';
import brandIdentityItem from './brandIdentityItem';
import sliderItem from './sliderItem';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    service,
    caseStudy,
    product,
    blog,
    digitalService,
    aboutUs,
    team,
    features,
    featuresItem,
    portfolio,
    portfolioItemImage,
    faq,
    faqQuestion,
    testimonialItem,
    siteSettings,
    details,
    gallery,
    brandIdentity,
    brandIdentityItem,
    sliderItem,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
