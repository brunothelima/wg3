import { d as t, b as s, o as e, c as o, e as n, f as a, _ as i, w as l, p as r, a as d } from './index.510f259e.js'
import { u } from './useI18n.8cec2910.js'
import { s as c } from './index.e97e96a4.js'
var m = t({ components: { Button: c }, props: ['size', 'title', 'skin'], setup: () => u() })
const v = l('data-v-2fde15f6'),
  b = v(function (t, l) {
    const r = s('Button')
    return (
      e(),
      o(
        'div',
        { class: t.size + '-buttons-list' },
        [
          n(r, { size: t.size, skin: t.skin }, { default: v(() => [a(i(t.t('button')), 1)]), _: 1 }, 8, [
            'size',
            'skin'
          ]),
          n(
            r,
            { size: t.size, skin: t.skin, icon: 'icon-form' },
            { default: v(() => [a(i(t.t('icon-left')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, reverse: !0, icon: 'icon-form' },
            { default: v(() => [a(i(t.t('icon-right')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, class: 'button--hover' },
            { default: v(() => [a(i(t.t('hover')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, class: 'button--active' },
            { default: v(() => [a(i(t.t('active')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          ),
          n(
            r,
            { size: t.size, skin: t.skin, disabled: !0 },
            { default: v(() => [a(i(t.t('disabled')), 1)]), _: 1 },
            8,
            ['size', 'skin']
          )
        ],
        2
      )
    )
  })
let f = document.createElement('style')
;(f.innerHTML =
  "[class*=-buttons-list][data-v-2fde15f6]{display:flex;align-items:flex-end;flex-wrap:wrap}h1[data-v-156a3011]{color:var(--color-a-1)}.buttons-demo>div[data-v-156a3011]{margin-bottom:4em}.buttons-demo[data-v-156a3011] [class*='-buttons-list']{margin-bottom:2em}.buttons-demo[data-v-156a3011] pre{display:block;padding:1em;line-height:1.5em;margin-bottom:2em;border-radius:.25em;border:1px solid var(--color-a-1);background-color:var(--color-x-9);color:var(--color-x-3)}.buttons-demo[data-v-156a3011] .button{margin:.5em 1em .5em 0}"),
  document.head.appendChild(f)
var k = (t) => {
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
k(m), (m.render = b), (m.__scopeId = 'data-v-2fde15f6')
var p = t({ components: { ButtonsList: m } })
const z = { class: 'ghosty-buttons' },
  g = n('h6', null, 'Ghosty', -1)
p.render = function (t, a) {
  const i = s('ButtonsList')
  return (
    e(),
    o('div', z, [
      g,
      n(i, { skin: 'ghosty', size: 'small' }),
      n(i, { skin: 'ghosty', size: 'medium' }),
      n(i, { skin: 'ghosty', size: 'large' })
    ])
  )
}
var h = t({ components: { ButtonsList: m } })
const B = { class: 'glassy-buttons' },
  y = n('h6', null, 'Glassy', -1)
h.render = function (t, a) {
  const i = s('ButtonsList')
  return (
    e(),
    o('div', B, [
      y,
      n(i, { skin: 'glassy', size: 'small' }),
      n(i, { skin: 'glassy', size: 'medium' }),
      n(i, { skin: 'glassy', size: 'large' })
    ])
  )
}
var _ = t({ components: { GlassyButtons: h, GhostyButtons: p }, setup: () => u() })
const x = l('data-v-156a3011')
r('data-v-156a3011')
const G = { class: 'buttons-demo' },
  I = n('hr', null, null, -1),
  L = n('div', { class: 'text' }, null, -1)
d()
const D = x(function (t, a) {
  const l = s('GlassyButtons'),
    r = s('GhostyButtons')
  return e(), o('section', G, [n('h1', null, i(t.t('title')), 1), I, L, n(l), n(r)])
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
j(_), (_.render = D), (_.__scopeId = 'data-v-156a3011')
export default _
