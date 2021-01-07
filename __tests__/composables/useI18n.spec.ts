import { useI18n } from '@src/composables'
import { nextTick } from 'vue'

const mock = {
  en: { lang: 'English' },
  pt: { lang: 'Portugês' }
}

describe('@src/composables', () => {
  const { locale, t } = useI18n(mock)

  it('Initializes the locale ref', async () => {
    expect(locale.value).toBe('en')
  })

  test('Stores theme on localStorage', async () => {
    locale.value = 'pt'
    await nextTick()

    expect(document.documentElement.lang).toBe(locale.value)

    const cache = localStorage.getItem('wg3.locale')
    expect(cache).toBe(locale.value)
  })

  test('Successfully translates a given key string using t(key)', async () => {
    locale.value = 'en'
    expect(t('lang')).toBe('English')

    locale.value = 'pt'
    expect(t('lang')).toBe('Portugês')
  })

  test('Returns the given key if no match is found ', async () => {
    expect(t('wrongKey')).toBe('wrongKey')
  })
})
