export default {
  path: '/playground',
  component: () => import('/@wg3/pages/Playground/index.vue'),
  children: [
    { path: 'icons', component: () => import('/@wg3/pages/Playground/Icons.vue') },
    { path: 'buttons', component: () => import('/@wg3/pages/Playground/Buttons/index.vue') },
    { path: 'colors', component: () => import('/@wg3/pages/Playground/Colors/index.vue') },
    { path: 'dialogs', component: () => import('/@wg3/pages/Playground/Dialogs/index.vue') },
    { path: 'inputs', component: () => import('/@wg3/pages/Playground/Inputs/index.vue') },
    { path: 'images', component: () => import('/@wg3/pages/Playground/Images.vue') },
    { path: 'text', component: () => import('/@wg3/pages/Playground/Text/index.vue') },
    { path: 'tests', component: () => import('/@wg3/pages/Playground/Tests.vue') }
  ]
}
