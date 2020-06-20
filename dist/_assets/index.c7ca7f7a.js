import {
  j as e,
  k as t,
  l as a,
  m as l,
  p as s,
  d as n,
  o,
  c as d,
  h as r,
  a as c,
  F as u,
  e as i,
  _ as p,
  w as v,
  n as b,
  r as f,
  q as m,
  i as y,
  s as _,
  t as h,
  v as I
} from './index.bc897349.js'
const g = e(localStorage.getItem('wg3.locale') || 'pt')
t(g, (e) => {
  localStorage.setItem('wg3.locale', e), (document.documentElement.lang = g.value)
}),
  (document.documentElement.lang = g.value)
const k = (e = {}) => {
  const t = a()
  t && 'i18n' in t.type && (e = t.type.i18n)
  return {
    locale: g,
    t: (t) => {
      const a = e[g.value] || self
      return t.split('.').reduce((e, t) => (e ? e[t] : ''), a) || t
    }
  }
}
var x = {
  props: ['name', 'value', 'options', 'placeholder', 'disabled', 'readonly', 'errors', 't'],
  setup: (e) => ({
    selected: l(() => {
      if (!e.value) return null
      return e.options.find((t) => String(t.value) === e.value).label
    })
  })
}
const S = v('data-v-b7096ca6')
s('data-v-b7096ca6')
const w = { class: 'input:select__wrapper' },
  $ = { key: 0, class: 'input:select__selected' },
  j = { key: 1, class: 'input:select__placeholder' },
  O = c('i', { class: 'icon-caret-down', color: 'a' }, null, -1)
