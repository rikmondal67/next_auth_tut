import mongoose  from "mongoose";

async function connectdb(){
    const dburl:string=(process.env.MONGODB_URI)||'';
    if(mongoose.connection.readyState >= 1){
        console.log('db connection already exsist');
        return;
    }
    try{
        console.log(dburl);
        mongoose.connect(dburl);
        console.log('connection to db sucessful');
        
    }catch(error){
        console.log('db connection failed');
        console.log(error);
    }
}

export default connectdb;