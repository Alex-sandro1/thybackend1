import express from 'express'
import {thyref} from '../thyref'
import {countilize} from '../countilise'
import mongoose, { Schema } from 'mongoose'
import {thystatus} from '../thyschema'
import {thyconny} from '../thyconn'

const svr=express()
mongoose.connect("mongodb://alesandro1:JsIEpzWnvdiwNEgJ@ac-ppjwoqd-shard-00-00.pjfjxpf.mongodb.net:27017,ac-ppjwoqd-shard-00-01.pjfjxpf.mongodb.net:27017,ac-ppjwoqd-shard-00-02.pjfjxpf.mongodb.net:27017/?ssl=true&replicaSet=atlas-e2inq3-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{console.log("N1gga suceeees!")})
let thycache:typeof mongoose|null=null
await thyconny(thycache)
const thyresult=mongoose.model("thystatus", thystatus)
//svr.use(express.json())
export default async function thyhandle(req:any,res:any){
    try{
        const thyreq:any=req.body
        console.log(thyreq)
        if(thyreq!=null){
            const thystat=new thyresult(thyreq)
            await thystat.save()
            console.log(thystat)
            res.end("true")
            
        }
        res.end("false")
    }
    catch(err){
        res.status(500).res.end("Another error")
    }
}