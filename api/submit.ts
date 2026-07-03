import express from 'express'
import mongoose from 'mongoose'
import {thystatus} from '../thyschema'
import {thyconny} from '../thyconn'
import bodyParser from 'body-parser'
import {countilize} from '../countilise'
import {thyref} from '../thyref'


const svr=express()
svr.use(bodyParser.json())
export default async function thyhandle(req:any,res:any){
    try{
        let thycache:typeof mongoose|null=null
        await thyconny(thycache)
        const thyresult=mongoose.model("thystatus", thystatus)
        const thyreq:any=req.body
        const thycnt=countilize(thyreq,thyref)
        console.log(thycnt)
        if(thyreq!=null){
            const thystat=new thyresult(thycnt)
            await thystat.save()
            console.log(thycnt)   
            res.end("false")   
            
        }
        res.end("false")
    }
    catch(err){
        res.status(500).json({ error: "Another Annnoying  Error" })
    }
}