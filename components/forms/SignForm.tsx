import axios from "axios";
import { useState } from "react"

function SignForm({url}:any){



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


            await axios.post(url,formdata);
            


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
        </div>
    )
}

export default SignForm;