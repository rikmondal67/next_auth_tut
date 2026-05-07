import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import * as jose from 'jose'
import { cookies } from "next/headers";

export default async function cookieVerifier(req:NextRequest){
    const signCookie = await req.cookies.get('signin_cookie');
    console.log(signCookie)
    if(signCookie){

        try{
            const token=signCookie.value;
            console.log(token);
            // await jwt.verify(token,'jwtsecret');
            const secret = new TextEncoder().encode("jwtsecret");
            
            await jose.jwtVerify(token,secret);
            return true;
        }catch(error){
            console.log('cookie sign failed');
            console.log(error)
            return false;
        }
    }
    else{
        console.log('no cookie found')
        return false;
    }
}

