import { ref, watch } from 'vue'
import { User } from '../types'

// Initializing user ref with cached user data
const cache = localStorage.getItem('wg3.user') || '{}'
const user = ref(JSON.parse(cache) as User)

// Resets cache with new user value
watch(user, (payload: User) => {
  localStorage.setItem('wg3.user', JSON.stringify(payload))
})

export const useUser = () => {
  return {
    user
  }
}
