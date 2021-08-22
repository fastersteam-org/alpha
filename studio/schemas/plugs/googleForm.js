export default {
  type: 'object',
  name: 'googleForm',
  title: 'Google Form',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'string',
      name: 'url'
    }
  ],
  preview: {
    select: {title: 'title'},
    prepare ({title}) {
      return {
        title: `Google Form: ${title}`
      }
    }
  }
}
