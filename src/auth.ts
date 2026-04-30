import NextAuth from 'next-auth'
import authConfig from './configs/auth.config'

const {} = NextAuth({
  ...authConfig,
})
