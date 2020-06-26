import { p as t, a as e, o as l, c as s, e as a, f as i, _ as n, w as o, b as u } from './index.510f259e.js'
import { u as r } from './useI18n.8cec2910.js'
var c = { setup: () => r() }
const d = o('data-v-89840218')
t('data-v-89840218')
const h = { class: 'headings' },
  m = a('code', null, '--font-size-h1', -1),
  p = a('code', null, '--font-size-h2', -1),
  f = a('code', null, '--font-size-h3', -1),
  x = a('code', null, '--font-size-h4', -1),
  v = a('code', null, '--font-size-h5', -1),
  z = a('code', null, '--font-size-h6', -1)
e()
const b = d(function (t, e) {
  return (
    l(),
    s('div', h, [
      a('h1', null, [m, i(' ' + n(t.t('h1')), 1)]),
      a('h2', null, [p, i(' ' + n(t.t('h2')), 1)]),
      a('h3', null, [f, i(' ' + n(t.t('h3')), 1)]),
      a('h4', null, [x, i(' ' + n(t.t('h4')), 1)]),
      a('h5', null, [v, i(' ' + n(t.t('h5')), 1)]),
      a('h6', null, [z, i(' ' + n(t.t('h6')), 1)])
    ])
  )
})
let g = document.createElement('style')
;(g.innerHTML =
  '.headings code[data-v-89840218]{display:block;margin-bottom:.25rem}ul[data-v-eb04c68e]{list-style:none}ul li[data-v-eb04c68e]{margin-bottom:2rem}ul li>code[data-v-eb04c68e]{display:block;margin-bottom:.5rem}ul li.xxl[data-v-eb04c68e]{font-size:var(--font-size-xxl)}ul li.xl[data-v-eb04c68e]{font-size:var(--font-size-xl)}ul li.xs[data-v-eb04c68e]{font-size:var(--font-size-xs)}ul li.xxs[data-v-eb04c68e]{font-size:var(--font-size-xxs);font-weight:600;text-transform:uppercase}.text-demo>h1[data-v-3851ed7c]{color:var(--color-a-1)}'),
  document.head.appendChild(g)
var H = (t) => {
  t.i18n = {
    pt: {
      h1: 'H1 - Este é um título h1',
      h2: 'H2 - Este é um título h2',
      h3: 'H3 - Este é um título h3',
      h4: 'H4 - Este é um título h4',
      h5: 'H5 - Este é um título h5',
      h6: 'H6 - Este é um título h6'
    },
    en: {
      h1: 'H1 - This is a h1 title',
      h2: 'H2 - This is a h2 title',
      h3: 'H3 - This is a h3 title',
      h4: 'H4 - This is a h4 title',
      h5: 'H5 - This is a h5 title',
      h6: 'H6 - This is a h6 title'
    }
  }
}
H(c), (c.render = b), (c.__scopeId = 'data-v-89840218')
var T = { setup: () => r() }
const E = { class: 'paragraph' },
  _ = a(
    'p',
    null,
    [
      i(' Lorem ipsum dolor sit amet consectetur adipisicing elit. '),
      a('a', { href: '' }, 'Impedit nisi cupiditate sunt'),
      i(' fugiat reiciendis dicta consequatur '),
      a('b', null, 'assumenda temporibus enim officia'),
      i(', unde dolorem quibusdam '),
      a('i', null, 'reprehenderit odit voluptas magni'),
      i(' corrupti id nulla? lorem ipsum dolor sit amet consectetur adipisicing elit. ')
    ],
    -1
  )
var y = (t) => {
  t.i18n = { pt: { title: 'Isto é um paragrafo' }, en: { title: 'This is a paragraph' } }
}
y(T),
  (T.render = function (t, e) {
    return l(), s('div', E, [a('h6', null, n(t.t('title')) + ':', 1), _])
  })
var I = { setup: () => r() }
const L = o('data-v-eb04c68e')
t('data-v-eb04c68e')
const S = { class: 'labels' },
  j = a(
    'ul',
    null,
    [
      a('li', { class: 'xxl' }, [a('code', null, '--font-size-xxl'), i('Larger font size')]),
      a('li', { class: 'xl' }, [a('code', null, '--font-size-xl'), i('Slightly large text size')]),
      a('li', null, 'Default font size'),
      a('li', { class: 'xs' }, [a('code', null, '--font-size-xs'), i('Slightly small text size')]),
      a('li', { class: 'xxs' }, [a('code', null, '--font-size-xxx'), i('Smaller text size')])
    ],
    -1
  )
e()
const k = L(function (t, e) {
  return l(), s('div', S, [a('h6', null, n(t.t('title')), 1), j])
})
var q = (t) => {
  t.i18n = { pt: { title: 'Outros tamanhos de texto:' }, en: { title: 'Othe text sizes:' } }
}
q(I), (I.render = k), (I.__scopeId = 'data-v-eb04c68e')
var w = { components: { Headings: c, Paragraph: T, Labels: I }, setup: () => r() }
const O = o('data-v-3851ed7c')
t('data-v-3851ed7c')
const P = { class: 'text-demo' },
  C = a('hr', null, null, -1),
  D = a('hr', null, null, -1),
  M = a('hr', null, null, -1)
e()
const A = O(function (t, e) {
  const i = u('Headings'),
    o = u('Paragraph'),
    r = u('Labels')
  return l(), s('section', P, [a('h1', null, n(t.t('title')), 1), C, a(i), D, a(o), M, a(r)])
})
var B = (t) => {
  t.i18n = { pt: { title: 'Textos e fontes' }, en: { title: 'Texts and fonts' } }
}
B(w), (w.render = A), (w.__scopeId = 'data-v-3851ed7c')
export default w
