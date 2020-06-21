import {
  k as e,
  l as t,
  m as a,
  d as l,
  n as s,
  p as n,
  e as o,
  o as d,
  c as r,
  i as c,
  a as u,
  F as i,
  f as p,
  _ as v,
  w as m,
  q as b,
  r as f,
  s as y,
  j as _,
  t as h,
  v as I,
  x as g
} from './index.7ac1f0e9.js'
const k = e(localStorage.getItem('wg3.locale') || 'en')
t(k, (e) => {
  localStorage.setItem('wg3.locale', e), (document.documentElement.lang = k.value)
}),
  (document.documentElement.lang = k.value)
const x = (e = {}) => {
  const t = a()
  t && 'i18n' in t.type && (e = t.type.i18n)
  return {
    locale: k,
    t: (t) => {
      const a = e[k.value] || self
      return t.split('.').reduce((e, t) => (e ? e[t] : ''), a) || t
    }
  }
}
var w = l({
  props: ['name', 'value', 'options', 'placeholder', 'disabled', 'readonly', 'errors', 't'],
  setup: (e) => ({
    selected: s(() => {
      if (!e.value) return null
      return e.options.find((t) => String(t.value) === e.value).label
    })
  })
})
const $ = m('data-v-1e5e2816')
n('data-v-1e5e2816')
const S = { class: 'input:select__wrapper' },
  j = { key: 0, class: 'input:select__selected' },
  O = { key: 1, class: 'input:select__placeholder' },
  H = u('i', { class: 'icon-caret-down', color: 'a' }, null, -1)
o()
const E = $(function (e, t) {
  return (
    d(),
    r(
      'div',
      { class: ['input:select', { 'input:select--invalid': e.errors }] },
      [
        c(e.$slots, 'before'),
        u('div', S, [
          u(
            'select',
            { id: e.name + 'Id', name: e.name, value: e.value, disabled: e.disabled, readonly: e.readonly },
            [
              (d(!0),
              r(
                i,
                null,
                p(
                  e.options,
                  (t) => (
                    d(),
                    r(
                      'option',
                      { key: t, value: t.value, selected: t.value === e.value },
                      v((e.t && e.t(t.label)) || t.label),
                      9,
                      ['value', 'selected']
                    )
                  )
                ),
                128
              )),
              c(e.$slots, 'default')
            ],
            8,
            ['id', 'name', 'value', 'disabled', 'readonly']
          ),
          e.selected
            ? (d(), r('div', j, v((e.t && e.t(e.selected)) || e.selected), 1))
            : (d(), r('div', O, v((e.t && e.t(e.placeholder)) || 'Select an option'), 1)),
          H
        ]),
        c(e.$slots, 'after')
      ],
      2
    )
  )
})
;(w.render = E), (w.__scopeId = 'data-v-1e5e2816')
var F = l({
  components: { InputSelect: w },
  setup() {
    const { locale: e } = x(),
      { theme: t } = b()
    return { locale: e, theme: t }
  }
})
const z = m('data-v-806bc95e')
n('data-v-806bc95e')
const D = { class: 'settings' }
o()
const G = z(function (e, t) {
  const a = f('InputSelect')
  return (
    d(),
    r('div', D, [
      u(
        a,
        {
          name: 'theme',
          value: e.theme,
          onInput: t[1] || (t[1] = (t) => (e.theme = t.target.value)),
          options: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' }
          ]
        },
        null,
        8,
        ['value']
      ),
      u(
        a,
        {
          name: 'locale',
          value: e.locale,
          options: [
            { value: 'en', label: 'EN' },
            { value: 'pt', label: 'PT' }
          ],
          onInput: t[2] || (t[2] = (t) => (e.locale = t.target.value))
        },
        null,
        8,
        ['value']
      )
    ])
  )
})
;(F.render = G), (F.__scopeId = 'data-v-806bc95e')
var P = l({})
const T = m('data-v-18721f30')
n('data-v-18721f30')
const q = { class: 'button:ghosty' }
o()
const C = T(function (e, t) {
  return d(), r('button', q, [c(e.$slots, 'default')])
})
;(P.render = C), (P.__scopeId = 'data-v-18721f30')
var L = l({})
const N = m('data-v-0e37e58c')
n('data-v-0e37e58c')
const A = { class: 'button:glassy' }
o()
const B = N(function (e, t) {
  return d(), r('button', A, [c(e.$slots, 'default')])
})
;(L.render = B), (L.__scopeId = 'data-v-0e37e58c')
var J = l({ props: ['icon', 'size', 'skin', 'reverse', 'disabled'], components: { Ghosty: P, Glassy: L } })
const K = m('data-v-1994eb2d')
n('data-v-1994eb2d')
const M = { 'data-test': 'slot' }
o()
const Q = K(function (e, t) {
  return (
    d(),
    r(
      y(e.skin || 'glassy'),
      {
        'data-test': 'button',
        disabled: e.disabled,
        class: ['button', 'button--' + (e.size || 'medium'), { 'button--reverse': e.reverse }]
      },
      {
        default: K(() => [
          e.icon ? (d(), r('i', { key: 0, 'data-test': 'icon', class: e.icon }, null, 2)) : _('', !0),
          u('span', M, [c(e.$slots, 'default')])
        ]),
        _: 1
      },
      8,
      ['disabled', 'class']
    )
  )
})
;(J.render = Q), (J.__scopeId = 'data-v-1994eb2d')
const R = (e) => {
  for (let t of Object.values(e)) 'value' in t || (t.value = ''), 'errors' in t || (t.errors = [])
  return e
}
var U = l({ props: ['id', 'input', 't'] })
const V = m('data-v-12dd4538')
n('data-v-12dd4538')
const W = { key: 0, class: 'field__detail' },
  X = { key: 0, class: 'field__errors' }
