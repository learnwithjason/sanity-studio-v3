import { deskTool } from 'sanity/desk';

export const config = {
  projectId: '0zxm1jwh',
  dataset: 'production',
  title: 'Corgi Fanz',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'corgi',
        title: 'Corgis',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
            },
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      },
    ],
  },
};
