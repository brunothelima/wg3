import { d as e, p as t, a, b as l, o, c as s, e as r, _ as p, w as d } from './index.510f259e.js'
import { u as n } from './useI18n.8cec2910.js'
import './Select.93e6957d.js'
import { c, s as i } from './index.4cc42362.js'
const m = c({
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
var u = {
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
  h = e({
    components: { Form: i },
    setup() {
      const { t: e } = n()
      return { t: e, schema: m, messages: u }
    }
  })
const f = d('data-v-0394d6fe')
t('data-v-0394d6fe')
const b = { class: 'inputs' },
  x = r('hr', null, null, -1)
a()
const v = f(function (e, t) {
  const a = l('Form')
  return (
    o(),
    s('section', b, [
      r('h1', null, p(e.t('title')), 1),
      x,
      r(a, { schema: e.schema, locale: e.messages }, null, 8, ['schema', 'locale'])
    ])
  )
})
let g = document.createElement('style')
;(g.innerHTML =
  'h1[data-v-0394d6fe]{color:var(--color-a-1)}.inputs .form[data-v-0394d6fe] .form__grid{display:grid;grid-template-columns:1fr 1fr;grid-gap:1em}@media screen and (max-width:1024px){.inputs .form[data-v-0394d6fe] .form__grid{display:block}}'),
  document.head.appendChild(g)
var w = (e) => {
  e.i18n = { en: { title: 'Form inputs' }, pt: { title: 'Formulário' } }
}
w(h), (h.render = v), (h.__scopeId = 'data-v-0394d6fe')
export default h
