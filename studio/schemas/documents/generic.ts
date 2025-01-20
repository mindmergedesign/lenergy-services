export default {
  name: 'generic',
  title: 'Generic',
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
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder',
    },
  ],
}
