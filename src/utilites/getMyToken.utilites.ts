"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getMyToken(){
    const decodedToken = 
    (await cookies()).get(`next-auth.session-token`)?.value || 
    (await cookies()).get(`__Secure-next-auth.session-token`)?.value
    console.log("decooooode"+ decodedToken)
    const token= await decode({token:decodedToken ,secret:process.env.NEXTAUTH_SECRET!})
    console.log("tokkkkennn"+ token)
     return token?.token
}