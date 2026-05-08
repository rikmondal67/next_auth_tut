import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server';


export async function POST(req:NextRequest){

    try{

                    const token = jwt.sign({
                                        email:'myemail',
                                        password:'mypassword'
                                    },'jwtsecret',{
                                        expiresIn:'0s'
                                    });
        

        const response = NextResponse.json({
            status:true,
            message:'logout done'
        });
        response.cookies.set('signin_cookie',token);
        return response
    }catch(error){


        //  console.log('logout failed');
        // console.log(error);
        
            return NextResponse.json({
            status:false,
            message:'logout failed'
        });

       
    }
}