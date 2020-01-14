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
                  buildHookId: '5e1dc20afcba9e6aaa61136e',
                  title: 'Sanity Studio',
                  name: 'lcm-gatsby-studio',
                  apiId: '0692007e-5195-42ee-88cf-d5800412b493'
                },
                {
                  buildHookId: '5e1dc20ac447ac47af3a7449',
                  title: 'Blog Website',
                  name: 'lcm-gatsby',
                  apiId: '9ebfc8a9-d657-422d-a0fc-0742b09d4de1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coach-arne/lcm-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://lcm-gatsby.netlify.com', category: 'apps' }
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
