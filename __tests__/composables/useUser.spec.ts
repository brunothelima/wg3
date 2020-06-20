import { nextTick } from 'vue'
import { useUser } from '../../src/composables/useUser'
import { User } from '../../src/types'

const mock: User = {
  id: 0,
  email: 'email@test.com',
  name: 'John Doe',
  jwt: 'JWTMOCK'
}

describe('useUser', () => {
  const { user } = useUser()

  it('Initializes the user ref store', () => {
    expect(user.value).toMatchObject({})
  })

  test('Stores user data on localStorage', async () => {
    user.value = mock
    await nextTick()

    const cache = JSON.parse(localStorage.getItem('wg3.user'))
    expect(cache).toStrictEqual(user.value)
  })
})
