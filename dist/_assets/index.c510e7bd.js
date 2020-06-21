import {
  d as t,
  r as o,
  o as e,
  c as a,
  a as n,
  b as i,
  _ as s,
  w as l,
  p as r,
  e as c,
  F as d,
  f as u,
  g as m,
  h as v,
  i as f,
  T as p,
  j as h,
  u as g
} from './index.7ac1f0e9.js'
import { s as b, u as x, c as y, a as k, b as w } from './index.3730c2b4.js'
var _ = t({ components: { Button: b }, props: ['size', 'title', 'skin'], setup: () => x() })
const z = l('data-v-1a765ecf'),
  B = z(function (t, l) {
    const r = o('Button')
    return (
      e(),
      a(
        'div',
        { class: t.size + '-buttons-list' },
        [
          n(r, { size: t.size, skin: t.skin }, { default: z(() => [i(s(t.t('button')), 1)]), _: 1 }, 8, [
            'size',
            'skin'
          ]),
          n(
            r,
            { size: t.size, skin: t.skin, icon: 'icon-form' },
            { default: z(() => [i(s(t.t('icon-left')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, reverse: !0, icon: 'icon-form' },
            { default: z(() => [i(s(t.t('icon-right')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, class: 'button--hover' },
            { default: z(() => [i(s(t.t('hover')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, class: 'button--active' },
            { default: z(() => [i(s(t.t('active')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, disabled: !0 },
            { default: z(() => [i(s(t.t('disabled')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          )
        ],
        2
      )
    )
  })
let I = document.createElement('style')
;(I.innerHTML =
  "[class*=-buttons-list][data-v-1a765ecf]{display:flex;align-items:flex-end;flex-wrap:wrap}h1[data-v-09e5c502]{color:var(--color-a-1)}.buttons-demo>div[data-v-09e5c502]{margin-bottom:4em}.buttons-demo[data-v-09e5c502] [class*='-buttons-list']{margin-bottom:2em}.buttons-demo[data-v-09e5c502] pre{display:block;padding:1em;line-height:1.5em;margin-bottom:2em;border-radius:.25em;border:1px solid var(--color-a-1);background-color:var(--color-x-9);color:var(--color-x-3)}.buttons-demo[data-v-09e5c502] .button{margin:.5em 1em .5em 0}h1[data-v-32dd03b7]{color:var(--color-a-1)}ul[data-v-32dd03b7]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1em}ul li[data-v-32dd03b7]{display:flex;align-items:center}ul li i[data-v-32dd03b7]{display:flex;align-items:center;justify-content:center;width:2em;height:2em;border-radius:.25em;background-color:var(--color-x-9)}ul li span[data-v-32dd03b7]{padding-left:1em;font-size:var(--font-size-xs)}.color-palette[data-v-c2ae8ddc]{display:flex;flex-direction:column;list-style:none;margin-bottom:2.857rem}.color-palette li[data-v-c2ae8ddc]{display:flex;align-items:center;justify-content:center;height:40px;color:var(--color-x-11)}.grayish-colors[data-v-ea339f66] li:nth-child(1n+5),.primary-colors[data-v-777186f1] li:nth-child(1n+4),.secondary-colors[data-v-4d451990] li:nth-child(1n+4){color:var(--color-x-1)}.grayish-colors[data-v-ea339f66] li:nth-child(1n+5):last-child{border:1px solid var(--color-x-1)}.system-colors ul[data-v-1c628862]{display:flex}@media screen and (max-width:1024px){ul[data-v-32dd03b7]{grid-template-columns:repeat(1,1fr)}.system-colors ul[data-v-1c628862]{flex-direction:column}}.system-colors ul li[data-v-1c628862]{display:flex;align-items:center;justify-content:center;flex:1;height:40px;padding:.25em 1em;color:var(--color-x-11)}@media screen and (max-width:1024px){.system-colors ul li[data-v-1c628862]{flex:none}.modal\\:confirmation[data-v-544b0c5e]{height:100%}}.system-colors ul li.color-info[data-v-1c628862]{background-color:var(--color-info)}.system-colors ul li.color-error[data-v-1c628862]{background-color:var(--color-error)}.system-colors ul li.color-warning[data-v-1c628862]{background-color:var(--color-warning)}.system-colors ul li.color-success[data-v-1c628862]{background-color:var(--color-success)}.gradient>div[data-v-2c6acdd2]{display:flex;align-items:center;justify-content:center;height:40px;padding:.25em 1em;background-image:linear-gradient(to right,var(--color-a-3),var(--color-b-3));color:var(--color-x-11)}.colors-demo>h1[data-v-46109888]{color:var(--color-a-1)}.css-vars[data-v-46109888]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1.143em;margin-bottom:1.143em}@media screen and (max-width:640px){.css-vars[data-v-46109888]{grid-template-columns:1fr}}.system-colors[data-v-46109888]{margin-bottom:4.571em}.headings code[data-v-52460580]{display:block;margin-bottom:.25rem}ul[data-v-c127df66]{list-style:none}ul li[data-v-c127df66]{margin-bottom:2rem}ul li>code[data-v-c127df66]{display:block;margin-bottom:.5rem}ul li.xxl[data-v-c127df66]{font-size:var(--font-size-xxl)}ul li.xl[data-v-c127df66]{font-size:var(--font-size-xl)}ul li.xs[data-v-c127df66]{font-size:var(--font-size-xs)}ul li.xxs[data-v-c127df66]{font-size:var(--font-size-xxs);font-weight:600;text-transform:uppercase}.text-demo>h1[data-v-a233b9c8]{color:var(--color-a-1)}.modal[data-v-4edd1fa6]{display:grid;overflow:auto;position:fixed;z-index:9;width:100%;height:100%;padding:0 2em;box-sizing:border-box}.modal__mask[data-v-4edd1fa6]{z-index:1;grid-row:1/2;grid-column:1/2;background:var(--color-x-11);opacity:.6}.modal__content[data-v-4edd1fa6]{position:relative;grid-row:1/2;grid-column:1/2;align-self:center;z-index:2;margin:2em auto}.modal__content>[class*='modal:'][data-v-4edd1fa6]{opacity:0;animation-name:fade-in-data-v-4edd1fa6;animation-duration:var(--transition-duration);animation-delay:var(--transition-duration);animation-timing-function:var(--transition-timing-function);animation-fill-mode:forwards}@keyframes fade-in-data-v-4edd1fa6{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.modal\\:confirmation[data-v-544b0c5e]{display:flex;flex-flow:column;overflow:hidden;width:100%;max-width:512px;background-color:var(--color-x-11);border-radius:var(--card-border-radius);border:var(--card-border-width) var(--card-border-style) var(--color-x-8)}main[data-v-544b0c5e]{display:flex;flex-flow:column;justify-content:center;align-items:center;padding:1em 3em;min-height:230px;text-align:center}@media screen and (max-width:1024px){main[data-v-544b0c5e]{flex:1}}main p[data-v-544b0c5e]{margin-bottom:.5em;font-size:var(--font-size-xxl);font-weight:700}main span[data-v-544b0c5e]{color:var(--color-x-6);font-size:var(--font-size);line-height:180%}main i[data-v-544b0c5e]{margin-bottom:1rem;font-size:40px}header[data-v-544b0c5e]{display:flex;padding:1.5em;align-items:center;background-color:var(--color-x-10);color:var(--color-x-6)}header span[data-v-544b0c5e]{display:flex;align-items:center;cursor:pointer}header i[data-v-544b0c5e]{margin-right:.5em}footer[data-v-544b0c5e]{display:flex;border-top:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[data-v-544b0c5e]{flex:1;padding:1.313em;background-color:transparent;border:none;color:var(--color-x-6);font-size:var(--font-size-xl);outline:0;cursor:pointer}footer button[data-v-544b0c5e]:hover{background-color:var(--color-x-10)}footer button+button[data-v-544b0c5e]{color:var(--color-error);border-left:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[style*=\"color:\"][data-v-544b0c5e]{font-weight:700}h1[data-v-4136bd1d]{color:var(--color-a-1)}.button[data-v-4136bd1d]{margin-bottom:2em}.notification-demo[data-v-29b68647]{display:flex;margin-bottom:2em}.button[data-v-29b68647]{margin-right:1em}h1[data-v-2d0d7ecd]{color:var(--color-a-1)}.actions[data-v-2d0d7ecd]{display:flex;margin-bottom:2em}.actions .button[data-v-2d0d7ecd]{margin-right:1em}h1[data-v-2f958d7a]{color:var(--color-a-1)}.inputs .form[data-v-2f958d7a] .form__grid{display:grid;grid-template-columns:1fr 1fr;grid-gap:1em}@media screen and (max-width:1024px){.inputs .form[data-v-2f958d7a] .form__grid{display:block}}.playground[data-v-2347213e]{padding:10vh 2em;max-width:1024px;margin:auto}.playground>section[data-v-2347213e]{margin-bottom:20vh}"),
  document.head.appendChild(I)
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
C(_), (_.render = B), (_.__scopeId = 'data-v-1a765ecf')
var L = t({ components: { ButtonsList: _ } })
const S = { class: 'ghosty-buttons' },
  T = n('h6', null, 'Ghosty', -1)
L.render = function (t, i) {
  const s = o('ButtonsList')
  return (
    e(),
    a('div', S, [
      T,
      n(s, { skin: 'ghosty', size: 'small' }),
      n(s, { skin: 'ghosty', size: 'medium' }),
      n(s, { skin: 'ghosty', size: 'large' })
    ])
  )
}
var M = t({ components: { ButtonsList: _ } })
const E = { class: 'glassy-buttons' },
  H = n('h6', null, 'Glassy', -1)
M.render = function (t, i) {
  const s = o('ButtonsList')
  return (
    e(),
    a('div', E, [
      H,
      n(s, { skin: 'glassy', size: 'small' }),
      n(s, { skin: 'glassy', size: 'medium' }),
      n(s, { skin: 'glassy', size: 'large' })
    ])
  )
}
var P = t({ components: { GlassyButtons: M, GhostyButtons: L }, setup: () => x() })
const $ = l('data-v-09e5c502')
r('data-v-09e5c502')
const D = { class: 'buttons-demo' },
  R = n('hr', null, null, -1),
  G = n('div', { class: 'text' }, null, -1)
c()
const q = $(function (t, i) {
  const l = o('GlassyButtons'),
    r = o('GhostyButtons')
  return e(), a('section', D, [n('h1', null, s(t.t('title')), 1), R, G, n(l), n(r)])
})
var j = (t) => {
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
j(P), (P.render = q), (P.__scopeId = 'data-v-09e5c502')
var F = t({
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
  setup: () => x()
})
const N = l('data-v-32dd03b7')
r('data-v-32dd03b7')
const V = { class: 'icons-demo' },
  A = n('hr', null, null, -1)
c()
const O = N(function (t, o) {
  return (
    e(),
    a('section', V, [
      n('h1', null, s(t.t('title')), 1),
      A,
      n('ul', null, [
        (e(!0),
        a(
          d,
          null,
          u(
            t.icons,
            (t) => (
              e(), a('li', { key: t }, [n('i', { color: 'a', class: t }, null, 2), n('span', null, '.' + s(t), 1)])
            )
          ),
          128
        ))
      ])
    ])
  )
})
var W = (t) => {
  t.i18n = { pt: { title: 'Família de icones' }, en: { title: 'Icon family' } }
}
W(F), (F.render = O), (F.__scopeId = 'data-v-32dd03b7')
var J = t({ props: ['cssVar', 'range'] })
const K = l('data-v-c2ae8ddc')
r('data-v-c2ae8ddc')
const Q = { class: 'color-palette' }
c()
const U = K(function (t, o) {
  return (
    e(),
    a('ul', Q, [
      (e(!0),
      a(
        d,
        null,
        u(
          Array(t.range),
          (o, i) => (
            e(),
            a(
              'li',
              { key: o, style: `background-color: var(${t.cssVar}-${i + 1})` },
              [n('code', null, s(`${t.cssVar}-${i + 1}`), 1)],
              4
            )
          )
        ),
        128
      ))
    ])
  )
})
;(J.render = U), (J.__scopeId = 'data-v-c2ae8ddc')
var X = t({ components: { Palette: J }, setup: () => x() })
const Y = l('data-v-777186f1')
r('data-v-777186f1')
const Z = { class: 'primary-colors' }
c()
const tt = Y(function (t, i) {
  const l = o('Palette')
  return (
    e(), a('div', Z, [n('h6', null, s(t.t('title')), 1), n(l, { class: 'primary', range: 7, cssVar: '--color-a' })])
  )
})
var ot = (t) => {
  t.i18n = { pt: { title: 'Cores Primárias' }, en: { title: 'Primary colors' } }
}
ot(X), (X.render = tt), (X.__scopeId = 'data-v-777186f1')
var et = t({ components: { Palette: J }, setup: () => x() })
const at = l('data-v-4d451990')
r('data-v-4d451990')
const nt = { class: 'secondary-colors' }
c()
const it = at(function (t, i) {
  const l = o('Palette')
  return (
    e(), a('div', nt, [n('h6', null, s(t.t('title')), 1), n(l, { class: 'secondary', range: 7, cssVar: '--color-b' })])
  )
})
var st = (t) => {
  t.i18n = { pt: { title: 'Cores Secundárias' }, en: { title: 'Secondary colors' } }
}
st(et), (et.render = it), (et.__scopeId = 'data-v-4d451990')
var lt = t({ components: { Palette: J }, setup: () => x() })
const rt = l('data-v-ea339f66')
r('data-v-ea339f66')
const ct = { class: 'grayish-colors' }
c()
const dt = rt(function (t, i) {
  const l = o('Palette')
  return (
    e(), a('div', ct, [n('h6', null, s(t.t('title')), 1), n(l, { class: 'grayish', range: 11, cssVar: '--color-x' })])
  )
})
var ut = (t) => {
  t.i18n = { pt: { title: 'Tons de cinza' }, en: { title: 'Shades of gray' } }
}
ut(lt), (lt.render = dt), (lt.__scopeId = 'data-v-ea339f66')
var mt = t({ setup: () => x() })
const vt = l('data-v-1c628862')
r('data-v-1c628862')
const ft = { class: 'system-colors' }
c()
const pt = vt(function (t, o) {
  return (
    e(),
    a('div', ft, [
      n('h6', null, s(t.t('title')), 1),
      n('ul', null, [
        (e(!0),
        a(
          d,
          null,
          u(
            ['info', 'success', 'warning', 'error'],
            (t) => (
              e(), a('li', { key: 'color-' + t, class: 'color-' + t }, [n('code', null, s('--color-' + t), 1)], 2)
            )
          ),
          128
        ))
      ])
    ])
  )
})
var ht = (t) => {
  t.i18n = { pt: { title: 'Cores do sistema' }, en: { title: 'System colors' } }
}
ht(mt), (mt.render = pt), (mt.__scopeId = 'data-v-1c628862')
var gt = t({})
const bt = l('data-v-2c6acdd2')
r('data-v-2c6acdd2')
const xt = { class: 'gradient' },
  yt = n('h6', null, 'Gradient', -1),
  kt = n('div', null, [n('code', null, 'linear-gradient(to right, var(--color-a-3), var(--color-b-3));')], -1)
c()
const wt = bt(function (t, o) {
  return e(), a('div', xt, [yt, kt])
})
;(gt.render = wt), (gt.__scopeId = 'data-v-2c6acdd2')
var _t = t({ components: { Primary: X, Secondary: et, Grayish: lt, System: mt, Gradient: gt }, setup: () => x() })
const zt = l('data-v-46109888')
r('data-v-46109888')
const Bt = { class: 'colors-demo' },
  It = n('hr', null, null, -1),
  Ct = { class: 'css-vars' }
c()
const Lt = zt(function (t, i) {
  const l = o('Primary'),
    r = o('Secondary'),
    c = o('Grayish'),
    d = o('System'),
    u = o('Gradient')
  return e(), a('section', Bt, [n('h1', null, s(t.t('title')), 1), It, n('div', Ct, [n(l), n(r), n(c)]), n(d), n(u)])
})
var St = (t) => {
  t.i18n = { pt: { title: 'Palheta de cores' }, en: { title: 'Color palette' } }
}
St(_t), (_t.render = Lt), (_t.__scopeId = 'data-v-46109888')
var Tt = { setup: () => x() }
const Mt = l('data-v-52460580')
r('data-v-52460580')
const Et = { class: 'headings' },
  Ht = n('code', null, '$font-size-h1', -1),
  Pt = n('code', null, '$font-size-h2', -1),
  $t = n('code', null, '$font-size-h3', -1),
  Dt = n('code', null, '$font-size-h4', -1),
  Rt = n('code', null, '$font-size-h5', -1),
  Gt = n('code', null, '$font-size-h6', -1)
c()
const qt = Mt(function (t, o) {
  return (
    e(),
    a('div', Et, [
      n('h1', null, [Ht, i(' ' + s(t.t('h1')), 1)]),
      n('h2', null, [Pt, i(' ' + s(t.t('h2')), 1)]),
      n('h3', null, [$t, i(' ' + s(t.t('h3')), 1)]),
      n('h4', null, [Dt, i(' ' + s(t.t('h4')), 1)]),
      n('h5', null, [Rt, i(' ' + s(t.t('h5')), 1)]),
      n('h6', null, [Gt, i(' ' + s(t.t('h6')), 1)])
    ])
  )
})
var jt = (t) => {
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
jt(Tt), (Tt.render = qt), (Tt.__scopeId = 'data-v-52460580')
var Ft = { setup: () => x() }
const Nt = { class: 'paragraph' },
  Vt = n(
    'p',
    null,
    [
      i(' Lorem ipsum dolor sit amet consectetur adipisicing elit. '),
      n('a', { href: '' }, 'Impedit nisi cupiditate sunt'),
      i(' fugiat reiciendis dicta consequatur '),
      n('b', null, 'assumenda temporibus enim officia'),
      i(', unde dolorem quibusdam '),
      n('i', null, 'reprehenderit odit voluptas magni'),
      i(' corrupti id nulla? lorem ipsum dolor sit amet consectetur adipisicing elit. ')
    ],
    -1
  )
var At = (t) => {
  t.i18n = { pt: { title: 'Isto é um paragrafo' }, en: { title: 'This is a paragraph' } }
}
At(Ft),
  (Ft.render = function (t, o) {
    return e(), a('div', Nt, [n('h6', null, s(t.t('title')) + ':', 1), Vt])
  })
var Ot = { setup: () => x() }
const Wt = l('data-v-c127df66')
r('data-v-c127df66')
const Jt = { class: 'labels' },
  Kt = n(
    'ul',
    null,
    [
      n('li', { class: 'xxl' }, [n('code', null, '--font-size-xxl'), i('Larger font size')]),
      n('li', { class: 'xl' }, [n('code', null, '--font-size-xl'), i('Slightly large text size')]),
      n('li', null, 'Default font size'),
      n('li', { class: 'xs' }, [n('code', null, '--font-size-xs'), i('Slightly small text size')]),
      n('li', { class: 'xxs' }, [n('code', null, '--font-size-xxx'), i('Smaller text size')])
    ],
    -1
  )
c()
const Qt = Wt(function (t, o) {
  return e(), a('div', Jt, [n('h6', null, s(t.t('title')), 1), Kt])
})
var Ut = (t) => {
  t.i18n = { pt: { title: 'Outros tamanhos de texto:' }, en: { title: 'Othe text sizes:' } }
}
Ut(Ot), (Ot.render = Qt), (Ot.__scopeId = 'data-v-c127df66')
var Xt = { components: { Headings: Tt, Paragraph: Ft, Labels: Ot }, setup: () => x() }
const Yt = l('data-v-a233b9c8')
r('data-v-a233b9c8')
const Zt = { class: 'text-demo' },
  to = n('hr', null, null, -1),
  oo = n('hr', null, null, -1),
  eo = n('hr', null, null, -1)
c()
const ao = Yt(function (t, i) {
  const l = o('Headings'),
    r = o('Paragraph'),
    c = o('Labels')
  return e(), a('section', Zt, [n('h1', null, s(t.t('title')), 1), to, n(l), oo, n(r), eo, n(c)])
})
var no = (t) => {
  t.i18n = { pt: { title: 'Textos e fontes' }, en: { title: 'Texts and fonts' } }
}
no(Xt), (Xt.render = ao), (Xt.__scopeId = 'data-v-a233b9c8')
var io = {
  setup() {
    m(() => {
      document.body.classList.add('scroll-lock')
    }),
      v(() => {
        document.body.classList.remove('scroll-lock')
      })
  }
}
const so = l('data-v-4edd1fa6')
r('data-v-4edd1fa6')
const lo = { class: 'modal' },
  ro = n('div', { class: 'modal__mask' }, null, -1),
  co = { class: 'modal__content' }
c()
const uo = so(function (t, o) {
  return e(), a(p, { to: '#portal\\:modal' }, [n('div', lo, [ro, n('div', co, [f(t.$slots, 'default')])])])
})
;(io.render = uo), (io.__scopeId = 'data-v-4edd1fa6')
var mo = {
  props: ['status', 'header', 'icon', 'title', 'text', 'buttonLeft', 'buttonRight'],
  setup(t, o) {
    const e = (t) => {
      'Escape' === t.key && o.emit('cancel', t)
    }
    return (
      m(() => {
        window.addEventListener('keyup', e)
      }),
      v(() => {
        window.removeEventListener('keyup', e)
      }),
      {}
    )
  }
}
const vo = l('data-v-544b0c5e')
r('data-v-544b0c5e')
const fo = { class: 'modal:confirmation' },
  po = { key: 0 },
  ho = n('i', { class: 'icon-arrow-left' }, null, -1),
  go = { key: 0 },
  bo = { key: 0 }
c()
const xo = vo(function (t, o) {
  return (
    e(),
    a('div', fo, [
      t.header
        ? (e(),
          a('header', po, [
            n('span', { onClick: o[1] || (o[1] = (o) => t.$emit('cancel')) }, [ho, n('span', null, s(t.header), 1)])
          ]))
        : h('', !0),
      n('main', null, [
        t.icon ? (e(), a('i', { key: 0, class: ['big', t.icon], color: 'a' }, null, 2)) : h('', !0),
        t.title ? (e(), a('p', go, s(t.title), 1)) : h('', !0),
        t.text ? (e(), a('span', bo, s(t.text), 1)) : h('', !0)
      ]),
      n('footer', null, [
        t.buttonLeft
          ? (e(),
            a('button', { key: 0, onClick: o[2] || (o[2] = (o) => t.$emit('leftButtonClick')) }, s(t.buttonLeft), 1))
          : h('', !0),
        t.buttonRight
          ? (e(),
            a('button', { key: 0, onClick: o[3] || (o[3] = (o) => t.$emit('rightButtonClick')) }, s(t.buttonRight), 1))
          : h('', !0)
      ])
    ])
  )
})
;(mo.render = xo), (mo.__scopeId = 'data-v-544b0c5e')
var yo = t({
  data: () => ({ showModal: !1 }),
  components: { Modal: io, Button: b, Confirmation: mo },
  setup: () => x()
})
const ko = l('data-v-4136bd1d')
r('data-v-4136bd1d')
const wo = { class: 'confirmation-demo' }
c()
const _o = ko(function (t, l) {
  const r = o('Button'),
    c = o('Confirmation'),
    d = o('Modal')
  return (
    e(),
    a('div', wo, [
      n('h6', null, s(t.t('heading')), 1),
      n(
        r,
        { model: 'glassy', icon: 'icon-thick-2px', reverse: !0, onClick: l[1] || (l[1] = (o) => (t.showModal = !0)) },
        { default: ko(() => [i(s(t.t('modalButton')), 1)]), _: 1 }
      ),
      n(
        c,
        {
          icon: 'icon-trash-bin-small',
          header: t.t('modal.header'),
          title: t.t('modal.title'),
          text: t.t('modal.text'),
          buttonLeft: t.t('modal.buttonLeft'),
          buttonRight: t.t('modal.buttonRight')
        },
        null,
        8,
        ['header', 'title', 'text', 'buttonLeft', 'buttonRight']
      ),
      t.showModal
        ? n(
            d,
            { key: 0 },
            {
              default: ko(() => [
                n(
                  c,
                  {
                    onCancel: l[2] || (l[2] = (o) => (t.showModal = !1)),
                    icon: 'icon-trash-bin-small',
                    header: t.t('modal.header'),
                    title: t.t('modal.title'),
                    text: t.t('modal.text'),
                    buttonLeft: t.t('modal.buttonLeft'),
                    onLeftButtonClick: l[3] || (l[3] = (o) => (t.showModal = !1)),
                    buttonRight: t.t('modal.buttonRight'),
                    onRightButtonClick: l[4] || (l[4] = (o) => (t.showModal = !1))
                  },
                  null,
                  8,
                  ['header', 'title', 'text', 'buttonLeft', 'buttonRight']
                )
              ]),
              _: 1
            }
          )
        : h('', !0)
    ])
  )
})
var zo = (t) => {
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
zo(yo), (yo.render = _o), (yo.__scopeId = 'data-v-4136bd1d')
var Bo = t({
  components: { Button: b },
  setup() {
    const { t: t } = x(),
      { notify: o } = g()
    return { t: t, notify: o }
  }
})
const Io = l('data-v-29b68647')
r('data-v-29b68647')
const Co = { class: 'notification-demo' }
c()
const Lo = Io(function (t, l) {
  const r = o('Button')
  return (
    e(),
    a('div', Co, [
      n(
        r,
        {
          model: 'glassy',
          icon: 'icon-info',
          reverse: !0,
          onClick: l[1] || (l[1] = (o) => t.notify({ message: t.t('message') }))
        },
        { default: Io(() => [i(s(t.t('infoButton')), 1)]), _: 1 }
      ),
      n(
        r,
        {
          model: 'glassy',
          icon: 'icon-exclamation-mark',
          reverse: !0,
          onClick: l[2] || (l[2] = (o) => t.notify({ message: t.t('message'), status: 'warning' }))
        },
        { default: Io(() => [i(s(t.t('warningButton')), 1)]), _: 1 }
      ),
      n(
        r,
        {
          model: 'glassy',
          icon: 'icon-close',
          reverse: !0,
          onClick: l[3] || (l[3] = (o) => t.notify({ message: t.t('message'), status: 'error' }))
        },
        { default: Io(() => [i(s(t.t('errorButton')), 1)]), _: 1 }
      ),
      n(
        r,
        {
          model: 'glassy',
          icon: 'icon-thick-2px',
          reverse: !0,
          onClick: l[4] || (l[4] = (o) => t.notify({ message: t.t('message'), status: 'success' }))
        },
        { default: Io(() => [i(s(t.t('successButton')), 1)]), _: 1 }
      )
    ])
  )
})
var So = (t) => {
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
So(Bo), (Bo.render = Lo), (Bo.__scopeId = 'data-v-29b68647')
var To = t({ components: { ConfirmationDemo: yo, NotificationsDemo: Bo }, setup: () => x() })
const Mo = l('data-v-2d0d7ecd')
r('data-v-2d0d7ecd')
const Eo = { class: 'modals' },
  Ho = n('hr', null, null, -1)
c()
const Po = Mo(function (t, i) {
  const l = o('NotificationsDemo'),
    r = o('ConfirmationDemo')
  return e(), a('section', Eo, [n('h1', null, s(t.t('heading')), 1), Ho, n(l), n(r)])
})
var $o = (t) => {
  t.i18n = {
    en: {
      heading: 'Modals and notifications',
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
$o(To), (To.render = Po), (To.__scopeId = 'data-v-2d0d7ecd')
const Do = y({
  inputText: { type: 'text', label: 'text.label', placeholder: 'text.placeholder' },
  inputPassword: { type: 'password', label: 'password.label', placeholder: 'password.placeholder' },
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
var Ro = {
    en: {
      text: { label: 'Input text', placeholder: 'Type here' },
      password: { label: 'Input passowrd', placeholder: 'Type your password here' },
      select: {
        label: 'Input select',
        placeholder: 'Select an option',
        options: { first: 'First option', second: 'Second option', third: 'Third option' }
      }
    },
    pt: {
      text: { label: 'Campo de texto', placeholder: 'Digite aqui' },
      password: { label: 'Campo de senha', placeholder: 'Digite sua senha aqui' },
      select: {
        label: 'Campo de seleção',
        placeholder: 'Selecione uma das opções',
        options: { first: 'Primeira opção', second: 'Segunda opção', third: 'Terceira opção' }
      }
    }
  },
  Go = t({
    components: { Form: k },
    setup() {
      const { t: t } = x()
      return { t: t, schema: Do, messages: Ro }
    }
  })
const qo = l('data-v-2f958d7a')
r('data-v-2f958d7a')
const jo = { class: 'inputs' },
  Fo = n('hr', null, null, -1)
c()
const No = qo(function (t, i) {
  const l = o('Form')
  return (
    e(),
    a('section', jo, [
      n('h1', null, s(t.t('title')), 1),
      Fo,
      n(l, { schema: t.schema, locale: t.messages }, null, 8, ['schema', 'locale'])
    ])
  )
})
var Vo = (t) => {
  t.i18n = { en: { title: 'Form inputs' }, pt: { title: 'Formulário' } }
}
Vo(Go), (Go.render = No), (Go.__scopeId = 'data-v-2f958d7a')
var Ao = t({ components: { Text: Xt, Icons: F, Colors: _t, Buttons: P, Settings: w, Modals: To, Inputs: Go } })
const Oo = l('data-v-2347213e')
r('data-v-2347213e')
const Wo = { class: 'playground' }
c()
const Jo = Oo(function (t, i) {
  const s = o('Settings'),
    l = o('Colors'),
    r = o('Text'),
    c = o('Icons'),
    d = o('Buttons'),
    u = o('Modals'),
    m = o('Inputs')
  return e(), a('div', Wo, [n(s), n(l), n(r), n(c), n(d), n(u), n(m)])
})
;(Ao.render = Jo), (Ao.__scopeId = 'data-v-2347213e')
export default Ao
