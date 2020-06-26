export default {
  path: '/playground',
  component: () => import('/@pages/Playground/index.vue'),
  children: [
    { path: 'icons', component: () => import('/@pages/Playground/Icons.vue') },
    { path: 'buttons', component: () => import('/@pages/Playground/Buttons/index.vue') },
    { path: 'colors', component: () => import('/@pages/Playground/Colors/index.vue') },
    { path: 'dialogs', component: () => import('/@pages/Playground/Dialogs/index.vue') },
    { path: 'inputs', component: () => import('/@pages/Playground/Inputs/index.vue') },
    { path: 'text', component: () => import('/@pages/Playground/Text/index.vue') }
  ]
}
