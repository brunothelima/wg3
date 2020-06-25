import { nextTick } from 'vue'
import { useUser } from '/@composables/useUser'
import { User } from '/@types/user'

const mock: User = {
  id: 0,
  email: 'email@test.com',
  name: 'John Doe',
  jwt: 'JWTMOCK'
}

describe('/@composables/useUser', () => {
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
