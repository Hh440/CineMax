import { BACKEND_URL } from "@/config";
import NextAuth ,{AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"


export const authOptions :AuthOptions ={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID   as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        }),

        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{label:'email' , type:'text'},
                password:{label:'password' ,type:'password'},

            },

            async authorize(credentials){
                if(!credentials?.email || !credentials?.password ){
                    throw new Error('Invalid Credentials')
                }

                const res = await fetch(`${BACKEND_URL}/api/auth/credentials`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials)
                });

                const user = await res.json();

                if (!res.ok || !user) {
                    throw new Error('Invalid Credentials');
                }

                return user;
            }

        })
    ],
    debug:process.env.NODE_ENV === 'development',
    session:{
        strategy:'jwt'
    },
    secret:process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export {handler as GET ,handler as POST}