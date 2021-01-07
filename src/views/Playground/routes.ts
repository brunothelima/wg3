export default {
  path: '/playground',
  component: () => import('@src/views/Playground/index.vue'),
  children: [
    { path: 'icons', component: () => import('@src/views/Playground/Icons.vue') },
    { path: 'buttons', component: () => import('@src/views/Playground/Buttons/index.vue') },
    { path: 'colors', component: () => import('@src/views/Playground/Colors/index.vue') },
    { path: 'dialogs', component: () => import('@src/views/Playground/Dialogs/index.vue') },
    { path: 'form', component: () => import('@src/views/Playground/Form/index.vue') },
    { path: 'images', component: () => import('@src/views/Playground/Images.vue') },
    { path: 'text', component: () => import('@src/views/Playground/Text/index.vue') },
    { path: 'tests', component: () => import('@src/views/Playground/Tests.vue') }
  ]
}
