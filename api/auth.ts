import { Context } from 'https://deno.land/x/oak/mod.ts'
import { validateJwt } from 'https://deno.land/x/djwt/validate.ts'
import { makeJwt, setExpiration, Jose, Payload } from 'https://deno.land/x/djwt/create.ts'
import client from './client.ts'

// JWT params
const key = '135791113'
const header: Jose = {
  alg: 'HS256',
  typ: 'JWT'
}

// User authentication endpoint
export const login = async ({ request, response }: Context) => {
  // Authentication data
  const { value } = await request.body()
  const { email, password } = JSON.parse(value)

  // MSQL query for the matching user
  const result = await client.query(
    `
      SELECT ??, ??, ?? FROM users 
        WHERE email = ? AND password = md5(?) 
        LIMIT 1
    `,
    ['id', 'name', 'email', email, password]
  )

  // User match success
  for (const user of result) {
    // JWT payload
    const payload: Payload = {
      iss: user.email,
      exp: setExpiration(new Date().getTime() + 60000)
    }

    // JWT Creation
    const jwt = makeJwt({ key, header, payload })

    if (jwt) {
      response.status = 200
      response.body = {
        message: 'User found',
        data: { ...user, jwt }
      }
      return
    }
    response.status = 500
    response.body = {
      message: 'Internal server error'
    }
    return
  }

  response.status = 401
  response.body = {
    message: 'Invalid username or password'
  }
}

export const middleware = async ({ request, response }: Context, next: any) => {
  const headers: Headers = request.headers

  const authorization = headers.get('Authorization')
  if (!authorization) {
    response.status = 401
    return
  }
  const jwt = authorization.split(' ')[1]
  if (!jwt) {
    response.status = 401
    return
  }
  if (await validateJwt(jwt, key, { isThrowing: false })) {
    await next()
    return
  }

  response.status = 401
  response.body = { message: 'Invalid jwt token' }
}
