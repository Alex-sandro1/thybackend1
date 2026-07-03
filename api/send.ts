import express from 'express'
import {thyref} from '../thyref'
import {countilize} from '../countilise'
import mongoose from 'mongoose'
import {thystatus} from '../thyschema'
import {thyconny} from '../thyconn'

let thycache:typeof mongoose|null=null
await thyconny(thycache)
const thymod=mongoose.model("thystatus", thystatus)

const svr=express()
export default async function thysend(req:any,res:any){
    const thysat=await thymod.find({})
    const thyy=countilize(thysat,thyref)
    res.json(thyy)
}