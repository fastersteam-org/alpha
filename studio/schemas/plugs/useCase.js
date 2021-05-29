export default {
  type: 'object',
  name: 'useCasePlug',
  title: 'Use case',
  fields: [
    {
      name: 'useCase',
      type: 'reference',
      to: [{ type: 'useCase' }]
    },
    {
      name: 'caseStudies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      useCase: 'useCase.name'
    },
    /* eslint-disable-next-line no-unused-vars */
    prepare({ title, useCase }) {
      return {
        title: 'Use case',
        subtitle: useCase
      }
    }
  }
}
