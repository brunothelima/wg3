import { useTheme } from '/@src/composables/useTheme'
import { nextTick } from 'vue'

describe('/@src/composables/useTheme', () => {
  const { theme } = useTheme()

  it('Initializes the theme ref', async () => {
    expect(theme.value).toBe('light')
  })

  test('Stores theme on localStorage', async () => {
    theme.value = 'dark'
    await nextTick()

    const cache = localStorage.getItem('wg3.theme')
    expect(cache).toBe(theme.value)
  })
})
