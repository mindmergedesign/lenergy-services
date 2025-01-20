export default {
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    {
      name: 'content',
      title: 'Content',
      type: 'pageBuilderContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'textAndImage',
      title: 'Text And Image',
      type: 'imageAndText',
    },
    {
      name: 'slider',
      title: 'Image Slider',
      type: 'imageGallery',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'videoEmbed',
    },
  ],
}
