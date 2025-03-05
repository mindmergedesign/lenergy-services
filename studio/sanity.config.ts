import { table } from '@sanity/table';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { media } from 'sanity-plugin-media';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
import { structure } from './structure';

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
