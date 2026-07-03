import mongoose from "mongoose";

export const thyconny=async(thycache:typeof mongoose|null)=>{
    if(thycache){
        return thycache
    }
    else{
        const thydatab=await mongoose.connect("mongodb://alesandro1:JsIEpzWnvdiwNEgJ@ac-ppjwoqd-shard-00-00.pjfjxpf.mongodb.net:27017,ac-ppjwoqd-shard-00-01.pjfjxpf.mongodb.net:27017,ac-ppjwoqd-shard-00-02.pjfjxpf.mongodb.net:27017/?ssl=true&replicaSet=atlas-e2inq3-shard-0&authSource=admin&appName=Cluster0")
        thycache=thydatab
        return thycache
    }
}