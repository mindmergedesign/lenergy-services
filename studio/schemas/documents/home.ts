export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Document Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'imageAndText',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'portableText'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
}
