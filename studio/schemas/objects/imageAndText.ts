export default {
  name: 'imageAndText',
  title: 'Image And Text',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'portableText',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
}
