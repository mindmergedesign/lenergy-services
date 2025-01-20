export default {
  name: 'social',
  title: 'Social',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      name: 'socialSite',
      title: 'Social Site',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'Tik Tok', value: 'tiktok'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Vimeo', value: 'vimeo'},
          {title: 'Yelp', value: 'yelp'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Pinterest', value: 'pinterest'},
        ],
      },
    },
    {
      name: 'socialUrl',
      title: 'Social URL',
      type: 'url',
      description: 'The URL of the social site',
    },
  ],
}
