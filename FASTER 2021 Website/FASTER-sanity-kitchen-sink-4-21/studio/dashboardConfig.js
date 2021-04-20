export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6071c1f4c702675ee8958f68',
                  title: 'Sanity Studio',
                  name: 'faster-sanity-kitchen-sink-4-21-studio',
                  apiId: 'dd8ad000-424d-41b6-9473-763134bcc57b'
                },
                {
                  buildHookId: '6071c1f5202b565b67da6d81',
                  title: 'Blog Website',
                  name: 'faster-sanity-kitchen-sink-4-21',
                  apiId: '3c0153eb-bc34-45c6-8df2-5d502a2b1074'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/FASTER-sanity-kitchen-sink-4-21',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://faster-sanity-kitchen-sink-4-21.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
