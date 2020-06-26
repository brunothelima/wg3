import { d as a, p as t, a as d, b as r, o as e, c as o, e as n, w as l, f as i } from './index.510f259e.js'
import './useI18n.8cec2910.js'
import './Select.93e6957d.js'
import { s } from './Settings.b0e3bab7.js'
var u = a({ components: { Settings: s } })
const c = l('data-v-897cdd26')
t('data-v-897cdd26')
const v = { class: 'playground' },
  p = i('Colors'),
  m = i('Buttons'),
  b = i('Icons'),
  f = i('Text'),
  g = i('Dialogs'),
  x = i('Inputs'),
  h = i('Tests'),
  _ = n('footer', null, null, -1)
d()
const y = c(function (a, t) {
  const d = r('Settings'),
    l = r('router-link'),
    i = r('router-view')
  return (
    e(),
    o('div', v, [
      n('nav', null, [
        n('header', null, [n(d)]),
        n('ul', null, [
          n('li', null, [n(l, { to: 'colors' }, { default: c(() => [p]), _: 1 })]),
          n('li', null, [n(l, { to: 'buttons' }, { default: c(() => [m]), _: 1 })]),
          n('li', null, [n(l, { to: 'icons' }, { default: c(() => [b]), _: 1 })]),
          n('li', null, [n(l, { to: 'text' }, { default: c(() => [f]), _: 1 })]),
          n('li', null, [n(l, { to: 'dialogs' }, { default: c(() => [g]), _: 1 })]),
          n('li', null, [n(l, { to: 'inputs' }, { default: c(() => [x]), _: 1 })]),
          n('li', null, [n(l, { to: '/tests' }, { default: c(() => [h]), _: 1 })])
        ]),
        _
      ]),
      n('main', null, [n(i)])
    ])
  )
})
let w = document.createElement('style')
;(w.innerHTML =
  '.playground[data-v-897cdd26]{display:flex;align-items:flex-start}.playground main[data-v-897cdd26]{flex:1;padding:2em}.playground main>section[data-v-897cdd26]{max-width:1024px;margin:auto}nav[data-v-897cdd26]{position:sticky;z-index:2;top:0;background:var(--color-x-11);border-bottom-right-radius:var(--input-border-radius);box-shadow:var(--box-shadow-light);border-right:var(--input-border-width) var(--input-border-style) var(--color-a-1);border-bottom:var(--input-border-width) var(--input-border-style) var(--color-a-1)}@media screen and (max-width:1024px){nav[data-v-897cdd26]{position:fixed}}nav header[data-v-897cdd26]{padding:1em;border-bottom:var(--input-border-width) var(--input-border-style) var(--color-a-6)}nav header[data-v-897cdd26] .input\\:select__selected{padding:.5em 48px .5em 1em}nav header[data-v-897cdd26] .input\\:select__wrapper{border-color:var(--color-a-1)}nav ul li[data-v-897cdd26]{padding:1em 2em;border-bottom:var(--input-border-width) var(--input-border-style) var(--color-a-6)}nav ul li a[data-v-897cdd26]{display:inline-block;transition:var(--transition-duration)}nav ul li a.router-link-exact-active[data-v-897cdd26]{color:var(--color-x-1);transform:translateX(.5em)}'),
  document.head.appendChild(w),
  (u.render = y),
  (u.__scopeId = 'data-v-897cdd26')
export default u
