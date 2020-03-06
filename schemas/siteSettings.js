export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'homeHeroBackgroundImage',
      title: 'Home Hero Background Image',
      type: 'image',
    },
    {
      name: 'homeHeroBannerImage',
      title: 'Home Hero Banner Image',
      type: 'image',
    },
  ],
};