o()
const Y = V(function (e, t) {
  return (
    d(),
    r(
      'div',
      { class: ['field', { 'field--disabled': e.input.disabled }] },
      [
        e.input.label
          ? (d(), r('label', { key: 0, class: 'field__label', for: e.id }, v(e.t(e.input.label)), 9, ['for']))
          : _('', !0),
        c(e.$slots, 'default'),
        e.input.detail ? (d(), r('div', W, v(e.input.detail), 1)) : _('', !0),
        e.input.errors.length
          ? (d(),
            r('ul', X, [
              (d(!0),
              r(
                i,
                null,
                p(e.input.errors, (t) => (d(), r('li', { key: t }, v(e.t(t)), 1))),
                128
              ))
            ]))
          : _('', !0)
      ],
      2
    )
  )
})
;(U.render = Y), (U.__scopeId = 'data-v-12dd4538')
var Z = { props: ['name', 'value', 'placeholder', 'disabled', 'readonly', 'errors', 't'] }
const ee = m('data-v-2a47fe12')
n('data-v-2a47fe12')
const te = { class: 'input:text__wrapper' }
o()
const ae = ee(function (e, t) {
  return (
    d(),
    r(
      'div',
      { class: ['input:text', { 'input:text--invalid': e.errors.length }] },
      [
        c(e.$slots, 'before'),
        u('div', te, [
          u(
            'input',
            {
              type: 'text',
              name: e.name,
              id: e.name + 'Id',
              value: e.value,
              disabled: e.disabled,
              readonly: e.readonly,
              placeholder: e.t(e.placeholder)
            },
            null,
            8,
            ['name', 'id', 'value', 'disabled', 'readonly', 'placeholder']
          )
        ]),
        c(e.$slots, 'after')
      ],
      2
    )
  )
})
;(Z.render = ae), (Z.__scopeId = 'data-v-2a47fe12')
var le = {
  props: ['name', 'value', 'placeholder', 'disabled', 'readonly', 'errors', 't'],
  data: () => ({ type: 'password' })
}
const se = m('data-v-61ed9647')
n('data-v-61ed9647')
const ne = { class: 'input:text__wrapper' }
o()
const oe = se(function (e, t) {
  return (
    d(),
    r(
      'div',
      { class: ['input:text', { 'input:text--invalid': e.errors.length }] },
      [
        c(e.$slots, 'before'),
        u('div', ne, [
          u(
            'input',
            {
              type: e.type,
              name: e.name,
              id: e.name + 'Id',
              value: e.value,
              disabled: e.disabled,
              readonly: e.readonly,
              placeholder: e.t(e.placeholder)
            },
            null,
            8,
            ['type', 'name', 'id', 'value', 'disabled', 'readonly', 'placeholder']
          ),
          u(
            'i',
            {
              color: 'a',
              class: 'icon-eye' + ('text' === e.type ? '-closed' : ''),
              onClick: t[1] || (t[1] = (t) => (e.type = 'text' === e.type ? 'password' : 'text'))
            },
            null,
            2
          )
        ]),
        c(e.$slots, 'after')
      ],
      2
    )
  )
})
;(le.render = oe), (le.__scopeId = 'data-v-61ed9647')
var de = l({
  props: { locale: Object, schema: Object },
  components: { Field: U, InputText: Z, InputSelect: w, InputPassword: le },
  setup(e, t) {
    const { t: a } = x(e.locale),
      { schema: l, data: n, validate: o } = ((e) => {
        const t = h(e),
          a = s(() =>
            Object.keys(t)
              .map((e) => ({ [e]: t[e].value || '' }))
              .reduce((e, t) => ({ ...e, ...t }))
          ),
          l = s(() =>
            Object.keys(t)
              .map((e) => ({ [e]: t[e].errors || [] }))
              .reduce((e, t) => ({ ...e, ...t }))
          )
        return {
          data: a,
          schema: t,
          errors: l,
          validate: async () => {
            for (let e in t) {
              let a = t[e],
                { value: l, validations: s } = a
              a.errors = []
              for (let e in s) {
                let { handler: t, message: n } = s[e]
                ;(await t(l)) && a.errors.push(n)
              }
            }
            return !Object.values(t).some(({ errors: e }) => (null == e ? void 0 : e.length))
          }
        }
      })(e.schema),
      d = s(() => Object.entries(l))
    return {
      t: a,
      data: n,
      entries: d,
      onInputHandler: (e) => {
        const { name: t, value: a } = e.target,
          s = l[t]
        ;(s.value = a), (s.errors = []), s.events && s.events.onInput && s.events.onInput(e, l)
      },
      onSubmitHandler: async (e) => {
        e.preventDefault(), t.emit('submit', { ev: e, data: n.value })
        ;(await o()) && t.emit('success', { ev: e, data: n.value })
      }
    }
  }
})
const re = { class: 'form__grid' }
de.render = function (e, t) {
  const a = f('Field')
  return (
    d(),
    r(
      'form',
      { onSubmit: t[2] || (t[2] = (t) => e.onSubmitHandler(t)), class: 'form' },
      [
        u('div', re, [
          (d(!0),
          r(
            i,
            null,
            p(
              e.entries,
              ([l, s]) => (
                d(),
                r(
                  a,
                  { key: s.name, input: s, id: l + 'Id', t: e.t },
                  {
                    default: I(() => [
                      (d(),
                      r(
                        y('input-' + s.type),
                        g(s, { onInput: t[1] || (t[1] = (t) => e.onInputHandler(t)), name: l, t: e.t }),
                        null,
                        16,
                        ['name', 't']
                      ))
                    ]),
                    _: 1
                  },
                  1032,
                  ['input', 'id', 't']
                )
              )
            ),
            128
          ))
        ]),
        c(e.$slots, 'default')
      ],
      32
    )
  )
}
export { de as a, F as b, R as c, J as s, x as u }
