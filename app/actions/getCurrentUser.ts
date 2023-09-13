import { getServerSession } from "next-auth";

import { authOptions } from "../pages/api/auth/[...nextauth]/routes";
import primsa from "@/app/libs/prismadb"

export async function getSession() {
    return await getServerSession(authOptions);
    
}

export default async function getCurrentUser() {
    try{
        const session= await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentUser = await primsa.user.findUnique({
            where:{
                email: session.user.email as string
            }
        });

        if (!currentUser){
            return null;
        }
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt:currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailverified?.toISOString || null
        };

    }catch (error:any){
        return null;
    }
    
}