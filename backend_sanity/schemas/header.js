export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'mainName',
      title: 'Main Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'headerMainImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headerSkill',
      title: 'Header Skill',
      type: 'array',
      of: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'altImage',
              title: 'Alt Image',
              type: 'string',
              description: 'Alternative text for the image',
            },
          ],
        },
      ],
    },
  ],
}
