export const homeRoute = {
  path: '/',
  name: 'home',
  component: () => import('@/views/home')
}

export const aboutRoute = {
  path: '/about',
  name: 'about',
  component: () => import('@/views/about')
}

export const createRoute = {
  path: '/create',
  name: 'create',
  component: () => import('@/views/create')
}

export const joinRoute = {
  path: '/join',
  name: 'join',
  component: () => import('@/views/join')
}

const roomPath = '/room/:slug'

export const roomLobbyRoute = {
  path: `${roomPath}/lobby`,
  name: 'lobby',
  component: () => import('@/components/room-lobby')
}

export const roomMoviesRoute = {
  path: `${roomPath}/movies`,
  name: 'movies',
  component: () => import('@/components/room-movies')
}

export const roomResultsRoute = {
  path: `${roomPath}/results`,
  name: 'results',
  component: () => import('@/components/room-results')
}

export const roomRoutes = {
  path: roomPath,
  redirect: roomLobbyRoute.path,
  name: 'room',
  component: () => import('@/views/room.vue'),
  children: [
    roomLobbyRoute,
    roomMoviesRoute,
    roomResultsRoute
  ]
}
