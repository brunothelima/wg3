import { d as e, u as a, p as t, a as l, b as s, o as n, c as o, e as u, w as c } from './index.510f259e.js'
import { u as r } from './useI18n.8cec2910.js'
import { s as p } from './Select.93e6957d.js'
var v = e({
  components: { InputSelect: p },
  setup() {
    const { locale: e } = r(),
      { theme: t } = a()
    return { locale: e, theme: t }
  }
})
const m = c('data-v-359e8321')
t('data-v-359e8321')
const i = { class: 'settings' }
l()
const d = m(function (e, a) {
  const t = s('InputSelect')
  return (
    n(),
    o('div', i, [
      u(
        t,
        {
          name: 'theme',
          value: e.theme,
          onInput: a[1] || (a[1] = (a) => (e.theme = a.target.value)),
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
        t,
        {
          name: 'locale',
          value: e.locale,
          options: [
            { value: 'en', label: 'EN' },
            { value: 'pt', label: 'PT' }
          ],
          onInput: a[2] || (a[2] = (a) => (e.locale = a.target.value))
        },
        null,
        8,
        ['value']
      )
    ])
  )
})
;(v.render = d), (v.__scopeId = 'data-v-359e8321')
export { v as s }
