"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

import toast,{Toaster} from "react-hot-toast";

function SigninForm({url}:any){

    const router = useRouter();


    const[formdata,setformdata]=useState({
        email:'',
        password:''
    });

    function textfieldHandler(event:any){
        setformdata((prevstate)=>{
            return{
                ...prevstate,
                [event.target.name]:event.target.value
            }
        })
        console.log(formdata);

        
    }

    async function submitdata(){
        try{
            const url = '/api/signin'


            const res = await axios.post(url,formdata);
            console.log(res);
            if(res.data.status==true){
                toast.success('signin sucessful');
                router.push('/dashboard')
            }
            


        }catch(err){
            console.log('failed to make axios request');
            console.log(err);

        }
    }


    return(
        <div>
            <input name="email" placeholder="email" onChange={textfieldHandler}></input>
            <input name="password" placeholder="your password" onChange={textfieldHandler}></input>
            <button onClick={submitdata}>submit</button>
            <button onClick={()=>{router.push('/signup')}}>sign up</button>
            
        </div>
    )
}

export default SigninForm;