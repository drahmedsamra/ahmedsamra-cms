import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),

    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})