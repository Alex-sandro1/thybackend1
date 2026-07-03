import express from 'express'
import {thyref} from '../thyref'
import {countilize} from '../countilise'
import mongoose from 'mongoose'
import {thystatus} from '../thyschema'

mongoose.connect("mongodb://alesandro1:<db_password>@ac-ppjwoqd-shard-00-00.pjfjxpf.mongodb.net:27017,ac-ppjwoqd-shard-00-01.pjfjxpf.mongodb.net:27017,ac-ppjwoqd-shard-00-02.pjfjxpf.mongodb.net:27017/?ssl=true&replicaSet=atlas-e2inq3-shard-0&authSource=admin&appName=Cluster0")
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