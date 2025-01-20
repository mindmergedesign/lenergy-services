export default {
  name: 'fileDownload',
  title: 'Document Download',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'document',
      title: 'Document',
      type: 'file',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
