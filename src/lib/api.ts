import { useUser } from '../composables/useUser'

export const get = async ({ path, query }: { path: string; query: any }) => {
  const { user } = useUser()

  const url = new URL(`${process.env.VUE_APP_API_URL}/${path}`)

  for (let key in query) {
    url.searchParams.append(key, query[key])
  }

  const request = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.value.jwt}`
    }
  })

  return request.json()
}

export const post = async (path: string, body: any) => {
  const { user } = useUser()

  const request = await fetch(`${process.env.VUE_APP_API_URL}/${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${user.value.jwt || undefined}`
    }
  })

  return request.json()
}

export default {
  get,
  post
}
