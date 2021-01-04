export default {
  path: '/playground',
  component: () => import('/@src/pages/Playground/index.vue'),
  children: [
    { path: 'icons', component: () => import('/@src/pages/Playground/Icons.vue') },
    { path: 'buttons', component: () => import('/@src/pages/Playground/Buttons/index.vue') },
    { path: 'colors', component: () => import('/@src/pages/Playground/Colors/index.vue') },
    { path: 'dialogs', component: () => import('/@src/pages/Playground/Dialogs/index.vue') },
    { path: 'inputs', component: () => import('/@src/pages/Playground/Inputs/index.vue') },
    { path: 'images', component: () => import('/@src/pages/Playground/Images.vue') },
    { path: 'text', component: () => import('/@src/pages/Playground/Text/index.vue') },
    { path: 'tests', component: () => import('/@src/pages/Playground/Tests.vue') }
  ]
}
