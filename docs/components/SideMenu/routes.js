export default [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: null,
    title: 'Atoms',
    children: [
      {
        path: '/components/button',
        title: 'Button',
      },
      {
        path: '/components/alert',
        title: 'Alert',
      },
      {
        path: '/components/typography',
        title: 'Typography',
      },
      {
        path: '/components/modal',
        title: 'Modal',
      },
    ]
  },
  {
    path: null,
    title: 'Molecules',
  },
]