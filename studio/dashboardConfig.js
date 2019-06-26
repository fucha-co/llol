export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d12d45af0e7fca02c0f65c1',
                  title: 'Sanity Studio',
                  name: 'llol-studio',
                  apiId: 'a9203eeb-c5dd-415a-853a-304f490724b0'
                },
                {
                  buildHookId: '5d12d45a7d8d87ec287598e4',
                  title: 'Blog Website',
                  name: 'llol',
                  apiId: 'cf545499-19d6-4f46-b1e4-1816e826a57f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stoqe/llol',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://llol.netlify.com', category: 'apps'}
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
