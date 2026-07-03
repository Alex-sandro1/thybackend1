import express from 'express'
import {thyref} from '../thyref'
import {countilize} from '../countilise'
import mongoose, { Schema } from 'mongoose'
import {thystatus} from '../thyschema'

const svr=express()
mongoose.connect("mongodb+srv://alesandro1:JsIEpzWnvdiwNEgJ@cluster0.pjfjxpf.mongodb.net/?appName=Cluster0")
.then(()=>{console.log("N1gga suceeees!")})

const thyresult=mongoose.model("thystatus", thystatus)
svr.use(express.json())
svr.post("/submit",(req:any,res)=>{
    const thyreq:any=req.body
    console.log(thyreq)
    if(thyreq!=null){
        const thystat=new thyresult({thyreq})
        thystat.save()
        console.log(thystat)
        
        
    }
    res.end("true")
})