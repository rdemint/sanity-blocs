import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'boulder',
    type: 'document',
    title: 'Boulder',
    fields: [
        defineField({
            type: 'string',
            name: 'name',
            title: 'Name'
        }),
        defineField({
            type: 'string',
            name: 'guidebookGrade',
            title: 'Guidebook Grade'
        }), 
        defineField({
            type: 'string',
            name: 'cebGrade',
            title: 'CEB Grade'
        }),
        defineField({
            type: 'image',
            name: 'image',
            title: 'Image'
        }),
        defineField({
            type: 'boolean',
            name: 'isCollectorsEdition',
            title: 'Collectors edition'
        }),
        defineField({
            type: 'number',
            name: 'guidebookStars',
            title: 'Guidebook stars',
            validation: Rule => Rule.min(0).max(5).error('Must be 0 through 4')

        }),
        defineField({
            type: 'number',
            name: 'cebStars',
            title: 'CEB Stars',
            validation: Rule => Rule.required().min(0).max(7).error('Must be 0 through 7')
        }),
        defineField({
            type: 'array',
            of: [{type: 'block'}],
            name: 'summary',
            title: 'Summary',
        }),
        defineField({
            type: 'reference',
            to: [{type: 'area'}],
            name: 'area',
            title: 'Area',
        }),
        defineField({
            type: 'url',
            name: 'video',
            title: 'Video',
        }),
        defineField({
            type:'url',
            name: 'embedUrl',
            title: 'embedUrl'
        })
    ]
})