export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Meta Title should be less than 60 characters',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Meta Description should be less than 320 characters',
    },
    {
      name: 'sharingImage',
      title: 'Sharing image (Facebook, Twitter, etc.)',
      type: 'image',
    },
  ],
}
