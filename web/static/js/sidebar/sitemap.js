const bnc = [
  {
    label: 'Join',
    path: 'HOSTNAME',
    subdomained: false,
    children: [],
    matches: () => false
  },

  {
    label: 'Candidates',
    path: 'HOSTNAME/candidates',
    matches: () => window.location.href.match('/candidates'),
    children: []
  },

  {
    label: 'Action',
    path: '/act',
    matches: () =>
      window.location.href.match('/act') ||
      window.location.href.match('/form/submit-event') ||
      window.location.href.match('/form/teams'),
    children: [
      {
        label: 'Action Portal',
        path: 'HOSTNAME/act',
        matches: () =>
          window.location.href.match('/act') &&
          window.location.href.endsWith('act'),
        children: []
      },
      {
        label: 'Attend an Event',
        path: 'HOSTNAME/events',
        matches: () => false,
        children: []
      },
      {
        label: 'Any special skills?',
        path: 'HOSTNAME/form/special-skills',
        matches: () => false,
        children: []
      }
    ]
  },

  {
    label: 'Platform',
    path: 'HOSTNAME/platform',
    children: [],
    matches: () => window.location.href.match('/plan')
  }
]

const jd = [
  {
    label: 'Join',
    path: 'HOSTNAME',
    subdomained: false,
    children: [],
    matches: () => false
  },

  {
    label: 'Candidates',
    path: 'HOSTNAME/candidates',
    matches: () => window.location.href.match('/candidates'),
    children: []
  },

  {
    label: 'Action',
    path: 'HOSTNAME/act',
    matches: () =>
      window.location.href.match('/act') ||
      window.location.href.match('/form/submit-event') ||
      window.location.href.match('/form/teams'),
    children: [
      {
        label: 'Action Portal',
        path: 'HOSTNAME/act',
        matches: () =>
          window.location.href.match('/act') &&
          window.location.href.endsWith('act'),
        children: []
      },
      {
        label: 'Attend an Event',
        path: 'HOSTNAME/events',
        matches: () => false,
        children: []
      },
      {
        label: 'Host an Event',
        path: 'HOSTNAME/form/submit-event',
        matches: () => window.location.href.match('/form/submit-event'),
        children: []
      },
      {
        label: 'Join a National Team',
        path: 'HOSTNAME/form/teams',
        matches: () => false,
        children: []
      },
      {
        label: 'Any special skills?',
        path: 'HOSTNAME/form/special-skills',
        matches: () => false,
        children: []
      }
    ]
  },

  {
    label: 'Platform',
    path: 'HOSTNAME/platform',
    children: [],
    matches: () => window.location.href.match('/plan')
  }
]

const siteMap = window.location.origin.includes('justicedialer') ? jd : bnc

export default siteMap
