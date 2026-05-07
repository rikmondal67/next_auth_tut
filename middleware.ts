import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";
import cookieVerifier from "./helper/cookieVerifier";

export async function middleware(req:NextRequest){
    
    if(req.nextUrl.pathname.startsWith('/dashboard')){
        
        const verifystatus:any= await cookieVerifier(req);
        console.log(verifystatus)
        if(verifystatus==false){
            return NextResponse.redirect(new URL('/signin',req.url));
        }

    }

    if(req.nextUrl.pathname.startsWith('/signin')){
        const verifystatus:any= await cookieVerifier(req);
        console.log(verifystatus)
        if(verifystatus==true){
            return NextResponse.redirect(new URL('/dashboard',req.url));
        }
    }
    
}


// export const config = {
//     matcher :'/dashboard'
// }