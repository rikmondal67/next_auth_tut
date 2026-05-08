import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { NextRequest,NextResponse } from "next/server";
import connectdb from '@/lib/dbconfig'
import { cookies } from "next/headers";
import { userSchema } from "@/models/userSchema";
import bcrypt from 'bcrypt'

export async function POST(req:NextRequest){



    try{
        connectdb();
            const body= await req.json();
            // const{email,password}=body;
            
            const user =await userSchema.findOne({
                email:body.email

    })

    if(user){
        const {email,password}:any = user;
        

        const signResult=await bcrypt.compare(body.password,password);

        if(signResult){
            // console.log('password mached')

    //generate token


            const token = jwt.sign({
                    email:'myemail',
                    password:'mypassword'
                },'jwtsecret');
            
            // console.log(token);
            
            //next cookies
        

            const response= NextResponse.json({
                status:true,
                msg:'signed in'
            });
            
            response.cookies.set('signin_cookie',token);

            return response;
                }
        else{
            // console.log('password not matched')
            return NextResponse.json({
            status:false,
            msg:'password incorrect'
        })
        }
    }

    else{

        // console.log('user not found')
        return NextResponse.json({
            status:false,
            msg:'user not found'
        })
    }
        


    }
    
    catch(error){
        // console.log('sign in failed')
        return NextResponse.json({
            status:false,
            msg:'db failed'
        })
    }

    
}

