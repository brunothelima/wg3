import { getCurrentInstance, ref, watch } from 'vue'

// Initializing locale ref with cached language or default
const cache = sessionStorage.getItem('wg3.locale') as I18nLocales || 'en'
const locale = ref(cache)

// Updates the locale cache value and the document lang attr
watch(locale, (language: I18nLocales) => {
  sessionStorage.setItem('wg3.locale', language)
  document.documentElement.lang = locale.value
})

/**
 * This composable will recieve a I18nMessages object/json,
 * and export a translator (t) function for any given path
 * that matches the messages
 */
export const useI18n = (messages: I18nMessages = {}) => {
  const component = getCurrentInstance()
  
  // Extrancting messages from the i18n custom block
  if (component && ('i18n' in component.type)) {
    messages = component.type.i18n
  }

  /**
   * This function querys through the i18nMessages and returns
   * the matched key value from a given path string. If no key is matched, 
   * it will return the path string as the query result
   
   * for example:
   * 
   * locale.value = 'en'
   * 
   * messages = {
   *   "en": { "hello":"hello": "Hello there!"  }
   *   "pt": { "hello": "Ei, você aí!" }
   * }
   * 
   * const { t } = useI18n(messages)
   * 
   * t('hello') // Hello there!
   * t('path.that.dont.exists') // path.that.dont.exists
   * 
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
