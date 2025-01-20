export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'string',
      description: 'Full site URL',
    },
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Site Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'siteEmail',
      title: 'Email',
      type: 'string',
      description: 'Site Email',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Company Phone Number',
    },
    {
      name: 'fax',
      title: 'FAX Number',
      type: 'string',
      description: 'Company FAX Number',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'portableText',
      description: 'Company Address',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'social',
        },
      ],
    },
    {
      name: 'sharingImage',
      title: 'Sharing image (Facebook, Twitter, etc.)',
      type: 'image',
    },
  ],
}
