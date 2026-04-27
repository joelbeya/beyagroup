import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'Live' },
          { title: 'Coming Soon', value: 'Coming Soon' },
          { title: 'Holding', value: 'Holding' },
          { title: 'Beta', value: 'Beta' },
        ],
      },
      initialValue: 'Coming Soon',
    }),
    defineField({
      name: 'url',
      title: 'Project URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
    defineField({
      name: 'className',
      title: 'Bento Grid Class (Tailwind)',
      type: 'string',
      description: 'e.g., md:col-span-2 md:row-span-2',
      initialValue: 'md:col-span-1 md:row-span-1',
    }),
  ],
})
