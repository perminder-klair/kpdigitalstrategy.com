export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'isLarge',
      title: 'Is Image Large',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};
