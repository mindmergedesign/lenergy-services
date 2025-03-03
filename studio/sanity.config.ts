import { schemaTypes } from './schemas'
import { table } from '@sanity/table';
import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {structure} from './structure'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Lenergy Services',

  projectId: 'kopfbx3j',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    media(),
    table(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
