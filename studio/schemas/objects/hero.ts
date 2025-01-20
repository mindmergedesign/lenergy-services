export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'heroContent',
      title: 'Hero Content',
      type: 'portableText',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
