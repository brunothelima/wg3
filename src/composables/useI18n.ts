import { getCurrentInstance, ref, watch } from 'vue'
import { WgMessages } from '/@src/types/i18n'

// Initializing locale ref with cached language or default
const cache = localStorage.getItem('wg3.locale') as 'pt' | 'en' || 'en'
const locale = ref<'pt' | 'en'>(cache )

// Resets cache with new locale value
// Updates the html tag "lang" attr
watch(locale, (payload: string) => {
  localStorage.setItem('wg3.locale', payload)
  document.documentElement.lang = locale.value
})

// Setting the initial value for the html tag "lang" attr
document.documentElement.lang = locale.value

/**
 * Translation composable, exports a translator function
 * from a given resource(json) or i18n custom block
 */
export const useI18n = (messages: WgMessages = {}) => {
  const instance = getCurrentInstance()
  // Extrancting messages from the i18n custom block
  if (instance && 'i18n' in instance.type) {
    messages = instance.type.i18n
  }

  /**
   * Querys through the messages json for a given path.
   * Returns the key value if it is found or the given path on fail
   */
  const t = (path: string = '') => {
    const resource = messages[locale.value] || self
    const reducer = (prev: any, curr: string) => (prev ? prev[curr] : '')
    return path.split('.').reduce(reducer, resource) || path
  }

  return {
    locale,
    t
  }
}
