import {
  r as t,
  o,
  c as e,
  a,
  b as n,
  _ as i,
  w as s,
  p as l,
  d as r,
  F as c,
  e as d,
  f as u,
  g as m,
  h as f,
  T as v,
  i as p,
  u as h
} from './index.bc897349.js'
import { s as g, u as b, c as x, a as y, b as k } from './index.c7ca7f7a.js'
var w = {
  components: { Button: g },
  props: ['size', 'title', 'skin'],
  setup: () => b()
}
const _ = s('data-v-4740bca2'),
  z = _(function (s, l) {
    const r = t('Button')
    return (
      o(),
      e(
        'div',
        { class: s.size + '-buttons-list' },
        [
          a(r, { size: s.size, skin: s.skin }, { default: _(() => [n(i(s.t('button')), 1)]), _: 1 }, 8, [
            'size',
            'skin'
          ]),
          a(
            r,
            { size: s.size, skin: s.skin, icon: 'icon-form' },
            { default: _(() => [n(i(s.t('icon-left')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          a(
            r,
            { size: s.size, skin: s.skin, reverse: !0, icon: 'icon-form' },
            { default: _(() => [n(i(s.t('icon-right')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          a(
            r,
            { size: s.size, skin: s.skin, class: 'button--hover' },
            { default: _(() => [n(i(s.t('hover')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          a(
            r,
            { size: s.size, skin: s.skin, class: 'button--active' },
            { default: _(() => [n(i(s.t('active')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          a(
            r,
            { size: s.size, skin: s.skin, disabled: !0 },
            { default: _(() => [n(i(s.t('disabled')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          )
        ],
        2
      )
    )
  })
let B = document.createElement('style')
;(B.innerHTML =
  '[class*=-buttons-list][data-v-4740bca2]{display:flex;align-items:flex-end;flex-wrap:wrap}h1[data-v-6d4e8cd4]{color:var(--color-a-1)}.buttons-demo>div[data-v-6d4e8cd4]{margin-bottom:4em}.buttons-demo[data-v-6d4e8cd4] [class*="-buttons-list"]{margin-bottom:2em}.buttons-demo[data-v-6d4e8cd4] pre{display:block;padding:1em;line-height:1.5em;margin-bottom:2em;border-radius:.25em;border:1px solid var(--color-a-1);background-color:var(--color-x-9);color:var(--color-x-3)}.buttons-demo[data-v-6d4e8cd4] .button{margin:.5em 1em .5em 0}h1[data-v-6a9410d4]{color:var(--color-a-1)}ul[data-v-6a9410d4]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1em}ul li[data-v-6a9410d4]{display:flex;align-items:center}ul li i[data-v-6a9410d4]{display:flex;align-items:center;justify-content:center;width:2em;height:2em;border-radius:.25em;background-color:var(--color-x-9)}ul li span[data-v-6a9410d4]{padding-left:1em;font-size:var(--font-size-xs)}.color-palette[data-v-35c3b8ed]{display:flex;flex-direction:column;list-style:none;margin-bottom:2.857rem}.color-palette li[data-v-35c3b8ed]{display:flex;align-items:center;justify-content:center;height:40px;color:var(--color-x-11)}.grayish-colors[data-v-299e1925] li:nth-child(1n+5),.primary-colors[data-v-080ca5c7] li:nth-child(1n+4),.secondary-colors[data-v-41f93778] li:nth-child(1n+4){color:var(--color-x-1)}.grayish-colors[data-v-299e1925] li:nth-child(1n+5):last-child{border:1px solid var(--color-x-1)}.system-colors ul[data-v-21c8decc]{display:flex}@media screen and (max-width:1024px){ul[data-v-6a9410d4]{grid-template-columns:repeat(1,1fr)}.system-colors ul[data-v-21c8decc]{flex-direction:column}}.system-colors ul li[data-v-21c8decc]{display:flex;align-items:center;justify-content:center;flex:1;height:40px;padding:.25em 1em;color:var(--color-x-11)}@media screen and (max-width:1024px){.system-colors ul li[data-v-21c8decc]{flex:none}.modal\\:confirmation[data-v-867fdd96]{height:100%}}.system-colors ul li.color-info[data-v-21c8decc]{background-color:var(--color-info)}.system-colors ul li.color-error[data-v-21c8decc]{background-color:var(--color-error)}.system-colors ul li.color-warning[data-v-21c8decc]{background-color:var(--color-warning)}.system-colors ul li.color-success[data-v-21c8decc]{background-color:var(--color-success)}.gradient>div[data-v-3357fc7d]{display:flex;align-items:center;justify-content:center;height:40px;padding:.25em 1em;background-image:linear-gradient(to right,var(--color-a-3),var(--color-b-3));color:var(--color-x-11)}.colors-demo>h1[data-v-2ed270b0]{color:var(--color-a-1)}.css-vars[data-v-2ed270b0]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1.143em;margin-bottom:1.143em}@media screen and (max-width:640px){.css-vars[data-v-2ed270b0]{grid-template-columns:1fr}}.system-colors[data-v-2ed270b0]{margin-bottom:4.571em}.headings code[data-v-5b8e3163]{display:block;margin-bottom:.25rem}ul[data-v-0b815e94]{list-style:none}ul li[data-v-0b815e94]{margin-bottom:2rem}ul li>code[data-v-0b815e94]{display:block;margin-bottom:.5rem}ul li.xxl[data-v-0b815e94]{font-size:var(--font-size-xxl)}ul li.xl[data-v-0b815e94]{font-size:var(--font-size-xl)}ul li.xs[data-v-0b815e94]{font-size:var(--font-size-xs)}ul li.xxs[data-v-0b815e94]{font-size:var(--font-size-xxs);font-weight:600;text-transform:uppercase}.text-demo>h1[data-v-79acad20]{color:var(--color-a-1)}.modal[data-v-3f7db0f6]{display:grid;overflow:auto;position:fixed;z-index:9;width:100%;height:100%;padding:0 2em;box-sizing:border-box}.modal__mask[data-v-3f7db0f6]{z-index:1;grid-row:1/2;grid-column:1/2;background:var(--color-x-11);opacity:.6}.modal__content[data-v-3f7db0f6]{position:relative;grid-row:1/2;grid-column:1/2;align-self:center;z-index:2;margin:2em auto}.modal__content>[class*="modal:"][data-v-3f7db0f6]{opacity:0;animation-name:fade-in-data-v-3f7db0f6;animation-duration:var(--transition-duration);animation-delay:var(--transition-duration);animation-timing-function:var(--transition-timing-function);animation-fill-mode:forwards}@keyframes fade-in-data-v-3f7db0f6{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.modal\\:confirmation[data-v-867fdd96]{display:flex;flex-flow:column;overflow:hidden;width:100%;max-width:512px;background-color:var(--color-x-11);border-radius:var(--card-border-radius);border:var(--card-border-width) var(--card-border-style) var(--color-x-8)}main[data-v-867fdd96]{display:flex;flex-flow:column;justify-content:center;align-items:center;padding:1em 3em;min-height:230px;text-align:center}@media screen and (max-width:1024px){main[data-v-867fdd96]{flex:1}}main p[data-v-867fdd96]{margin-bottom:.5em;font-size:var(--font-size-xxl);font-weight:700}main span[data-v-867fdd96]{color:var(--color-x-6);font-size:var(--font-size);line-height:180%}main i[data-v-867fdd96]{margin-bottom:1rem;font-size:40px}header[data-v-867fdd96]{display:flex;padding:1.5em;align-items:center;background-color:var(--color-x-10);color:var(--color-x-6)}header span[data-v-867fdd96]{display:flex;align-items:center;cursor:pointer}header i[data-v-867fdd96]{margin-right:.5em}footer[data-v-867fdd96]{display:flex;border-top:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[data-v-867fdd96]{padding:1.313em;background-color:transparent;border:none;color:var(--color-x-6);font-size:var(--font-size-xl);outline:0;cursor:pointer}footer button[data-v-867fdd96]:hover{background-color:var(--color-x-10)}footer button.left[data-v-867fdd96]{border-right:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[style*="color:"][data-v-867fdd96]{font-weight:700}h1[data-v-ef019658]{color:var(--color-a-1)}.button[data-v-ef019658]{margin-bottom:2em}.notification-demo[data-v-f5402b48]{display:flex;margin-bottom:2em}.button[data-v-f5402b48]{margin-right:1em}h1[data-v-1b2ab5e2]{color:var(--color-a-1)}.actions[data-v-1b2ab5e2]{display:flex;margin-bottom:2em}.actions .button[data-v-1b2ab5e2]{margin-right:1em}h1[data-v-40b33cfb]{color:var(--color-a-1)}.inputs .form[data-v-40b33cfb] .form__grid{display:grid;grid-template-columns:1fr 1fr;grid-gap:1em}@media screen and (max-width:1024px){.inputs .form[data-v-40b33cfb] .form__grid{display:block}}.playground[data-v-25fd6029]{padding:10vh 2em;max-width:1024px;margin:auto}.playground>section[data-v-25fd6029]{margin-bottom:20vh}'),
  document.head.appendChild(B)
var C = (t) => {
  t.i18n = {
    pt: {
      button: 'Botão',
      'icon-left': 'Icone a esquerda',
      'icon-right': 'Icone a direita',
      hover: 'Foco',
      active: 'Ativo',
      disabled: 'Desativado'
    },
    en: {
      button: 'Button',
      'icon-left': 'Icon Left',
      'icon-right': 'Icon Right',
      hover: 'Hover',
      active: 'Active',
      disabled: 'Disabled'
    }
  }
}
C(w), (w.render = z), (w.__scopeId = 'data-v-4740bca2')
var I = { components: { ButtonsList: w } }
const L = { class: 'glassy-buttons' },
  S = a('h6', null, 'Glassy', -1)
I.render = function (n, i) {
  const s = t('ButtonsList')
  return (
    o(),
    e('div', L, [
      S,
      a(s, { skin: 'glassy', size: 'small' }),
      a(s, { skin: 'glassy', size: 'medium' }),
      a(s, { skin: 'glassy', size: 'large' })
    ])
  )
}
var T = { components: { ButtonsList: w } }
const R = { class: 'clean-buttons' },
  M = a('h6', null, 'Clean', -1)
T.render = function (n, i) {
  const s = t('ButtonsList')
  return (
    o(),
    e('div', R, [
      M,
      a(s, { skin: 'clean', size: 'small' }),
      a(s, { skin: 'clean', size: 'medium' }),
      a(s, { skin: 'clean', size: 'large' })
    ])
  )
}
var E = { components: { GlassyButtons: I, CleanButtons: T }, setup: () => b() }
const H = s('data-v-6d4e8cd4')
l('data-v-6d4e8cd4')
const P = { class: 'buttons-demo' },
  $ = a('hr', null, null, -1),
  D = a('div', { class: 'text' }, null, -1)
r()
const q = H(function (n, s) {
  const l = t('GlassyButtons'),
    r = t('CleanButtons')
  return o(), e('section', P, [a('h1', null, i(n.t('title')), 1), $, D, a(l), a(r)])
})
var G = (t) => {
  t.i18n = {
    pt: {
      title: 'Botões',
      default: 'Botão Normal',
      disabled: 'Desabilitado',
      small: 'Botão Pequeno',
      large: 'Botão Grande'
    },
    en: {
      title: 'Buttons',
      default: 'Normal Button',
      disabled: 'Disabled',
      small: 'Small Button',
      large: 'Large Button'
    }
  }
}
G(E), (E.render = q), (E.__scopeId = 'data-v-6d4e8cd4')
var F = {
  data: () => ({
    icons: [
      'icon-accordion',
      'icon-anchor',
      'icon-asterisk',
      'icon-custom-form',
      'icon-template',
      'icon-earth-solid',
      'icon-earth',
      'icon-filter',
      'icon-grid-view-small',
      'icon-grid-view',
      'icon-grid-view-solid',
      'icon-icon',
      'icon-layout',
      'icon-small-list',
      'icon-trash-bin-small',
      'icon-thick-2px',
      'icon-avatar',
      'icon-button',
      'icon-calendar',
      'icon-caret-down',
      'icon-caret-left',
      'icon-caret-right',
      'icon-caret-up',
      'icon-arrow-down',
      'icon-arrow-left',
      'icon-arrow-right',
      'icon-arrow-up',
      'icon-checkmark',
      'icon-close-small',
      'icon-close',
      'icon-form',
      'icon-draggable-1',
      'icon-draggable-2',
      'icon-engine',
      'icon-exclamation-mark',
      'icon-eye-closed',
      'icon-eye',
      'icon-floppy-disk',
      'icon-focal-point',
      'icon-folder',
      'icon-folder-solid',
      'icon-form2',
      'icon-hamburger',
      'icon-heading',
      'icon-horizontal-dots',
      'icon-iframe',
      'icon-image',
      'icon-info',
      'icon-list-view-solid',
      'icon-list-view',
      'icon-magnifying-glass',
      'icon-moon',
      'icon-pencil',
      'icon-plus',
      'icon-plus-small',
      'icon-question-mark',
      'icon-quote',
      'icon-sign-out',
      'icon-sun',
      'icon-text',
      'icon-trash-bin',
      'icon-upload',
      'icon-vertical-dots',
      'icon-video',
      'icon-big-list',
      'icon-big-list-solid'
    ]
  }),
  setup: () => b()
}
const N = s('data-v-6a9410d4')
l('data-v-6a9410d4')
const j = { class: 'icons-demo' },
  V = a('hr', null, null, -1)
r()
const A = N(function (t, n) {
  return (
    o(),
    e('section', j, [
      a('h1', null, i(t.t('title')), 1),
      V,
      a('ul', null, [
        (o(!0),
        e(
          c,
          null,
          d(
            t.icons,
            (t) => (
              o(), e('li', { key: t }, [a('i', { color: 'a', class: t }, null, 2), a('span', null, '.' + i(t), 1)])
            )
          ),
          128
        ))
      ])
    ])
  )
})
var O = (t) => {
  t.i18n = { pt: { title: 'Família de icones' }, en: { title: 'Icon family' } }
}
O(F), (F.render = A), (F.__scopeId = 'data-v-6a9410d4')
var W = { props: ['cssVar', 'range'] }
const J = s('data-v-35c3b8ed')
l('data-v-35c3b8ed')
const K = { class: 'color-palette' }
r()
const Q = J(function (t, n) {
  return (
    o(),
    e('ul', K, [
      (o(!0),
      e(
        c,
        null,
        d(
          Array(t.range),
          (n, s) => (
            o(),
            e(
              'li',
              { key: n, style: `background-color: var(${t.cssVar}-${s + 1})` },
              [a('code', null, i(`${t.cssVar}-${s + 1}`), 1)],
              4
            )
          )
        ),
        128
      ))
    ])
  )
})
;(W.render = Q), (W.__scopeId = 'data-v-35c3b8ed')
var U = { components: { Palette: W }, setup: () => b() }
const X = s('data-v-080ca5c7')
l('data-v-080ca5c7')
const Y = { class: 'primary-colors' }
r()
const Z = X(function (n, s) {
  const l = t('Palette')
  return (
    o(), e('div', Y, [a('h6', null, i(n.t('title')), 1), a(l, { class: 'primary', range: 7, cssVar: '--color-a' })])
  )
})
var tt = (t) => {
  t.i18n = {
    pt: { title: 'Cores Primárias' },
    en: { title: 'Primary colors' }
  }
}
tt(U), (U.render = Z), (U.__scopeId = 'data-v-080ca5c7')
var ot = { components: { Palette: W }, setup: () => b() }
const et = s('data-v-41f93778')
l('data-v-41f93778')
const at = { class: 'secondary-colors' }
r()
const nt = et(function (n, s) {
  const l = t('Palette')
  return (
    o(), e('div', at, [a('h6', null, i(n.t('title')), 1), a(l, { class: 'secondary', range: 7, cssVar: '--color-b' })])
  )
})
var it = (t) => {
  t.i18n = {
    pt: { title: 'Cores Secundárias' },
    en: { title: 'Secondary colors' }
  }
}
it(ot), (ot.render = nt), (ot.__scopeId = 'data-v-41f93778')
var st = { components: { Palette: W }, setup: () => b() }
const lt = s('data-v-299e1925')
l('data-v-299e1925')
const rt = { class: 'grayish-colors' }
r()
const ct = lt(function (n, s) {
  const l = t('Palette')
  return (
    o(), e('div', rt, [a('h6', null, i(n.t('title')), 1), a(l, { class: 'grayish', range: 11, cssVar: '--color-x' })])
  )
})
var dt = (t) => {
  t.i18n = { pt: { title: 'Tons de cinza' }, en: { title: 'Shades of gray' } }
}
dt(st), (st.render = ct), (st.__scopeId = 'data-v-299e1925')
var ut = { setup: () => b() }
const mt = s('data-v-21c8decc')
l('data-v-21c8decc')
const ft = { class: 'system-colors' }
r()
const vt = mt(function (t, n) {
  return (
    o(),
    e('div', ft, [
      a('h6', null, i(t.t('title')), 1),
      a('ul', null, [
        (o(!0),
        e(
          c,
          null,
          d(
            ['info', 'success', 'warning', 'error'],
            (t) => (
              o(), e('li', { key: 'color-' + t, class: 'color-' + t }, [a('code', null, i('--color-' + t), 1)], 2)
            )
          ),
          128
        ))
      ])
    ])
  )
})
var pt = (t) => {
  t.i18n = {
    pt: { title: 'Cores do sistema' },
    en: { title: 'System colors' }
  }
}
pt(ut), (ut.render = vt), (ut.__scopeId = 'data-v-21c8decc')
var ht = {}
const gt = s('data-v-3357fc7d')
l('data-v-3357fc7d')
const bt = { class: 'gradient' },
  xt = a('h6', null, 'Gradient', -1),
  yt = a('div', null, [a('code', null, 'linear-gradient(to right, var(--color-a-3), var(--color-b-3));')], -1)
r()
const kt = gt(function (t, a) {
  return o(), e('div', bt, [xt, yt])
})
;(ht.render = kt), (ht.__scopeId = 'data-v-3357fc7d')
var wt = {
  components: {
    Primary: U,
    Secondary: ot,
    Grayish: st,
    System: ut,
    Gradient: ht
  },
  setup: () => b()
}
const _t = s('data-v-2ed270b0')
l('data-v-2ed270b0')
const zt = { class: 'colors-demo' },
  Bt = a('hr', null, null, -1),
  Ct = { class: 'css-vars' }
r()
const It = _t(function (n, s) {
  const l = t('Primary'),
    r = t('Secondary'),
    c = t('Grayish'),
    d = t('System'),
    u = t('Gradient')
  return o(), e('section', zt, [a('h1', null, i(n.t('title')), 1), Bt, a('div', Ct, [a(l), a(r), a(c)]), a(d), a(u)])
})
var Lt = (t) => {
  t.i18n = {
    pt: { title: 'Palheta de cores' },
    en: { title: 'Color palette' }
  }
}
Lt(wt), (wt.render = It), (wt.__scopeId = 'data-v-2ed270b0')
var St = { setup: () => b() }
const Tt = s('data-v-5b8e3163')
l('data-v-5b8e3163')
const Rt = { class: 'headings' },
  Mt = a('code', null, '$font-size-h1', -1),
  Et = a('code', null, '$font-size-h2', -1),
  Ht = a('code', null, '$font-size-h3', -1),
  Pt = a('code', null, '$font-size-h4', -1),
  $t = a('code', null, '$font-size-h5', -1),
  Dt = a('code', null, '$font-size-h6', -1)
r()
const qt = Tt(function (t, s) {
  return (
    o(),
    e('div', Rt, [
      a('h1', null, [Mt, n(' ' + i(t.t('h1')), 1)]),
      a('h2', null, [Et, n(' ' + i(t.t('h2')), 1)]),
      a('h3', null, [Ht, n(' ' + i(t.t('h3')), 1)]),
      a('h4', null, [Pt, n(' ' + i(t.t('h4')), 1)]),
      a('h5', null, [$t, n(' ' + i(t.t('h5')), 1)]),
      a('h6', null, [Dt, n(' ' + i(t.t('h6')), 1)])
    ])
  )
})
var Gt = (t) => {
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
Gt(St), (St.render = qt), (St.__scopeId = 'data-v-5b8e3163')
var Ft = { setup: () => b() }
const Nt = { class: 'paragraph' },
  jt = a(
    'p',
    null,
    [
      n(' Lorem ipsum dolor sit amet consectetur adipisicing elit. '),
      a('a', { href: '' }, 'Impedit nisi cupiditate sunt'),
      n(' fugiat reiciendis dicta consequatur '),
      a('b', null, 'assumenda temporibus enim officia'),
      n(', unde dolorem quibusdam '),
      a('i', null, 'reprehenderit odit voluptas magni'),
      n(' corrupti id nulla? lorem ipsum dolor sit amet consectetur adipisicing elit. ')
    ],
    -1
  )
var Vt = (t) => {
  t.i18n = {
    pt: { title: 'Isto é um paragrafo' },
    en: { title: 'This is a paragraph' }
  }
}
Vt(Ft),
  (Ft.render = function (t, n) {
    return o(), e('div', Nt, [a('h6', null, i(t.t('title')) + ':', 1), jt])
  })
var At = { setup: () => b() }
const Ot = s('data-v-0b815e94')
l('data-v-0b815e94')
const Wt = { class: 'labels' },
  Jt = a(
    'ul',
    null,
    [
      a('li', { class: 'xxl' }, [a('code', null, '--font-size-xxl'), n('Larger font size')]),
      a('li', { class: 'xl' }, [a('code', null, '--font-size-xl'), n('Slightly large text size')]),
      a('li', null, 'Default font size'),
      a('li', { class: 'xs' }, [a('code', null, '--font-size-xs'), n('Slightly small text size')]),
      a('li', { class: 'xxs' }, [a('code', null, '--font-size-xxx'), n('Smaller text size')])
    ],
    -1
  )
r()
const Kt = Ot(function (t, n) {
  return o(), e('div', Wt, [a('h6', null, i(t.t('title')), 1), Jt])
})
var Qt = (t) => {
  t.i18n = {
    pt: { title: 'Outros tamanhos de texto:' },
    en: { title: 'Othe text sizes:' }
  }
}
Qt(At), (At.render = Kt), (At.__scopeId = 'data-v-0b815e94')
var Ut = {
  components: { Headings: St, Paragraph: Ft, Labels: At },
  setup: () => b()
}
const Xt = s('data-v-79acad20')
l('data-v-79acad20')
const Yt = { class: 'text-demo' },
  Zt = a('hr', null, null, -1),
  to = a('hr', null, null, -1),
  oo = a('hr', null, null, -1)
r()
const eo = Xt(function (n, s) {
  const l = t('Headings'),
    r = t('Paragraph'),
    c = t('Labels')
  return o(), e('section', Yt, [a('h1', null, i(n.t('title')), 1), Zt, a(l), to, a(r), oo, a(c)])
})
var ao = (t) => {
  t.i18n = {
    pt: { title: 'Textos e fontes' },
    en: { title: 'Texts and fonts' }
  }
}
ao(Ut), (Ut.render = eo), (Ut.__scopeId = 'data-v-79acad20')
var no = {
  setup() {
    u(() => {
      document.body.classList.add('scroll-lock')
    }),
      m(() => {
        document.body.classList.remove('scroll-lock')
      })
  }
}
const io = s('data-v-3f7db0f6')
l('data-v-3f7db0f6')
const so = { class: 'modal' },
  lo = a('div', { class: 'modal__mask' }, null, -1),
  ro = { class: 'modal__content' }
r()
const co = io(function (t, n) {
  return o(), e(v, { to: '#portal\\:modal' }, [a('div', so, [lo, a('div', ro, [f(t.$slots, 'default')])])])
})
;(no.render = co), (no.__scopeId = 'data-v-3f7db0f6')
var uo = {
  props: ['status', 'header', 'icon', 'title', 'text', 'buttonLeft', 'buttonRight'],
  setup(t, o) {
    const e = (t) => {
      'Escape' === t.key && o.emit('cancel', t)
    }
    return (
      u(() => {
        window.addEventListener('keyup', e)
      }),
      m(() => {
        window.removeEventListener('keyup', e)
      }),
      {
        onButtonLeftClick: (t) => {
          o.emit('buttonLeftClick', t)
        },
        onButtonRightClick: (t) => {
          o.emit('buttonRightClick', t)
        }
      }
    )
  }
}
const mo = s('data-v-867fdd96')
l('data-v-867fdd96')
const fo = { class: 'modal:confirmation' },
  vo = { key: 0 },
  po = a('i', { class: 'icon-arrow-left' }, null, -1),
  ho = { key: 0 },
  go = { key: 0 }
r()
const bo = mo(function (t, n) {
  return (
    o(),
    e('div', fo, [
      t.header
        ? (o(),
          e('header', vo, [
            a('span', { onClick: n[1] || (n[1] = (o) => t.$emit('cancel')) }, [po, a('span', null, i(t.header), 1)])
          ]))
        : p('', !0),
      a('main', null, [
        t.icon ? (o(), e('i', { key: 0, class: ['big', t.icon], color: 'a' }, null, 2)) : p('', !0),
        t.title ? (o(), e('p', ho, i(t.title), 1)) : p('', !0),
        t.text ? (o(), e('span', go, i(t.text), 1)) : p('', !0)
      ]),
      a('footer', null, [
        t.buttonLeft
          ? (o(),
            e(
              'button',
              {
                key: 0,
                class: 'left',
                onClick: n[2] || (n[2] = (o) => t.onButtonLeftClick(o)),
                style: `\n            color: var(--color-${t.buttonLeft.color || 'x-6'});\n            flex: ${
                  t.buttonLeft.flex || 1
                };}\n        `
              },
              i(t.buttonLeft.label || t.buttonLeft),
              5
            ))
          : p('', !0),
        t.buttonRight
          ? (o(),
            e(
              'button',
              {
                key: 0,
                class: 'right',
                onClick: n[3] || (n[3] = (o) => t.onButtonRightClick(o)),
                style: `\n          color: var(--color-${t.buttonRight.color || 'x-6'});\n          flex: ${
                  t.buttonRight.flex || 1
                };}\n        `
              },
              i(t.buttonRight.label || t.buttonRight),
              5
            ))
          : p('', !0)
      ])
    ])
  )
})
;(uo.render = bo), (uo.__scopeId = 'data-v-867fdd96')
var xo = {
  data: () => ({ showModal: !1 }),
  components: { Modal: no, Button: g, Confirmation: uo },
  setup() {
    const { t: t } = b()
    return { t: t }
  }
}
const yo = s('data-v-ef019658')
l('data-v-ef019658')
const ko = { class: 'confirmation-demo' }
r()
const wo = yo(function (s, l) {
  const r = t('Button'),
    c = t('Confirmation'),
    d = t('Modal')
  return (
    o(),
    e('div', ko, [
      a('h6', null, i(s.t('heading')), 1),
      a(
        r,
        {
          model: 'glassy',
          icon: 'icon-thick-2px',
          reverse: !0,
          onClick: l[1] || (l[1] = (t) => (s.showModal = !0))
        },
        { default: yo(() => [n(i(s.t('modalButton')), 1)]), _: 1 }
      ),
      a(
        c,
        {
          icon: 'icon-trash-bin-small',
          header: s.t('modal.header'),
          title: s.t('modal.title'),
          text: s.t('modal.text'),
          buttonLeft: { label: s.t('modal.buttonLeft') },
          buttonRight: { label: s.t('modal.buttonRight') }
        },
        null,
        8,
        ['header', 'title', 'text', 'buttonLeft', 'buttonRight']
      ),
      s.showModal
        ? a(
            d,
            { key: 0 },
            {
              default: yo(() => [
                a(
                  c,
                  {
                    onCancel: l[2] || (l[2] = (t) => (s.showModal = !1)),
                    onButtonLeftClick: l[3] || (l[3] = (t) => (s.showModal = !1)),
                    onButtonRightClick: l[4] || (l[4] = (t) => (s.showModal = !1)),
                    icon: 'icon-trash-bin-small',
                    header: s.t('modal.header'),
                    title: s.t('modal.title'),
                    text: s.t('modal.text'),
                    buttonLeft: { label: s.t('modal.buttonLeft') },
                    buttonRight: { label: s.t('modal.buttonRight') }
                  },
                  null,
                  8,
                  ['header', 'title', 'text', 'buttonLeft', 'buttonRight']
                )
              ]),
              _: 1
            }
          )
        : p('', !0)
    ])
  )
})
var _o = (t) => {
  t.i18n = {
    en: {
      heading: 'Confirmation',
      modalButton: 'Ask for confirmation',
      modal: {
        header: 'Confirmation',
        title: 'Are you sure you want to delete this post?',
        text: 'Deleting this post will remove it from all the pages and widgets. This action can not be undone.',
        buttonLeft: 'Cancel',
        buttonRight: 'Delete'
      }
    },
    pt: {
      heading: 'Confirmação',
      modalButton: 'Modal de confirmação',
      modal: {
        header: 'Confirmação',
        title: 'Você tem certeza que quer Excluír este post?',
        text:
          'Excluír post, resultará na retirada deste conteúdo de todas as paginas e widgets. Esta ação não pode ser disfeita',
        buttonLeft: 'Cancelar',
        buttonRight: 'Excluír'
      }
    }
  }
}
_o(xo), (xo.render = wo), (xo.__scopeId = 'data-v-ef019658')
var zo = {
  components: { Button: g },
  setup() {
    const { t: t } = b(),
      { notify: o } = h()
    return { t: t, notify: o }
  }
}
const Bo = s('data-v-f5402b48')
l('data-v-f5402b48')
const Co = { class: 'notification-demo' }
r()
const Io = Bo(function (s, l) {
  const r = t('Button')
  return (
    o(),
    e('div', Co, [
      a(
        r,
        {
          model: 'glassy',
          icon: 'icon-info',
          reverse: !0,
          onClick: l[1] || (l[1] = (t) => s.notify({ message: s.t('message') }))
        },
        { default: Bo(() => [n(i(s.t('infoButton')), 1)]), _: 1 }
      ),
      a(
        r,
        {
          model: 'glassy',
          icon: 'icon-exclamation-mark',
          reverse: !0,
          onClick: l[2] || (l[2] = (t) => s.notify({ message: s.t('message'), status: 'warning' }))
        },
        { default: Bo(() => [n(i(s.t('warningButton')), 1)]), _: 1 }
      ),
      a(
        r,
        {
          model: 'glassy',
          icon: 'icon-close',
          reverse: !0,
          onClick: l[3] || (l[3] = (t) => s.notify({ message: s.t('message'), status: 'error' }))
        },
        { default: Bo(() => [n(i(s.t('errorButton')), 1)]), _: 1 }
      ),
      a(
        r,
        {
          model: 'glassy',
          icon: 'icon-thick-2px',
          reverse: !0,
          onClick: l[4] || (l[4] = (t) => s.notify({ message: s.t('message'), status: 'success' }))
        },
        { default: Bo(() => [n(i(s.t('successButton')), 1)]), _: 1 }
      )
    ])
  )
})
var Lo = (t) => {
  t.i18n = {
    en: {
      message: 'Notification message',
      infoButton: 'Information',
      warningButton: 'Warning',
      errorButton: 'Error',
      successButton: 'Success'
    },
    pt: {
      message: 'Mensagem de notificação',
      infoButton: 'Informação',
      warningButton: 'Alerta',
      errorButton: 'Erro',
      successButton: 'Sucesso'
    }
  }
}
Lo(zo), (zo.render = Io), (zo.__scopeId = 'data-v-f5402b48')
var So = {
  components: { ConfirmationDemo: xo, NotificationDemo: zo },
  setup() {
    const { t: t } = b()
    return { t: t }
  }
}
const To = s('data-v-1b2ab5e2')
l('data-v-1b2ab5e2')
const Ro = { class: 'modals' },
  Mo = a('hr', null, null, -1)
r()
const Eo = To(function (n, s) {
  const l = t('NotificationDemo'),
    r = t('ConfirmationDemo')
  return o(), e('section', Ro, [a('h1', null, i(n.t('heading')), 1), Mo, a(l), a(r)])
})
var Ho = (t) => {
  t.i18n = {
    en: {
      heading: 'Modals and notificações',
      notificationButton: 'Notefy me!',
      notificationMessage: 'Notification message'
    },
    pt: {
      heading: 'Modais e notificações',
      notificationButton: 'Notificação',
      notificationMessage: 'Mensagem de notificação'
    }
  }
}
Ho(So), (So.render = Eo), (So.__scopeId = 'data-v-1b2ab5e2')
const Po = x({
  inputText: {
    type: 'text',
    label: 'text.label',
    placeholder: 'text.placeholder'
  },
  inputPassword: {
    type: 'password',
    label: 'password.label',
    placeholder: 'password.placeholder'
  },
  inputSelect: {
    type: 'select',
    label: 'select.label',
    placeholder: 'select.placeholder',
    options: [
      { value: 1, label: 'select.options.first' },
      { value: 2, label: 'select.options.second' },
      { value: 3, label: 'select.options.third' }
    ]
  }
})
var $o = {
    en: {
      text: { label: 'Input text', placeholder: 'Type here' },
      password: {
        label: 'Input passowrd',
        placeholder: 'Type your password here'
      },
      select: {
        label: 'Input select',
        placeholder: 'Select an option',
        options: {
          first: 'First option',
          second: 'Second option',
          third: 'Third option'
        }
      }
    },
    pt: {
      text: { label: 'Campo de texto', placeholder: 'Digite aqui' },
      password: {
        label: 'Campo de senha',
        placeholder: 'Digite sua senha aqui'
      },
      select: {
        label: 'Campo de seleção',
        placeholder: 'Selecione uma das opções',
        options: {
          first: 'Primeira opção',
          second: 'Segunda opção',
          third: 'Terceira opção'
        }
      }
    }
  },
  Do = {
    components: { Form: y },
    setup() {
      const { t: t } = b()
      return { t: t, schema: Po, messages: $o }
    }
  }
const qo = s('data-v-40b33cfb')
l('data-v-40b33cfb')
const Go = { class: 'inputs' },
  Fo = a('hr', null, null, -1)
r()
const No = qo(function (n, s) {
  const l = t('Form')
  return (
    o(),
    e('section', Go, [
      a('h1', null, i(n.t('title')), 1),
      Fo,
      a(l, { schema: n.schema, locale: n.messages }, null, 8, ['schema', 'locale'])
    ])
  )
})
var jo = (t) => {
  t.i18n = { en: { title: 'Form inputs' }, pt: { title: 'Formulário' } }
}
jo(Do), (Do.render = No), (Do.__scopeId = 'data-v-40b33cfb')
var Vo = {
  components: {
    Text: Ut,
    Icons: F,
    Colors: wt,
    Buttons: E,
    Settings: k,
    Modals: So,
    Inputs: Do
  }
}
const Ao = s('data-v-25fd6029')
l('data-v-25fd6029')
const Oo = { class: 'playground' }
r()
const Wo = Ao(function (n, i) {
  const s = t('Settings'),
    l = t('Colors'),
    r = t('Text'),
    c = t('Icons'),
    d = t('Buttons'),
    u = t('Modals'),
    m = t('Inputs')
  return o(), e('div', Oo, [a(s), a(l), a(r), a(c), a(d), a(u), a(m)])
})
;(Vo.render = Wo), (Vo.__scopeId = 'data-v-25fd6029')
export default Vo
