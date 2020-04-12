export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e938610abd8cc9271284fbf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-28ps2113',
                  apiId: '81c56606-838d-40eb-a2bf-753d2feee47d'
                },
                {
                  buildHookId: '5e938610802adab0fc8bc72a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-76m9n6gw',
                  apiId: '6996e1fa-4dee-4575-a908-5c5182c1631c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ifmael/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-76m9n6gw.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
