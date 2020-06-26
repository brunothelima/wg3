import {
  v as t,
  x as o,
  p as a,
  a as e,
  o as n,
  c as i,
  e as r,
  j as s,
  T as d,
  w as l,
  _ as c,
  i as f,
  d as u,
  b as m,
  f as g,
  y as v
} from './index.510f259e.js'
import { u as h } from './useI18n.8cec2910.js'
import { s as b } from './index.e97e96a4.js'
var p = {
  setup() {
    t(() => {
      document.body.classList.add('scroll-lock')
    }),
      o(() => {
        document.body.classList.remove('scroll-lock')
      })
  }
}
const x = l('data-v-00626922')
a('data-v-00626922')
const y = { class: 'dialog' },
  w = r('div', { class: 'dialog__mask' }, null, -1),
  k = { class: 'dialog__content' }
e()
const _ = x(function (t, o) {
  return n(), i(d, { to: '#portal\\:dialog' }, [r('div', y, [w, r('div', k, [s(t.$slots, 'default')])])])
})
let B = document.createElement('style')
;(B.innerHTML =
  '.dialog[data-v-00626922]{display:grid;overflow:auto;position:fixed;z-index:9;width:100%;height:100%;padding:0 2em;box-sizing:border-box}.dialog__mask[data-v-00626922]{z-index:1;grid-row:1/2;grid-column:1/2;background:var(--color-x-11);opacity:.6}.dialog__content[data-v-00626922]{position:relative;grid-row:1/2;grid-column:1/2;align-self:center;z-index:2;margin:2em auto}.dialog__content>[class*=\'dialog:\'][data-v-00626922]{opacity:0;animation-name:fade-in-data-v-00626922;animation-duration:var(--transition-duration);animation-delay:var(--transition-duration);animation-timing-function:var(--transition-timing-function);animation-fill-mode:forwards}@keyframes fade-in-data-v-00626922{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.dialog\\:confirmation[data-v-efa4e21c]{display:flex;flex-flow:column;overflow:hidden;width:100%;max-width:512px;background-color:var(--color-x-11);border-radius:var(--card-border-radius);border:var(--card-border-width) var(--card-border-style) var(--color-x-8)}main[data-v-efa4e21c]{display:flex;flex-flow:column;justify-content:center;align-items:center;padding:1em 3em;min-height:230px;text-align:center}@media screen and (max-width:1024px){.dialog\\:confirmation[data-v-efa4e21c]{height:100%}main[data-v-efa4e21c]{flex:1}}main p[data-v-efa4e21c]{margin-bottom:.5em;font-size:var(--font-size-xxl);font-weight:700}main span[data-v-efa4e21c]{color:var(--color-x-6);font-size:var(--font-size);line-height:180%}main i[data-v-efa4e21c]{margin-bottom:1rem;font-size:40px}header[data-v-efa4e21c]{display:flex;padding:1.5em;align-items:center;background-color:var(--color-x-10);color:var(--color-x-6)}header span[data-v-efa4e21c]{display:flex;align-items:center;cursor:pointer}header i[data-v-efa4e21c]{margin-right:.5em}footer[data-v-efa4e21c]{display:flex;border-top:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[data-v-efa4e21c]{flex:1;padding:1.313em;background-color:transparent;border:none;color:var(--color-x-6);font-size:var(--font-size-xl);outline:0;cursor:pointer}footer button[data-v-efa4e21c]:hover{background-color:var(--color-x-10)}footer button+button[data-v-efa4e21c]{color:var(--color-error);border-left:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[style*="color:"][data-v-efa4e21c]{font-weight:700}h1[data-v-77a8f48e]{color:var(--color-a-1)}.button[data-v-77a8f48e]{margin-bottom:2em}.notification-demo[data-v-69b5e229]{display:flex;flex-wrap:wrap;margin-bottom:2em}.button[data-v-69b5e229]{margin-bottom:1em;margin-right:1em}h1[data-v-32d6d37b]{color:var(--color-a-1)}.actions[data-v-32d6d37b]{display:flex;margin-bottom:2em}.actions .button[data-v-32d6d37b]{margin-right:1em}'),
  document.head.appendChild(B),
  (p.render = _),
  (p.__scopeId = 'data-v-00626922')
