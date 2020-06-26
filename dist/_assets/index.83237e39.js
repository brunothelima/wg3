import { d as a, p as e, a as t, o, c as r, F as c, k as s, w as l, e as n, _ as d, b as i } from './index.510f259e.js'
import { u as v } from './useI18n.8cec2910.js'
var u = a({ props: ['cssVar', 'range'] })
const m = l('data-v-c2ae8ddc')
e('data-v-c2ae8ddc')
const p = { class: 'color-palette' }
t()
const y = m(function (a, e) {
  return (
    o(),
    r('ul', p, [
      (o(!0),
      r(
        c,
        null,
        s(
          Array(a.range),
          (e, t) => (
            o(),
            r(
              'li',
              { key: e, style: `background-color: var(${a.cssVar}-${t + 1})` },
              [n('code', null, d(`${a.cssVar}-${t + 1}`), 1)],
              4
            )
          )
        ),
        128
      ))
    ])
  )
})
let f = document.createElement('style')
;(f.innerHTML =
  '.color-palette[data-v-c2ae8ddc]{display:flex;flex-direction:column;list-style:none;margin-bottom:2.857rem}.color-palette li[data-v-c2ae8ddc]{display:flex;align-items:center;justify-content:center;height:40px;color:var(--color-x-11)}.grayish-colors[data-v-a4ed7cb6] li:nth-child(1n+5),.primary-colors[data-v-ac53e94a] li:nth-child(1n+4),.secondary-colors[data-v-0f075c98] li:nth-child(1n+4){color:var(--color-x-1)}.grayish-colors[data-v-a4ed7cb6] li:nth-child(1n+5):last-child{border:1px solid var(--color-x-1)}.system-colors ul[data-v-ee718af2]{display:flex}@media screen and (max-width:1024px){.system-colors ul[data-v-ee718af2]{flex-direction:column}}.system-colors ul li[data-v-ee718af2]{display:flex;align-items:center;justify-content:center;flex:1;height:40px;padding:.25em 1em;color:var(--color-x-11)}@media screen and (max-width:1024px){.system-colors ul li[data-v-ee718af2]{flex:none}}.system-colors ul li.color-info[data-v-ee718af2]{background-color:var(--color-info)}.system-colors ul li.color-error[data-v-ee718af2]{background-color:var(--color-error)}.system-colors ul li.color-warning[data-v-ee718af2]{background-color:var(--color-warning)}.system-colors ul li.color-success[data-v-ee718af2]{background-color:var(--color-success)}.gradient>div[data-v-2c6acdd2]{display:flex;align-items:center;justify-content:center;height:40px;padding:.25em 1em;background-image:linear-gradient(to right,var(--color-a-3),var(--color-b-3));color:var(--color-x-11)}.colors-demo>h1[data-v-625c6660]{color:var(--color-a-1)}.css-vars[data-v-625c6660]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1.143em;margin-bottom:1.143em}@media screen and (max-width:640px){.css-vars[data-v-625c6660]{grid-template-columns:1fr}}.system-colors[data-v-625c6660]{margin-bottom:4.571em}'),
  document.head.appendChild(f),
  (u.render = y),
  (u.__scopeId = 'data-v-c2ae8ddc')
var g = a({ components: { Palette: u }, setup: () => v() })
const h = l('data-v-ac53e94a')
e('data-v-ac53e94a')
const x = { class: 'primary-colors' }
t()
const b = h(function (a, e) {
  const t = i('Palette')
  return (
    o(), r('div', x, [n('h6', null, d(a.t('title')), 1), n(t, { class: 'primary', range: 7, cssVar: '--color-a' })])
  )
})
var _ = (a) => {
  a.i18n = { pt: { title: 'Cores Primárias' }, en: { title: 'Primary colors' } }
}
_(g), (g.render = b), (g.__scopeId = 'data-v-ac53e94a')
var P = a({ components: { Palette: u }, setup: () => v() })
const k = l('data-v-0f075c98')
e('data-v-0f075c98')
const I = { class: 'secondary-colors' }
t()
const S = k(function (a, e) {
  const t = i('Palette')
  return (
    o(), r('div', I, [n('h6', null, d(a.t('title')), 1), n(t, { class: 'secondary', range: 7, cssVar: '--color-b' })])
  )
})
var w = (a) => {
  a.i18n = { pt: { title: 'Cores Secundárias' }, en: { title: 'Secondary colors' } }
}
w(P), (P.render = S), (P.__scopeId = 'data-v-0f075c98')
var V = a({ components: { Palette: u }, setup: () => v() })
const j = l('data-v-a4ed7cb6')
e('data-v-a4ed7cb6')
const C = { class: 'grayish-colors' }
t()
const G = j(function (a, e) {
  const t = i('Palette')
  return (
    o(), r('div', C, [n('h6', null, d(a.t('title')), 1), n(t, { class: 'grayish', range: 11, cssVar: '--color-x' })])
  )
})
var $ = (a) => {
  a.i18n = { pt: { title: 'Tons de cinza' }, en: { title: 'Shades of gray' } }
}
$(V), (V.render = G), (V.__scopeId = 'data-v-a4ed7cb6')
var T = a({ setup: () => v() })
const z = l('data-v-ee718af2')
e('data-v-ee718af2')
const A = { class: 'system-colors' }
t()
const E = z(function (a, e) {
  return (
    o(),
    r('div', A, [
      n('h6', null, d(a.t('title')), 1),
      n('ul', null, [
        (o(!0),
        r(
          c,
          null,
          s(
            ['info', 'success', 'warning', 'error'],
            (a) => (
              o(), r('li', { key: 'color-' + a, class: 'color-' + a }, [n('code', null, d('--color-' + a), 1)], 2)
            )
          ),
          128
        ))
      ])
    ])
  )
})
var F = (a) => {
  a.i18n = { pt: { title: 'Cores do sistema' }, en: { title: 'System colors' } }
}
F(T), (T.render = E), (T.__scopeId = 'data-v-ee718af2')
var H = a({})
const L = l('data-v-2c6acdd2')
e('data-v-2c6acdd2')
const M = { class: 'gradient' },
  q = n('h6', null, 'Gradient', -1),
  B = n('div', null, [n('code', null, 'linear-gradient(to right, var(--color-a-3), var(--color-b-3));')], -1)
t()
const D = L(function (a, e) {
  return o(), r('div', M, [q, B])
})
;(H.render = D), (H.__scopeId = 'data-v-2c6acdd2')
var J = a({ components: { Primary: g, Secondary: P, Grayish: V, System: T, Gradient: H }, setup: () => v() })
const K = l('data-v-625c6660')
e('data-v-625c6660')
const N = { class: 'colors-demo' },
  O = n('hr', null, null, -1),
  Q = { class: 'css-vars' }
t()
const R = K(function (a, e) {
  const t = i('Primary'),
    c = i('Secondary'),
    s = i('Grayish'),
    l = i('System'),
    v = i('Gradient')
  return o(), r('section', N, [n('h1', null, d(a.t('title')), 1), O, n('div', Q, [n(t), n(c), n(s)]), n(l), n(v)])
})
var U = (a) => {
  a.i18n = { pt: { title: 'Palheta de cores' }, en: { title: 'Color palette' } }
}
U(J), (J.render = R), (J.__scopeId = 'data-v-625c6660')
export default J
