import express from 'express'
import {thyref} from '../thyref'
import {countilize} from '../countilise'
import mongoose from 'mongoose'
import {thystatus} from '../thyschema'

mongoose.connect("mongodb+srv://alesandro1:JsIEpzWnvdiwNEgJ@cluster0.pjfjxpf.mongodb.net/?appName=Cluster0")
.then(()=>{console.log("Countilize dAMN connected")})
const thymod=mongoose.model("thystatus", thystatus)

const svr=express()
//svr.use(express.json())
export default async function thysend(req:any,res:any){
    const thysat=await thymod.find({})
    const thyy=countilize(thysat,thyref)
    console.log(thyy)
    res.json(thyy)
}