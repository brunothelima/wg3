import {
  d as e,
  p as s,
  e as t,
  o as a,
  c as l,
  F as n,
  f as i,
  w as o,
  a as u,
  _ as r,
  b as d,
  j as c
} from './index.7ac1f0e9.js'
var m = {
    numFailedTestSuites: 0,
    numFailedTests: 0,
    numPassedTestSuites: 6,
    numPassedTests: 22,
    numPendingTestSuites: 0,
    numPendingTests: 0,
    numRuntimeErrorTestSuites: 0,
    numTodoTests: 0,
    numTotalTestSuites: 6,
    numTotalTests: 22,
    openHandles: [],
    snapshot: {
      added: 0,
      didUpdate: !1,
      failure: !1,
      filesAdded: 0,
      filesRemoved: 0,
      filesRemovedList: [],
      filesUnmatched: 0,
      filesUpdated: 0,
      matched: 0,
      total: 0,
      unchecked: 0,
      uncheckedKeysByFile: [],
      unmatched: 0,
      updated: 0
    },
    startTime: 1592675754086,
    success: !0,
    testResults: [
      {
        assertionResults: [
          {
            ancestorTitles: ['useI18n'],
            failureMessages: [],
            fullName: 'useI18n Initializes the locale ref',
            location: null,
            status: 'passed',
            title: 'Initializes the locale ref'
          },
          {
            ancestorTitles: ['useI18n'],
            failureMessages: [],
            fullName: 'useI18n Stores theme on localStorage',
            location: null,
            status: 'passed',
            title: 'Stores theme on localStorage'
          },
          {
            ancestorTitles: ['useI18n'],
            failureMessages: [],
            fullName: 'useI18n Successfully translates a given key string using t(key)',
            location: null,
            status: 'passed',
            title: 'Successfully translates a given key string using t(key)'
          },
          {
            ancestorTitles: ['useI18n'],
            failureMessages: [],
            fullName: 'useI18n Returns the given key if no match is found ',
            location: null,
            status: 'passed',
            title: 'Returns the given key if no match is found '
          }
        ],
        endTime: 1592675756458,
        message: '',
        name: '/Applications/Ampps/www/wg3/__tests__/composables/useI18n.spec.ts',
        startTime: 1592675755386,
        status: 'passed',
        summary: ''
      },
      {
        assertionResults: [
          {
            ancestorTitles: ['useForm'],
            failureMessages: [],
            fullName: 'useForm Sets the required properties to the schema object',
            location: null,
            status: 'passed',
            title: 'Sets the required properties to the schema object'
          },
          {
            ancestorTitles: ['useForm'],
            failureMessages: [],
            fullName: 'useForm Computed "data" reacts to inputed value',
            location: null,
            status: 'passed',
            title: 'Computed "data" reacts to inputed value'
          },
          {
            ancestorTitles: ['useForm'],
            failureMessages: [],
            fullName: 'useForm validate() function handles properly the given validation methods',
            location: null,
            status: 'passed',
            title: 'validate() function handles properly the given validation methods'
          },
          {
            ancestorTitles: ['useForm'],
            failureMessages: [],
            fullName: 'useForm Computed "errors" reacts to the validate() function call',
            location: null,
            status: 'passed',
            title: 'Computed "errors" reacts to the validate() function call'
          }
        ],
        endTime: 1592675756559,
        message: '',
        name: '/Applications/Ampps/www/wg3/__tests__/composables/useForm.spec.ts',
        startTime: 1592675755356,
        status: 'passed',
        summary: ''
      },
      {
        assertionResults: [
          {
            ancestorTitles: ['useTheme'],
            failureMessages: [],
            fullName: 'useTheme Initializes the nofications ref store',
            location: null,
            status: 'passed',
            title: 'Initializes the nofications ref store'
          },
          {
            ancestorTitles: ['useTheme'],
            failureMessages: [],
            fullName: 'useTheme Adds a notification by funcion notify()',
            location: null,
            status: 'passed',
            title: 'Adds a notification by funcion notify()'
          },
          {
            ancestorTitles: ['useTheme'],
            failureMessages: [],
            fullName: 'useTheme Dismisses a message by funcion dismiss()',
            location: null,
            status: 'passed',
            title: 'Dismisses a message by funcion dismiss()'
          },
          {
            ancestorTitles: ['useTheme'],
            failureMessages: [],
            fullName: 'useTheme Dismisses a message after 6 seconds',
            location: null,
            status: 'passed',
            title: 'Dismisses a message after 6 seconds'
          }
        ],
        endTime: 1592675756680,
        message: '',
        name: '/Applications/Ampps/www/wg3/__tests__/composables/useNotifications.spec.ts',
        startTime: 1592675756484,
        status: 'passed',
        summary: ''
      },
      {
        assertionResults: [
          {
            ancestorTitles: ['useTheme'],
            failureMessages: [],
            fullName: 'useTheme Initializes the theme ref',
            location: null,
            status: 'passed',
            title: 'Initializes the theme ref'
          },
          {
            ancestorTitles: ['useTheme'],
            failureMessages: [],
            fullName: 'useTheme Stores theme on localStorage',
            location: null,
            status: 'passed',
            title: 'Stores theme on localStorage'
          }
        ],
        endTime: 1592675756808,
        message: '',
        name: '/Applications/Ampps/www/wg3/__tests__/composables/useTheme.spec.ts',
        startTime: 1592675756594,
        status: 'passed',
        summary: ''
      },
      {
        assertionResults: [
          {
            ancestorTitles: ['useUser'],
            failureMessages: [],
            fullName: 'useUser Initializes the user ref store',
            location: null,
            status: 'passed',
            title: 'Initializes the user ref store'
          },
          {
            ancestorTitles: ['useUser'],
            failureMessages: [],
            fullName: 'useUser Stores user data on localStorage',
            location: null,
            status: 'passed',
            title: 'Stores user data on localStorage'
          }
        ],
        endTime: 1592675756876,
        message: '',
        name: '/Applications/Ampps/www/wg3/__tests__/composables/useUser.spec.ts',
        startTime: 1592675756690,
        status: 'passed',
        summary: ''
      },
      {
        assertionResults: [
          {
            ancestorTitles: ['Button.spec.ts'],
            failureMessages: [],
            fullName: 'Button.spec.ts Rendering a button with default settings',
            location: null,
            status: 'passed',
            title: 'Rendering a button with default settings'
          },
          {
            ancestorTitles: ['Button.spec.ts'],
            failureMessages: [],
            fullName: 'Button.spec.ts Renders a flex reversed button content',
            location: null,
            status: 'passed',
            title: 'Renders a flex reversed button content'
          },
          {
            ancestorTitles: ['Button.spec.ts'],
            failureMessages: [],
            fullName: 'Button.spec.ts Renders a button with the default slot content',
            location: null,
            status: 'passed',
            title: 'Renders a button with the default slot content'
          },
          {
            ancestorTitles: ['Button.spec.ts'],
            failureMessages: [],
            fullName: 'Button.spec.ts Renders a button with a given icon',
            location: null,
            status: 'passed',
            title: 'Renders a button with a given icon'
          },
          {
            ancestorTitles: ['Button.spec.ts'],
            failureMessages: [],
            fullName: 'Button.spec.ts Renders a button with a given skin',
            location: null,
            status: 'passed',
            title: 'Renders a button with a given skin'
          },
          {
            ancestorTitles: ['Button.spec.ts'],
            failureMessages: [],
            fullName: 'Button.spec.ts Renders a button with a given size',
            location: null,
            status: 'passed',
            title: 'Renders a button with a given size'
          }
        ],
        endTime: 1592675760383,
        message: '',
        name: '/Applications/Ampps/www/wg3/__tests__/components/Button.spec.ts',
        startTime: 1592675755356,
        status: 'passed',
        summary: ''
      }
    ],
    wasInterrupted: !1
  },
  p = e({ setup: () => ({ tests: m }) })
