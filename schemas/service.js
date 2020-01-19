export default {
    name: 'service',
    title: 'service',
    type: 'document',
    fields: [
      {
        title: 'order',
        name: 'Order',
        type: 'number'
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        title: 'logo',
        name: 'Logo',
        type: 'image',
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text'
      }, 
      {
        name: 'herotitle',
        title: 'Hero Title',
        type: 'string'
      }, 
      {
        name: 'herosubtitle',
        title: 'Hero Subtitle',
        type: 'string'
      },
      {
        title: 'Products',
        name: 'products',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'products'}
            ]
          }
        ]
      }
    ]
  }
  