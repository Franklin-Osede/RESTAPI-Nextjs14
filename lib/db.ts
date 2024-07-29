import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

const connect = async ()=>{
    const connectionState = mongoose.connection.readyState;

    if(connectionState===1){
        console.log("Already Connected");
        return;
    }

    if(connectionState === 2){
        console.log("Connecting");
        return;
    }

    try{
      mongoose.connect(MONGODB_URI!,{
        dbName: "next14mongodbrestapi",
        bufferCommands:true,
      })  
    console.log("Connected");
    }catch (err:any){
     console.log("Error:", err);
     throw new Error ("Error:",err)
    }
}

export default connect;