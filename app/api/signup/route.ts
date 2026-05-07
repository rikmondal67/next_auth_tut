
import mongoose from "mongoose";
import { NextRequest,NextResponse } from "next/server";
import connectdb from "@/lib/dbconfig";
import { userSchema } from "@/models/userSchema";
import bcrypt from 'bcrypt'
import { hash } from "crypto";
import jwt from 'jsonwebtoken'



export async function POST(req:NextRequest){

    try{

        connectdb();
        const body= await req.json();
        // console.log('signup page')
        
        // console.log(body);

        const {email,password}=body;

        const preExsist =await userSchema.findOne({
            email:email
        })

        if(preExsist){

            return NextResponse.json({
                "status":true,
                "message":"user already exsisist"
            })
            
        }else{

            //creating hashed password.
            let hashedpassword=await bcrypt.hash(password,10);
            // console.log(hashedpassword);


            const token = jwt.sign({
                                email:'myemail',
                                password:'mypassword'
                            },'jwtsecret');

            

            

            const newuser =  new userSchema(
                {
                    email:email,
                    password:hashedpassword
                }
            )

            await newuser.save();


            
           
            
            const response = NextResponse.json({
                status:true,
                message:'signup done'
            });
            response.cookies.set('signin_cookie',token);
            
            return response;
            


            

            
        }

        


        }
        catch(error){
            return NextResponse.json({
                "status":false,
                "message":'failed to signup'
            })
        }
    }