const f = o('data-v-17709f26')
s('data-v-17709f26')
const h = { class: 'tests' },
  g = u('h1', null, 'WG3 TESTS', -1),
  T = u('hr', null, null, -1),
  v = { class: 'assertions' },
  w = u('span', null, [u('b', null, 'Assertions:')], -1),
  b = { key: 0, class: 'icon-thick-2px' },
  y = { key: 1, class: 'icon-close' },
  _ = { key: 0, class: 'errors' }
t()
const R = f(function (e, s) {
  return (
    a(),
    l('section', h, [
      g,
      (a(!0),
      l(
        n,
        null,
        i(
          e.tests.testResults,
          (e, s) => (
            a(),
            l('div', { key: 'test_' + s, class: 'test' }, [
              u('header', null, [
                u('p', null, [u('b', null, 'Test: ' + r(e.name.split('/').pop()), 1)]),
                u('span', { class: e.status }, 'Status: ' + r(e.status), 3)
              ]),
              T,
              u('div', v, [
                w,
                (a(!0),
                l(
                  n,
                  null,
                  i(
                    e.assertionResults,
                    (e, s) => (
                      a(),
                      l('div', { key: 'asertion_' + s, class: 'assertion' }, [
                        u('span', null, [
                          'passed' === e.status ? (a(), l('i', b)) : (a(), l('i', y)),
                          d(' Test: ' + r(e.title), 1)
                        ]),
                        e.failureMessages.length
                          ? (a(),
                            l('div', _, [
                              (a(!0),
                              l(
                                n,
                                null,
                                i(
                                  e.failureMessages,
                                  (e, s) => (a(), l('div', { key: 'asertion_' + s }, [u('pre', null, r(e), 1)]))
                                ),
                                128
                              ))
                            ]))
                          : c('', !0)
                      ])
                    )
                  ),
                  128
                ))
              ])
            ])
          )
        ),
        128
      ))
    ])
  )
})
let M = document.createElement('style')
;(M.innerHTML =
  '.tests[data-v-17709f26]{overflow:visible;max-width:1024px;margin:auto;padding:10vh 2em}.test[data-v-17709f26]{margin-bottom:5vh;padding:2em;box-shadow:var(--box-shadow-light);border-radius:var(--input-border-radius);border:var(--input-border-width) var(--input-border-style) var(--color-a-1)}.assertion .icon-close[data-v-17709f26],.test header span.failed[data-v-17709f26]{color:var(--color-error)}.assertion .icon-thick-2px[data-v-17709f26],.test header span.passed[data-v-17709f26]{color:var(--color-success)}.test hr[data-v-17709f26]{margin:1em 0 2em}.test header p[data-v-17709f26]{margin:0 0 .5em}.assertion[data-v-17709f26]{margin-top:1em}.assertion>span[data-v-17709f26]{display:flex;align-items:center}.assertion i[data-v-17709f26]{margin-right:.5em}.errors[data-v-17709f26]{margin-bottom:2em}.errors pre[data-v-17709f26]{overflow:auto;padding:1em;margin:1em 0;border:1px solid red;line-height:150%}'),
  document.head.appendChild(M),
  (p.render = R),
  (p.__scopeId = 'data-v-17709f26')
export default p
