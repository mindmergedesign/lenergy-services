// Import all schemas from the singletons folder
import generic from './documents/generic'
import home from './documents/home'
import siteSettings from './documents/siteSettings'

// Import all schemas from the objects folder
import fileDownload from './objects/fileDownload'
import hero from './objects/hero'
import imageAndText from './objects/imageAndText'
import imageGallery from './objects/imageGallery'
import pageBuilder from './objects/pageBuilder'
import pageBuilderContent from './objects/pageBuilderContent'
import portableText from './objects/portableText'
import seo from './objects/seo'
import social from './objects/social'
import titleAndDescription from './objects/titleAndDescription'
import videoEmbed from './objects/videoEmbed'

export const schemaTypes = [
  fileDownload,
  generic,
  hero,
  home,
  imageAndText,
  imageGallery,
  pageBuilder,
  pageBuilderContent,
  portableText,
  seo,
  siteSettings,
  social,
  titleAndDescription,
  videoEmbed,
]
