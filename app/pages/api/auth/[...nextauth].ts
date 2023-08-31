import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import  GooogleProvider  from "next-auth/providers/google";


import prisma from "@/app/libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import { type } from "os";

export const authOptions : AuthOptions = {
    adapter : PrismaAdapter (prisma),
    providers :[
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,

        }),
        GooogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label:'email' ,type:'text'},
                password:{label:'password', type:'password'},
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password)
                throw new Error('Invalid credentials');
            }

            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            });
            
            if (!user || !user?.hashedpassword){

            }
                
            

        })

    ]
} 