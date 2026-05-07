"use client"

import axios from "axios"
import { error } from "console";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";


export default function(){

    const router = useRouter();

    async function buttonhandler(){
        try{
            const res = await axios.post('/api/signout');
            console.log(res);
            if(res.data.status==true){
                toast.success('logout successful');

                router.push('/signin')
            }


        }catch(error){
            console.log('failed to logout request');
            console.log(error);
        }
    }


    return(
        <div>

        <div>welcome to dashboard</div>
        <button onClick={buttonhandler}>sign out</button>
        </div>
    )
}