import { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
//
const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [Google],
} satisfies NextAuthConfig

export default authConfig
