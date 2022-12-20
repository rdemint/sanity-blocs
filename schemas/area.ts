import {defineField, defineType} from 'sanity'

export default defineType({
    type: 'document',
    name: 'area',
    title: 'Area',
    fields: [defineField({
        type: 'string',
        name: 'name',
        title: 'Name'
    })]
})