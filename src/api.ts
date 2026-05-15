import authConfig from '@/configs/auth.config'
import { authHandler, initAuthConfig } from '@hono/auth-js'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'

const api = new Hono().basePath('/api')
api.use('*', logger())
api.use('*', cors())
api.use(
  '*',
  initAuthConfig(() => ({
    basePath: '/api/auth',
    ...authConfig,
  })),
)
api.use('/auth/*', authHandler())

export default handle(api)
