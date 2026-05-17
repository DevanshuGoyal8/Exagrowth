import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Launched', value: 'launched' },
          { title: 'Coming Soon', value: 'coming-soon' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pricingPlan',
          title: 'Pricing Plan',
          fields: [
            defineField({
              name: 'plan',
              title: 'Plan Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.min(0),
            }),
            defineField({
              name: 'currency',
              title: 'Currency',
              type: 'string',
              initialValue: 'USD',
            }),
            defineField({
              name: 'features',
              title: 'Plan Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: {
              plan: 'plan',
              price: 'price',
              currency: 'currency',
            },
            prepare(selection) {
              const { plan, price, currency } = selection
              return {
                title: plan,
                subtitle:
                  price != null
                    ? `${currency ?? 'USD'} ${price}`
                    : 'Price not set',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      status: 'status',
      media: 'image',
    },
    prepare(selection) {
      const { title, status, media } = selection
      const statusLabel = status === 'launched' ? 'Launched' : 'Coming Soon'
      return {
        title,
        subtitle: statusLabel,
        media,
      }
    },
  },
})