var C = {
  props: ['status', 'header', 'icon', 'title', 'text', 'buttonLeft', 'buttonRight'],
  setup(a, e) {
    const n = (t) => {
      'Escape' === t.key && e.emit('cancel', t)
    }
    return (
      t(() => {
        window.addEventListener('keyup', n)
      }),
      o(() => {
        window.removeEventListener('keyup', n)
      }),
      {}
    )
  }
}
const L = l('data-v-efa4e21c')
a('data-v-efa4e21c')
const D = { class: 'dialog:confirmation' },
  z = { key: 0 },
  R = r('i', { class: 'icon-arrow-left' }, null, -1),
  E = { key: 0 },
  I = { key: 0 }
e()
const M = L(function (t, o) {
  return (
    n(),
    i('div', D, [
      t.header
        ? (n(),
          i('header', z, [
            r('span', { onClick: o[1] || (o[1] = (o) => t.$emit('cancel')) }, [R, r('span', null, c(t.header), 1)])
          ]))
        : f('', !0),
      r('main', null, [
        t.icon ? (n(), i('i', { key: 0, class: ['big', t.icon], color: 'a' }, null, 2)) : f('', !0),
        t.title ? (n(), i('p', E, c(t.title), 1)) : f('', !0),
        t.text ? (n(), i('span', I, c(t.text), 1)) : f('', !0)
      ]),
      r('footer', null, [
        t.buttonLeft
          ? (n(),
            i('button', { key: 0, onClick: o[2] || (o[2] = (o) => t.$emit('leftButtonClick')) }, c(t.buttonLeft), 1))
          : f('', !0),
        t.buttonRight
          ? (n(),
            i('button', { key: 0, onClick: o[3] || (o[3] = (o) => t.$emit('rightButtonClick')) }, c(t.buttonRight), 1))
          : f('', !0)
      ])
    ])
  )
})
;(C.render = M), (C.__scopeId = 'data-v-efa4e21c')
var N = u({ data: () => ({ showDialog: !1 }), components: { Dialog: p, Button: b, Confirmation: C }, setup: () => h() })
const j = l('data-v-77a8f48e')
a('data-v-77a8f48e')
const A = { class: 'confirmation-demo' }
e()
const $ = j(function (t, o) {
  const a = m('Button'),
    e = m('Confirmation'),
    s = m('Dialog')
  return (
    n(),
    i('div', A, [
      r('h6', null, c(t.t('heading')), 1),
      r(
        a,
        { model: 'glassy', icon: 'icon-thick-2px', reverse: !0, onClick: o[1] || (o[1] = (o) => (t.showDialog = !0)) },
        { default: j(() => [g(c(t.t('dialogButton')), 1)]), _: 1 }
      ),
      r(
        e,
        {
          icon: 'icon-trash-bin-small',
          header: t.t('dialog.header'),
          title: t.t('dialog.title'),
          text: t.t('dialog.text'),
          buttonLeft: t.t('dialog.buttonLeft'),
          buttonRight: t.t('dialog.buttonRight')
        },
        null,
        8,
        ['header', 'title', 'text', 'buttonLeft', 'buttonRight']
      ),
      t.showDialog
        ? r(
            s,
            { key: 0 },
            {
              default: j(() => [
                r(
                  e,
                  {
                    onCancel: o[2] || (o[2] = (o) => (t.showDialog = !1)),
                    icon: 'icon-trash-bin-small',
                    header: t.t('dialog.header'),
                    title: t.t('dialog.title'),
                    text: t.t('dialog.text'),
                    buttonLeft: t.t('dialog.buttonLeft'),
                    onLeftButtonClick: o[3] || (o[3] = (o) => (t.showDialog = !1)),
                    buttonRight: t.t('dialog.buttonRight'),
                    onRightButtonClick: o[4] || (o[4] = (o) => (t.showDialog = !1))
                  },
                  null,
                  8,
                  ['header', 'title', 'text', 'buttonLeft', 'buttonRight']
                )
              ]),
              _: 1
            }
          )
        : f('', !0)
    ])
  )
})
var T = (t) => {
  t.i18n = {
    en: {
      heading: 'Confirmation',
      dialogButton: 'Ask for confirmation',
      dialog: {
        header: 'Confirmation',
        title: 'Are you sure you want to delete this post?',
        text: 'Deleting this post will remove it from all the pages and widgets. This action can not be undone.',
        buttonLeft: 'Cancel',
        buttonRight: 'Delete'
      }
    },
    pt: {
      heading: 'Confirmação',
      dialogButton: 'Modal de confirmação',
      dialog: {
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
T(N), (N.render = $), (N.__scopeId = 'data-v-77a8f48e')
var q = u({
  components: { Button: b },
  setup() {
    const { t: t } = h(),
      { notify: o } = v()
    return { t: t, notify: o }
  }
})
const S = l('data-v-69b5e229')
a('data-v-69b5e229')
const H = { class: 'notification-demo' }
e()
const V = S(function (t, o) {
  const a = m('Button')
  return (
    n(),
    i('div', H, [
      r(
        a,
        {
          model: 'glassy',
          icon: 'icon-info',
          reverse: !0,
          onClick: o[1] || (o[1] = (o) => t.notify({ message: t.t('message') }))
        },
        { default: S(() => [g(c(t.t('infoButton')), 1)]), _: 1 }
      ),
      r(
        a,
        {
          model: 'glassy',
          icon: 'icon-exclamation-mark',
          reverse: !0,
          onClick: o[2] || (o[2] = (o) => t.notify({ message: t.t('message'), status: 'warning' }))
        },
        { default: S(() => [g(c(t.t('warningButton')), 1)]), _: 1 }
      ),
      r(
        a,
        {
          model: 'glassy',
          icon: 'icon-close',
          reverse: !0,
          onClick: o[3] || (o[3] = (o) => t.notify({ message: t.t('message'), status: 'error' }))
        },
        { default: S(() => [g(c(t.t('errorButton')), 1)]), _: 1 }
      ),
      r(
        a,
        {
          model: 'glassy',
          icon: 'icon-thick-2px',
          reverse: !0,
          onClick: o[4] || (o[4] = (o) => t.notify({ message: t.t('message'), status: 'success' }))
        },
        { default: S(() => [g(c(t.t('successButton')), 1)]), _: 1 }
      )
    ])
  )
})
var W = (t) => {
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
W(q), (q.render = V), (q.__scopeId = 'data-v-69b5e229')
var F = u({ components: { ConfirmationDemo: N, NotificationsDemo: q }, setup: () => h() })
const G = l('data-v-32d6d37b')
a('data-v-32d6d37b')
const J = { class: 'dialogs' },
  K = r('hr', null, null, -1)
e()
const O = G(function (t, o) {
  const a = m('NotificationsDemo'),
    e = m('ConfirmationDemo')
  return n(), i('section', J, [r('h1', null, c(t.t('heading')), 1), K, r(a), r(e)])
})
var P = (t) => {
  t.i18n = {
    en: {
      heading: 'Dialogs and notifications',
      notificationButton: 'Notefy me!',
      notificationMessage: 'Notification message'
    },
    pt: {
      heading: 'Alertas e notificações',
      notificationButton: 'Notificação',
      notificationMessage: 'Mensagem de notificação'
    }
  }
}
P(F), (F.render = O), (F.__scopeId = 'data-v-32d6d37b')
export default F
