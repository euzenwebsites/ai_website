import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:"147027649761-76uld5m14vh1ij57bn3jrh6hk3o1mem9.apps.googleusercontent.com",
      // clientId: process.env.GOOGLE_CLIENT_ID,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET
      clientSecret:"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"
    })
  ],
  /* pages: {  
    logIn: '/login',
    signUp: '/signup'
  } */
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }