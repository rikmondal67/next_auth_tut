import { create } from "zustand";

const signInData={
    email:'',
    password:''
}

export const signInstore = create((set)=>({
    signInData,
    updateSignInData:(newvalue:any)=>set((state:any)=>({signInData:newvalue}))
}))

