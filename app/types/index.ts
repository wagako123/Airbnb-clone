import { User } from "@prisma/client";

export type SafeUser = Omit<
    User, 
    "createdAt" | "updatedAt" | "emailVerified"
    > &{
        createdAt:string;
        updatedAt:string;
        emailVerfified: string| null;
    }