n()
const H = S(function (e, t) {
  return (
    o(),
    d(
      'div',
      { class: ['input:select', { 'input:select--invalid': e.errors }] },
      [
        r(e.$slots, 'before'),
        c('div', w, [
          c(
            'select',
            {
              id: e.name + 'Id',
              name: e.name,
              value: e.value,
              disabled: e.disabled,
              readonly: e.readonly
            },
            [
              (o(!0),
              d(
                u,
                null,
                i(
                  e.options,
                  (t) => (
                    o(),
                    d(
                      'option',
                      { key: t, value: t.value, selected: t.value === e.value },
                      p((e.t && e.t(t.label)) || t.label),
                      9,
                      ['value', 'selected']
                    )
                  )
                ),
                128
              )),
              r(e.$slots, 'default')
            ],
            8,
            ['id', 'name', 'value', 'disabled', 'readonly']
          ),
          e.selected
            ? (o(), d('div', $, p((e.t && e.t(e.selected)) || e.selected), 1))
            : (o(), d('div', j, p((e.t && e.t(e.placeholder)) || 'Select an option'), 1)),
          O
        ]),
        r(e.$slots, 'after')
      ],
      2
    )
  )
})
;(x.render = H), (x.__scopeId = 'data-v-b7096ca6')
var E = {
  components: { InputSelect: x },
  setup() {
    const { locale: e } = k(),
      { theme: t } = b()
    return { locale: e, theme: t }
  }
}
const F = v('data-v-37a8663e')
s('data-v-37a8663e')
const z = { class: 'settings' }
n()
const B = F(function (e, t) {
  const a = f('InputSelect')
  return (
    o(),
    d('div', z, [
      c(
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
      c(
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
;(E.render = B), (E.__scopeId = 'data-v-37a8663e')
var C = {}
const D = v('data-v-6b6cf4f0')
s('data-v-6b6cf4f0')
const P = { class: 'button:clean' }
n()
const T = D(function (e, t) {
  return o(), d('button', P, [r(e.$slots, 'default')])
})
;(C.render = T), (C.__scopeId = 'data-v-6b6cf4f0')
var q = {}
const G = v('data-v-c63b43ae')
s('data-v-c63b43ae')
const L = { class: 'button:glassy' }
n()
const N = G(function (e, t) {
  return o(), d('button', L, [r(e.$slots, 'default')])
})
;(q.render = N), (q.__scopeId = 'data-v-c63b43ae')
var A = {
  props: {
    icon: { type: String },
    size: { type: String, default: 'medium' },
    skin: { type: String, default: 'glassy' },
    reverse: { type: Boolean },
    disabled: { type: Boolean }
  },
  components: { Clean: C, Glassy: q }
}
const J = v('data-v-28c89fd0')
s('data-v-28c89fd0')
const K = { 'data-test': 'slot' }
n()
const M = J(function (e, t) {
  return (
    o(),
    d(
      m('' + e.skin),
      {
        'data-test': 'button',
        disabled: e.disabled,
        class: ['button', 'button--' + e.size, { 'button--reverse': e.reverse }]
      },
      {
        default: J(() => [
          e.icon ? (o(), d('i', { key: 0, 'data-test': 'icon', class: e.icon }, null, 2)) : y('', !0),
          c('span', K, [r(e.$slots, 'default')])
        ]),
        _: 1
      },
      8,
      ['disabled', 'class']
    )
  )
})
;(A.render = M), (A.__scopeId = 'data-v-28c89fd0')
const Q = (e) => {
  for (let t of Object.values(e)) 'value' in t || (t.value = ''), 'errors' in t || (t.errors = [])
  return e
}
var R = { props: ['id', 'input', 't'] }
const U = v('data-v-397f229e')
s('data-v-397f229e')
const V = { key: 0, class: 'field__detail' },
  W = { key: 0, class: 'field__errors' }
n()
const X = U(function (e, t) {
  return (
    o(),
    d(
      'div',
      { class: ['field', { 'field--disabled': e.input.disabled }] },
      [
        e.input.label
          ? (o(), d('label', { key: 0, class: 'field__label', for: e.id }, p(e.t(e.input.label)), 9, ['for']))
          : y('', !0),
        r(e.$slots, 'default'),
        e.input.detail ? (o(), d('div', V, p(e.input.detail), 1)) : y('', !0),
        e.input.errors.length
          ? (o(),
            d('ul', W, [
              (o(!0),
              d(
                u,
                null,
                i(e.input.errors, (t) => (o(), d('li', { key: t }, p(e.t(t)), 1))),
                128
              ))
            ]))
          : y('', !0)
      ],
      2
    )
  )
})
;(R.render = X), (R.__scopeId = 'data-v-397f229e')
var Y = {
  props: ['name', 'value', 'placeholder', 'disabled', 'readonly', 'errors', 't']
}
const Z = v('data-v-1e736226')
s('data-v-1e736226')
const ee = { class: 'input:text__wrapper' }
n()
const te = Z(function (e, t) {
  return (
    o(),
    d(
      'div',
      { class: ['input:text', { 'input:text--invalid': e.errors.length }] },
      [
        r(e.$slots, 'before'),
        c('div', ee, [
          c(
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
        r(e.$slots, 'after')
      ],
      2
    )
  )
})
;(Y.render = te), (Y.__scopeId = 'data-v-1e736226')
var ae = {
  props: ['name', 'value', 'placeholder', 'disabled', 'readonly', 'errors', 't'],
  data: () => ({ type: 'password' })
}
const le = v('data-v-f0d0dd64')
s('data-v-f0d0dd64')
const se = { class: 'input:text__wrapper' }
n()
const ne = le(function (e, t) {
  return (
    o(),
    d(
      'div',
      { class: ['input:text', { 'input:text--invalid': e.errors.length }] },
      [
        r(e.$slots, 'before'),
        c('div', se, [
          c(
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
          c(
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
        r(e.$slots, 'after')
      ],
      2
    )
  )
})
;(ae.render = ne), (ae.__scopeId = 'data-v-f0d0dd64')
var oe = {
  props: ['schema', 'locale'],
  components: { Field: R, InputText: Y, InputSelect: x, InputPassword: ae },
  setup(e, t) {
    const { t: a } = k(e.locale),
      { schema: s, data: n, validate: o } = ((e) => {
        const t = _(e),
          a = l(() =>
            Object.keys(t)
              .map((e) => ({ [e]: t[e].value || '' }))
              .reduce((e, t) => ({ ...e, ...t }))
          ),
          s = l(() =>
            Object.keys(t)
              .map((e) => ({ [e]: t[e].errors || [] }))
              .reduce((e, t) => ({ ...e, ...t }))
          )
        return {
          data: a,
          schema: t,
          errors: s,
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
      d = l(() => Object.entries(s))
    return {
      t: a,
      data: n,
      entries: d,
      onInputHandler: (e) => {
        const { name: t, value: a } = e.target,
          l = s[t]
        ;(l.value = a), (l.errors = []), l.events && l.events.onInput && l.events.onInput(e, s)
      },
      onSubmitHandler: async (e) => {
        e.preventDefault(), t.emit('submit', { ev: e, data: n.value })
        ;(await o()) && t.emit('success', { ev: e, data: n.value })
      }
    }
  }
}
const de = { class: 'form__grid' }
oe.render = function (e, t) {
  const a = f('Field')
  return (
    o(),
    d(
      'form',
      { onSubmit: t[2] || (t[2] = (t) => e.onSubmitHandler(t)), class: 'form' },
      [
        c('div', de, [
          (o(!0),
          d(
            u,
            null,
            i(
              e.entries,
              ([l, s]) => (
                o(),
                d(
                  a,
                  { key: s.name, input: s, id: l + 'Id', t: e.t },
                  {
                    default: h(() => [
                      (o(),
                      d(
                        m('input-' + s.type),
                        I(s, {
                          onInput: t[1] || (t[1] = (t) => e.onInputHandler(t)),
                          name: l,
                          t: e.t
                        }),
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
        r(e.$slots, 'default')
      ],
      32
    )
  )
}
export { oe as a, E as b, Q as c, A as s, k as u }
