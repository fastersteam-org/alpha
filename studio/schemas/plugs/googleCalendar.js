export default {
  type: 'object',
  name: 'googleCalendar',
  title: 'Google Calendar',
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
        title: `Google Calendar: ${title}`
      }
    }
  }
}
