import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "Enter email address"},
                password: {label: "password", type: "password"}
            },
            authorize: async (credentials) => {
                // Add your authentication logic here
                // Check if the credentials are valid
                // Return true if valid, or false otherwise
                return Promise.resolve(true);
            }, 
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
    ],
    pages: {
        signIn: '/auth/signin'
    }
}

export default NextAuth(authOptions)