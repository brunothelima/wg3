import { d as s, p as t, a, o as e, c as o, j as n, w as d, m as c, i as r, e as l } from './index.510f259e.js'
var i = s({})
const u = d('data-v-05618a48')
t('data-v-05618a48')
const v = { 'data-test': 'ghosty', class: 'button:ghosty' }
a()
const b = u(function (s, t) {
  return e(), o('button', v, [n(s.$slots, 'default')])
})
;(i.render = b), (i.__scopeId = 'data-v-05618a48')
var f = s({})
const p = d('data-v-620783f2')
t('data-v-620783f2')
const y = { 'data-test': 'glassy', class: 'button:glassy' }
a()
const _ = p(function (s, t) {
  return e(), o('button', y, [n(s.$slots, 'default')])
})
;(f.render = _), (f.__scopeId = 'data-v-620783f2')
var m = s({ props: ['icon', 'size', 'skin', 'reverse', 'disabled'], components: { Ghosty: i, Glassy: f } })
const g = d('data-v-7eed935c')
t('data-v-7eed935c')
const h = { 'data-test': 'slot' }
a()
const k = g(function (s, t) {
  return (
    e(),
    o(
      c(s.skin || 'glassy'),
      {
        'data-test': 'button',
        disabled: s.disabled,
        class: ['button', 'button--' + (s.size || 'medium'), { 'button--reverse': s.reverse }]
      },
      {
        default: g(() => [
          s.icon ? (e(), o('i', { key: 0, 'data-test': 'icon', class: s.icon }, null, 2)) : r('', !0),
          l('span', h, [n(s.$slots, 'default')])
        ]),
        _: 1
      },
      8,
      ['disabled', 'class']
    )
  )
})
;(m.render = k), (m.__scopeId = 'data-v-7eed935c')
export { m as s }
