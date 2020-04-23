export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'Thumbnail',
      title: 'Thumbnail',
      type: 'image',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      title: 'Related Content',
      name: 'relatedcontent',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'ourValue',
      title: 'Our Value',
      type: 'array',
      of: [{ title: 'Item', type: 'string' }],
    },
    {
      name: 'BrandIdentity',
      title: 'Brand Identity',
      type: 'brandIdentity',
    },
    {
      name: 'reachUsText',
      title: 'ReachUs Text',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'Thumbnail',
    },
  },
};
