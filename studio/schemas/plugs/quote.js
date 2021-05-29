export default {
  name: 'quote',
  type: 'object',
  title: 'Quote',
  fields: [
    {
      name: 'content',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      content: 'content'
    },
    /* eslint-disable-next-line no-unused-vars */
    prepare({ content }) {
      return {
        title: 'Quote'
      }
    }
  }
}
