import {
  g as e,
  h as t,
  d as a,
  p as r,
  a as s,
  o as n,
  c as l,
  _ as d,
  i as o,
  j as i,
  F as u,
  k as p,
  w as c,
  e as v,
  b as m,
  l as f,
  m as b,
  n as y
} from './index.510f259e.js'
import { u as h } from './useI18n.8cec2910.js'
import { s as _ } from './Select.93e6957d.js'
const I = (e) => {
  for (let t of Object.values(e)) 'value' in t || (t.value = ''), 'errors' in t || (t.errors = [])
  return e
}
var g = a({ props: { id: String, input: Object, t: { type: Function, default: (e) => e } } })
const x = c('data-v-585b541a')
r('data-v-585b541a')
const S = { key: 0, 'data-test': 'detail', class: 'field__detail' },
  j = { key: 0, 'data-test': 'errors', class: 'field__errors' }
s()
const k = x(function (e, t) {
  return (
    n(),
    l(
      'div',
      { 'data-test': 'field', class: ['field', { 'field--disabled': !!e.input.disabled }] },
      [
        e.input.label
          ? (n(),
            l('label', { key: 0, 'data-test': 'label', class: 'field__label', for: e.id }, d(e.t(e.input.label)), 9, [
              'for'
            ]))
          : o('', !0),
        i(e.$slots, 'default'),
        e.input.detail ? (n(), l('div', S, d((e.t && e.t(e.input.detail)) || e.input.detail), 1)) : o('', !0),
        e.input.errors && e.input.errors.length
          ? (n(),
            l('ul', j, [
              (n(!0),
              l(
                u,
                null,
                p(e.input.errors, (t) => (n(), l('li', { key: t }, d(e.t(t)), 1))),
                128
              ))
            ]))
          : o('', !0)
      ],
      2
    )
  )
})
;(g.render = k), (g.__scopeId = 'data-v-585b541a')
var w = a({
  props: {
    name: String,
    errors: Array,
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    value: [String, Number],
    t: { type: Function, default: (e) => e }
  }
})
const F = c('data-v-704059a1')
r('data-v-704059a1')
const O = { class: 'input:text__wrapper' }
s()
const $ = F(function (e, t) {
  return (
    n(),
    l(
      'div',
      { 'data-test': 'input', class: ['input:text', { 'input:text--invalid': e.errors && e.errors.length }] },
      [
        i(e.$slots, 'before'),
        v('div', O, [
          v(
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
        i(e.$slots, 'after')
      ],
      2
    )
  )
})
;(w.render = $), (w.__scopeId = 'data-v-704059a1')
var B = {
  props: {
    name: String,
    errors: Array,
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    value: [String, Number],
    t: { type: Function, default: (e) => e }
  },
  data: () => ({ type: 'password' })
}
const H = c('data-v-54d0e4fa')
r('data-v-54d0e4fa')
const A = { class: 'input:text__wrapper' }
s()
const N = H(function (e, t) {
  return (
    n(),
    l(
      'div',
      { 'data-test': 'input', class: ['input:text', { 'input:password--invalid': e.errors && e.errors.length }] },
      [
        i(e.$slots, 'before'),
        v('div', A, [
          v(
            'input',
            {
              class: 'input-text',
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
          v(
            'i',
            {
              'data-test': 'icon',
              color: 'a',
              class: 'icon-eye' + ('text' === e.type ? '-closed' : ''),
              onClick: t[1] || (t[1] = (t) => (e.type = 'text' === e.type ? 'password' : 'text'))
            },
            null,
            2
          )
        ]),
        i(e.$slots, 'after')
      ],
      2
    )
  )
})
;(B.render = N), (B.__scopeId = 'data-v-54d0e4fa')
var C = a({
  props: ['schema', 'locale'],
  components: { Field: g, InputText: w, InputSelect: _, InputPassword: B },
  setup(a, r) {
    const { t: s } = h(a.locale),
      { schema: n, data: l, validate: d } = ((a) => {
        const r = e(a),
          s = t(() =>
            Object.keys(r)
              .map((e) => ({ [e]: r[e].value || '' }))
              .reduce((e, t) => ({ ...e, ...t }))
          ),
          n = t(() =>
            Object.keys(r)
              .map((e) => ({ [e]: r[e].errors || [] }))
              .reduce((e, t) => ({ ...e, ...t }))
          )
        return {
          data: s,
          schema: r,
          errors: n,
          validate: async () => {
            for (let e in r) {
              let t = r[e],
                { value: a, validations: s } = t
              t.errors = []
              for (let e in s) {
                let { handler: r, message: n } = s[e]
                ;(await r(a)) && t.errors.push(n)
              }
            }
            return !Object.values(r).some(({ errors: e }) => (null == e ? void 0 : e.length))
          }
        }
      })(a.schema),
      o = t(() => Object.entries(n))
    return {
      t: s,
      data: l,
      entries: o,
      onInputHandler: (e) => {
        const { name: t, value: a } = e.target,
          s = n[t]
        ;(s.value = a),
          (s.errors = []),
          s.events && s.events.onInput && (s.events.onInput({ ev: e, schema: n }), r.emit('callback', 'onInput')),
          r.emit('input', { ev: e, value: a })
      },
      onSubmitHandler: async (e) => {
        e.preventDefault(), r.emit('submit', { ev: e, data: l.value })
        ;(await d()) ? r.emit('success', { ev: e, data: l.value }) : r.emit('error', { ev: e, data: l.value })
      }
    }
  }
})
const D = { class: 'form__grid' }
C.render = function (e, t) {
  const a = m('Field')
  return (
    n(),
    l(
      'form',
      { 'data-test': 'form', onSubmit: t[2] || (t[2] = (t) => e.onSubmitHandler(t)), class: 'form' },
      [
        v('div', D, [
          (n(!0),
          l(
            u,
            null,
            p(
              e.entries,
              ([r, s]) => (
                n(),
                l(
                  a,
                  { key: r, input: s, id: r + 'Id', t: e.t },
                  {
                    default: f(() => [
                      (n(),
                      l(
                        b('input-' + s.type),
                        y(s, { onInput: t[1] || (t[1] = (t) => e.onInputHandler(t)), name: r, t: e.t }),
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
        i(e.$slots, 'default')
      ],
      32
    )
  )
}
export { I as c, C as s }
